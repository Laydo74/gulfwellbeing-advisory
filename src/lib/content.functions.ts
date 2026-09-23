import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function publicClient() {
  const key = process.env['SUPABASE_PUBLISHABLE_KEY']!;
  return createClient<Database>(process.env['SUPABASE_URL']!, key, { auth: { persistSession: false }, global: { fetch: (input, init) => { const headers = new Headers(init?.headers); if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization'); headers.set('apikey', key); return fetch(input, { ...init, headers }); } } });
}

export const getPublishedContent = createServerFn({ method: "GET" }).handler(async () => {
  const client = publicClient();
  const [content, posts, categories] = await Promise.all([
    client.from("content_entries").select("*").eq("is_published", true).order("sort_order"),
    client.from("blog_posts").select("*, blog_categories(name, slug)").eq("is_published", true).order("published_at", { ascending: false }),
    client.from("blog_categories").select("*").eq("is_published", true).order("sort_order"),
  ]);
  return { content: content.data ?? [], posts: posts.data ?? [], categories: categories.data ?? [] };
});

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(255), phone: z.string().trim().max(40).optional(), country: z.string().trim().min(2).max(80), area_of_support: z.string().trim().min(2).max(120), session_format: z.string().trim().min(2).max(60), availability: z.string().trim().min(2).max(200), contact_method: z.string().trim().min(2).max(40), message: z.string().trim().max(2000).optional(),
});
export const submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => enquirySchema.parse(data)).handler(async ({ data }) => {
  const payload = { ...data, phone: data.phone ?? null, message: data.message ?? null };
  const { error } = await publicClient().from("booking_enquiries").insert(payload);
  if (error) throw new Error("We could not send your request. Please try again.");
  return { ok: true };
});

export const claimOwner = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { count } = await supabaseAdmin.from("user_roles").select("id", { count: "exact", head: true });
  if ((count ?? 0) > 0) return { claimed: false };
  const { error } = await supabaseAdmin.from("user_roles").insert({ user_id: context.userId, role: "owner" });
  if (error) throw error;
  return { claimed: true };
});
