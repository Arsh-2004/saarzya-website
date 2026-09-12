const defaultPosts = [
  {
    id: "post-1",
    type: "Magazine",
    title: "Quarterly Magazine — Ψ-COLOGY (Issue 01)",
    description: "Subscribe to our quarterly magazine dedicated to psychology and mental health which keeps you up-to-date in latest psychology trends, research, ongoing opportunities, and fun activities.",
    content: "Welcome to the inaugural edition of Ψ-COLOGY by Saarzya!\n\nOUR VISION:\n• Filling the Gap: Bridging practical and theoretical psychological knowledge with real-world updates.\n• Research & Insights: Promoting psychology research among youth and experts.\n• Mirror of Youth & Psychologist: Giving opportunities to young minds to express themselves.\n• Fun Corner: Interactive games, quizzes, and psychological facts.\n\nPURPOSE & ROLE:\n• Latest Psychology Trends & News\n• Research Highlights in Mental Health\n• Critical Thinking & Case Studies\n• Youth Opportunities & Professional Branding\n\nRead the full interactive PDF issue below or download your copy!",
    badge: "Quarterly Magazine",
    image: "/assets/logo.jpg",
    pdfUrl: "/assets/saarzya-magazine-issue-01.pdf",
    buttonText: "Know More Or Subscribe",
    date: "July 2026",
    author: "Saarzya Editorial Team",
    downloadable: true
  },
  {
    id: "post-2",
    type: "Article / Blog",
    title: "Finding Your Core in a Noisy World",
    description: "Practical psychological insights on peeling back external pressures and returning to what truly matters—your core self.",
    content: "In a world filled with constant notifications, social comparisons, and endless expectations, it’s easy to feel disconnected from who you truly are.\n\nThe concept of 'Saarzya' centers around essence—returning to your core truth. When we strip away the noise of external validation, we give ourselves permission to tune into our genuine feelings, values, and needs.",
    badge: "Popular Read",
    image: "/assets/sanyukta.jpg",
    pdfUrl: "",
    buttonText: "Read Article",
    date: "Sep 2026",
    author: "Sanyukta Sherry",
    downloadable: false
  },
  {
    id: "post-3",
    type: "Resource Guide",
    title: "Mindfulness & Daily Balance Handbook",
    description: "Actionable self-care tools, reflection prompts, and stress management routines tailored for young seekers.",
    content: "This practical handbook is designed to equip you with simple, evidence-based tools for emotional regulation and mental clarity.\n\nWhat's Inside:\n• 5-Minute Morning Grounding Rituals\n• The 4-7-8 Breathing Technique for Anxiety Management\n• Daily Journal Prompts for Self-Reflection\n• Healthy Sleep Hygiene Checklist for Busy Minds",
    badge: "Free Download",
    image: "/assets/aarzoo.jpg",
    pdfUrl: "",
    buttonText: "View Handbook",
    date: "Sep 2026",
    author: "Aarzoo Singh",
    downloadable: false
  }
];

async function seedFirebase() {
  try {
    const res = await fetch("https://saarzya-61994-default-rtdb.firebaseio.com/posts.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(defaultPosts)
    });
    const data = await res.json();
    console.log("Firebase Seed Success:", data ? data.length : 0, "posts seeded!");
  } catch (err) {
    console.error("Firebase Seed Error:", err);
  }
}

seedFirebase();
