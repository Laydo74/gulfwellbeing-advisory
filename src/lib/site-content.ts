export type Section = { id: string; title: string; body: string; eyebrow?: string };

export const pageContent = {
  wellbeing: {
    eyebrow: "PRIVATE WELLBEING ADVISORY",
    title: "A more considered way forward.",
    intro: "Private advisory and coaching for people navigating pressure, change, relationships and the demands of a full life.",
    sections: [
      { id: "stress-burnout", title: "Stress & Burnout", body: "Create space to understand sustained pressure, restore perspective and develop a more sustainable rhythm for work, responsibility and recovery." },
      { id: "emotional-balance", title: "Emotional Balance", body: "A confidential space to explore what is happening beneath the surface and move through demanding periods with greater steadiness." },
      { id: "life-transitions", title: "Life Transitions", body: "Thoughtful support through personal, family or professional chapters that require a new perspective and a different way forward." },
      { id: "relationships", title: "Relationships & Family", body: "A private setting for communication, boundaries, expectations and the complexities of close relationships." },
      { id: "mindfulness", title: "Mindfulness & Presence", body: "Practical practices that encourage greater presence, awareness and clarity within the life you already lead." },
      { id: "energy-restoration", title: "Energy & Restoration", body: "A holistic approach to restoring your sense of capacity, presence and inner balance, shaped around your circumstances." },
    ] satisfies Section[],
  },
  women: {
    eyebrow: "PRIVATE ADVISORY FOR WOMEN",
    title: "A private space for every dimension of your life.",
    intro: "Discreet, personal guidance for women navigating relationships, family, identity, confidence and periods of meaningful change.",
    sections: [
      { id: "womens-wellbeing", title: "Women's Wellbeing", body: "A whole-person approach that considers your circumstances, priorities, relationships and the season of life you are in." },
      { id: "motherhood", title: "Motherhood", body: "A private space to reflect on the realities of motherhood while keeping sight of the woman beyond the role." },
      { id: "private-family-dynamics", title: "Family & Private Life", body: "Thoughtful support around expectations, responsibilities, communication and the dynamics that shape private life." },
      { id: "confidence", title: "Confidence & Self-Trust", body: "Develop a quieter, more grounded relationship with yourself and the decisions you need to make." },
      { id: "marriage-pressure", title: "Marriage & Relationship Pressure", body: "A non-judgmental setting to explore communication, expectations, emotional distance and difficult decisions with care." },
      { id: "transitions-women", title: "Transitions for Women", body: "Considered support through changes in identity, family, work, relationships and personal direction." },
    ] satisfies Section[],
  },
  men: {
    eyebrow: "PRIVATE ADVISORY FOR MEN",
    title: "Clarity for the man behind the responsibility.",
    intro: "Discreet, practical support for men carrying leadership, family, professional and personal responsibilities.",
    sections: [
      { id: "mens-wellbeing", title: "Men's Wellbeing", body: "A private advisory relationship that considers the full context of your life, responsibilities and personal priorities." },
      { id: "fatherhood-pressure", title: "Fatherhood & Pressure", body: "Space to navigate the demands of provision, partnership, fatherhood and the desire to remain present without losing yourself." },
      { id: "emotional-balance", title: "Emotional Balance", body: "Understand patterns of pressure and develop a steadier, more deliberate response to demanding situations." },
      { id: "confidence-leadership", title: "Confidence & Leadership", body: "Strengthen the inner clarity and self-awareness that support responsible decisions and authentic leadership." },
      { id: "provider-role", title: "The Provider Role", body: "A confidential place to examine the expectations and unseen weight that can accompany being relied upon." },
      { id: "transitions-men", title: "Transitions for Men", body: "Grounded support through changes in work, identity, relationships, family life and personal direction." },
    ] satisfies Section[],
  },
  business: {
    eyebrow: "BUSINESS & EXECUTIVE",
    title: "The person behind the position matters too.",
    intro: "Private wellbeing advisory for founders, executives and senior professionals navigating sustained responsibility, visibility and complexity.",
    sections: [
      { id: "executive-wellbeing", title: "Executive Wellbeing", body: "A confidential space for the individual behind the role, where personal capacity and professional responsibility meet." },
      { id: "burnout-prevention", title: "Pressure & Burnout Prevention", body: "Recognise patterns of sustained pressure early and build a more sustainable way to lead, decide and perform." },
      { id: "leadership-clarity", title: "Leadership Clarity", body: "Create the space required for considered decisions, difficult conversations, boundaries and long-term direction." },
      { id: "team-wellbeing", title: "Leadership & Team Wellbeing", body: "Thoughtful wellbeing advisory for leadership teams, shaped around organisational culture, responsibility and real-world demands." },
    ] satisfies Section[],
  },
} as const;
