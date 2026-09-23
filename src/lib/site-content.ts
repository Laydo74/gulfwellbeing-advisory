export type Section = { id: string; title: string; body: string; eyebrow?: string };
export const pageContent = {
  wellbeing: {
    eyebrow: "THE WHOLE PICTURE", title: "Wellbeing, with depth and direction.", intro: "A private advisory relationship for the moments that call for clearer perspective, steadier energy and a more considered way forward.",
    sections: [
      { id: "stress-burnout", title: "Stress & Burnout", body: "Understand the patterns behind sustained pressure and create a more intelligent rhythm for work, responsibility and recovery." },
      { id: "emotional-balance", title: "Emotional Balance", body: "A calm space to recognise what is asking for attention and respond with greater steadiness." },
      { id: "life-transitions", title: "Life Transitions", body: "Private support through change—whether chosen, unexpected, personal or professional." },
      { id: "relationships", title: "Relationships", body: "Thoughtful perspective for navigating communication, connection, boundaries and complex private dynamics." },
      { id: "mindfulness", title: "Mindfulness", body: "Practical ways to cultivate presence and clarity without stepping away from the life you lead." },
      { id: "energy-restoration", title: "Energy Restoration", body: "A considered approach to restoring capacity, attention and a sustainable sense of vitality." },
    ] satisfies Section[],
  },
  women: {
    eyebrow: "A PRIVATE SPACE FOR WOMEN", title: "Your life is nuanced. Your support should be too.", intro: "Discreet, thoughtful guidance for women navigating identity, relationships, family life and meaningful change.",
    sections: [
      { id: "womens-wellbeing", title: "Women's Wellbeing", body: "A whole-person approach shaped around your individual context, values and season of life." },
      { id: "motherhood", title: "Motherhood", body: "Space to consider the emotional and practical realities of motherhood, alongside the person you are beyond it." },
      { id: "private-family-dynamics", title: "Private & Family Dynamics", body: "Sensitive support for the relationships, expectations and responsibilities that shape private life." },
      { id: "confidence", title: "Confidence", body: "Develop a quieter, more grounded confidence that aligns with who you are and how you wish to live." },
      { id: "marriage-pressure", title: "Marriage Pressure", body: "A non-judgmental place to navigate expectations, communication and decisions with care." },
      { id: "transitions-women", title: "Transitions for Women", body: "Considered support through personal, family and professional chapters of change." },
    ] satisfies Section[],
  },
  men: {
    eyebrow: "A PRIVATE SPACE FOR MEN", title: "Clarity for the weight of responsibility.", intro: "Practical, discreet support for men carrying leadership, family and personal responsibilities—without judgement or assumption.",
    sections: [
      { id: "mens-wellbeing", title: "Men's Wellbeing", body: "A clear-eyed approach to personal wellbeing that respects your responsibilities and the way you prefer to work." },
      { id: "fatherhood-pressure", title: "Fatherhood & Pressure", body: "Navigate the competing demands of presence, provision, partnership and personal capacity." },
      { id: "emotional-balance", title: "Emotional Balance", body: "Build steadier responses to pressure and a clearer understanding of what sits beneath it." },
      { id: "confidence-leadership", title: "Confidence & Leadership", body: "Strengthen the inner clarity that supports decisive, responsible leadership." },
      { id: "provider-role", title: "The Provider Role", body: "A private space to examine the expectations and unseen weight that can accompany being relied upon." },
      { id: "transitions-men", title: "Transitions for Men", body: "Grounded support through changes in identity, work, relationships, family and direction." },
    ] satisfies Section[],
  },
  business: {
    eyebrow: "BUSINESS & EXECUTIVE", title: "Clearer leadership begins within.", intro: "Private wellbeing advisory for founders, executives and senior leaders operating under sustained complexity and expectation.",
    sections: [
      { id: "executive-wellbeing", title: "Executive Wellbeing", body: "A confidential advisory space for the individual behind the role—where personal capacity and professional responsibility meet." },
      { id: "burnout-prevention", title: "Burnout Prevention", body: "Recognise pressure patterns early and develop sustainable ways to lead without losing perspective or vitality." },
      { id: "leadership-clarity", title: "Leadership Clarity", body: "Create the mental and emotional space required for considered decisions, difficult conversations and long-term direction." },
      { id: "team-wellbeing", title: "Team Wellbeing", body: "Thoughtful wellbeing support for leadership teams, shaped to organisational context rather than generic programmes." },
    ] satisfies Section[],
  },
} as const;
