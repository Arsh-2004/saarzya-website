const STORAGE_KEY = "saarzya_posts_v1";
const ADMIN_PASSCODE_KEY = "saarzya_admin_passcode_v1";
const DEFAULT_PASSCODE = "saarzya2026";

const FIREBASE_POSTS_URL = "https://saarzya-61994-default-rtdb.firebaseio.com/posts.json";
const FIREBASE_PASSCODE_URL = "https://saarzya-61994-default-rtdb.firebaseio.com/admin_passcode.json";

const DEFAULT_POSTS = [
  {
    id: "post-1",
    type: "Magazine",
    title: "Quarterly Magazine — Ψ-COLOGY (Issue 01)",
    description:
      "Subscribe to our quarterly magazine dedicated to psychology and mental health which keeps you up-to-date in latest psychology trends, research, ongoing opportunities, and fun activities.",
    content: `Welcome to the inaugural edition of Ψ-COLOGY by Saarzya!

OUR VISION:
• Filling the Gap: Bridging practical and theoretical psychological knowledge with real-world updates.
• Research & Insights: Promoting psychology research among youth and experts.
• Mirror of Youth & Psychologist: Giving opportunities to young minds to express themselves.
• Fun Corner: Interactive games, quizzes, and psychological facts.

PURPOSE & ROLE:
• Latest Psychology Trends & News
• Research Highlights in Mental Health
• Critical Thinking & Case Studies
• Youth Opportunities & Professional Branding

Read the full interactive PDF issue below or download your copy!`,
    badge: "Quarterly Magazine",
    image: "/assets/saarzya_magazine_cover.jpg",
    pdfUrl: "/assets/saarzya-magazine-issue-01.pdf",
    buttonText: "Know More",
    date: "July 2026",
    author: "Saarzya Editorial Team",
    downloadable: true,
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
    pdfUrl: "",
    buttonText: "Read Article",
    date: "Sep 2026",
    author: "Sanyukta Sherry",
    downloadable: false,
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
    pdfUrl: "",
    buttonText: "View Handbook",
    date: "Sep 2026",
    author: "Aarzoo Singh",
    downloadable: false,
  },
];

// Asynchronously sync remote posts from Firebase DB
export async function syncPostsFromRemote() {
  try {
    const res = await fetch(FIREBASE_POSTS_URL);
    if (!res.ok) return;
    const remotePosts = await res.json();

    if (Array.isArray(remotePosts) && remotePosts.length > 0) {
      // Ensure post-1 uses new magazine cover
      const updated = remotePosts.map(p => p.id === 'post-1' ? { ...p, image: "/assets/saarzya_magazine_cover.jpg", buttonText: "Know More" } : p);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("saarzya_posts_updated"));
      return updated;
    } else if (remotePosts === null) {
      // Seed defaults if empty
      await pushPostsToRemote(DEFAULT_POSTS);
    }
  } catch (err) {
    console.warn("Firebase posts sync fallback to local storage:", err);
  }
}

// Asynchronously sync passcode from Firebase DB
export async function syncPasscodeFromRemote() {
  try {
    const res = await fetch(FIREBASE_PASSCODE_URL);
    if (!res.ok) return;
    const remotePasscode = await res.json();
    if (typeof remotePasscode === "string" && remotePasscode.trim()) {
      localStorage.setItem(ADMIN_PASSCODE_KEY, remotePasscode);
    }
  } catch (err) {
    console.warn("Firebase passcode sync fallback:", err);
  }
}

// Trigger background sync on page load
if (typeof window !== "undefined") {
  syncPostsFromRemote();
  syncPasscodeFromRemote();
}

async function pushPostsToRemote(posts) {
  try {
    await fetch(FIREBASE_POSTS_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    });
  } catch (err) {
    console.error("Failed to push posts to Firebase DB:", err);
  }
}

async function pushPasscodeToRemote(passcode) {
  try {
    await fetch(FIREBASE_PASSCODE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passcode),
    });
  } catch (err) {
    console.error("Failed to push passcode to Firebase DB:", err);
  }
}

export function getStoredPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    const parsed = JSON.parse(raw);
    const updated = parsed.map(p => p.id === 'post-1' ? { ...p, image: "/assets/saarzya_magazine_cover.jpg", buttonText: "Know More" } : p);
    return updated;
  } catch (err) {
    console.error("Failed to read stored posts:", err);
    return DEFAULT_POSTS;
  }
}

export function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
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

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    window.dispatchEvent(new Event("saarzya_posts_updated"));
    // Push updated posts array globally to Firebase DB
    pushPostsToRemote(updatedPosts);
    return updatedPosts;
  } catch (err) {
    console.error("Quota exceeded or failed to save post:", err);
    alert("Storage quota reached on this device! Please use a smaller image or image URL.");
    return posts;
  }
}

export function deletePost(id) {
  const posts = getStoredPosts();
  const updatedPosts = posts.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  window.dispatchEvent(new Event("saarzya_posts_updated"));
  // Sync deletion globally
  pushPostsToRemote(updatedPosts);
  return updatedPosts;
}

export function resetPostsToDefault() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
  window.dispatchEvent(new Event("saarzya_posts_updated"));
  // Reset Firebase DB
  pushPostsToRemote(DEFAULT_POSTS);
  return DEFAULT_POSTS;
}

export function getEmbeddablePdfUrl(url) {
  if (!url) return "/assets/saarzya-magazine-issue-01.pdf";

  // Handle Google Drive links
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  return url;
}

export function getDirectDownloadPdfUrl(url) {
  if (!url) return "/assets/saarzya-magazine-issue-01.pdf";

  // Convert Google Drive share link to direct download link
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }

  return url;
}

export function getAdminPasscode() {
  return localStorage.getItem(ADMIN_PASSCODE_KEY) || DEFAULT_PASSCODE;
}

export function setAdminPasscode(newPasscode) {
  localStorage.setItem(ADMIN_PASSCODE_KEY, newPasscode);
  pushPasscodeToRemote(newPasscode);
}


