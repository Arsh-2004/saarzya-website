const STORAGE_KEY = "saarzya_posts_v1";
const ADMIN_PASSCODE_KEY = "saarzya_admin_passcode_v1";
const DEFAULT_PASSCODE = "saarzya2026";

const DEFAULT_POSTS = [
  {
    id: "post-1",
    type: "Magazine",
    title: "Saarzya Wellness Edition Vol. 1",
    description:
      "Our flagship digital magazine exploring student mental health, emotional resilience, and modern self-discovery.",
    content: `Welcome to the inaugural volume of the Saarzya Wellness Edition!

In this issue, we dive deep into the unique challenges faced by students and young professionals navigating today's fast-paced, high-pressure environments. From managing academic stress and burnout to cultivating authentic self-awareness, our articles bridge the gap between academic psychology and real-life emotional wellness.

Highlights of this Edition:
• Navigating Digital Pressure & Social Comparisons
• Building Daily Mindful Routines for Focus & Calm
• Understanding Emotional Boundaries in Relationships
• Practical Exercises for Grounding & Stress Reduction

Read through our curated features, reflect on the guided exercises, and remember: taking care of your mind is a daily journey of small, intentional steps.`,
    badge: "Latest Release",
    image: "/assets/logo.jpg",
    date: "Sep 2026",
    author: "Saarzya Editorial Team",
  },
  {
    id: "post-2",
    type: "Article / Blog",
    title: "Finding Your Core in a Noisy World",
    description:
      "Practical psychological insights on peeling back external pressures and returning to what truly matters—your core self.",
    content: `In a world filled with constant notifications, social comparisons, and endless expectations, it’s easy to feel disconnected from who you truly are.

The concept of 'Saarzya' centers around essence—returning to your core truth. When we strip away the noise of external validation, we give ourselves permission to tune into our genuine feelings, values, and needs.

Three Ways to Reconnect with Your Core Self:
1. Practice Mindful Pauses: Dedicate 5 minutes every day to silence without screens or distractions.
2. Separate Thoughts from Identity: Recognize that anxious or self-critical thoughts are temporary experiences, not your absolute truth.
3. Align Actions with Values: Focus on small choices that align with your personal well-being rather than societal perfection.

Remember, self-growth isn't about becoming someone new; it's about returning home to your true self.`,
    badge: "Popular Read",
    image: "/assets/sanyukta.jpg",
    date: "Sep 2026",
    author: "Sanyukta Sherry",
  },
  {
    id: "post-3",
    type: "Resource Guide",
    title: "Mindfulness & Daily Balance Handbook",
    description:
      "Actionable self-care tools, reflection prompts, and stress management routines tailored for young seekers.",
    content: `This practical handbook is designed to equip you with simple, evidence-based tools for emotional regulation and mental clarity.

What's Inside:
• 5-Minute Morning Grounding Rituals
• The 4-7-8 Breathing Technique for Anxiety Management
• Daily Journal Prompts for Self-Reflection
• Healthy Sleep Hygiene Checklist for Busy Minds

Download or bookmark this guide to keep essential wellness practices accessible whenever you need a moment of calm.`,
    badge: "Free Download",
    image: "/assets/aarzoo.jpg",
    date: "Sep 2026",
    author: "Aarzoo Singh",
  },
];

export function getStoredPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to read stored posts:", err);
    return DEFAULT_POSTS;
  }
}

export function savePost(postData) {
  const posts = getStoredPosts();
  let updatedPosts;

  if (postData.id) {
    // Edit existing
    updatedPosts = posts.map((p) => (p.id === postData.id ? { ...p, ...postData } : p));
  } else {
    // Create new
    const newPost = {
      ...postData,
      id: "post-" + Date.now(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    updatedPosts = [newPost, ...posts];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  window.dispatchEvent(new Event("saarzya_posts_updated"));
  return updatedPosts;
}

export function deletePost(id) {
  const posts = getStoredPosts();
  const updatedPosts = posts.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  window.dispatchEvent(new Event("saarzya_posts_updated"));
  return updatedPosts;
}

export function resetPostsToDefault() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
  window.dispatchEvent(new Event("saarzya_posts_updated"));
  return DEFAULT_POSTS;
}

export function getAdminPasscode() {
  return localStorage.getItem(ADMIN_PASSCODE_KEY) || DEFAULT_PASSCODE;
}

export function setAdminPasscode(newPasscode) {
  localStorage.setItem(ADMIN_PASSCODE_KEY, newPasscode);
}
