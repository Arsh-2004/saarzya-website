import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, Sparkles, ArrowUpRight, X, Calendar, User } from "lucide-react";
import { getStoredPosts, syncPostsFromRemote } from "../utils/postsStorage";
import { navigateTo } from "../utils/router";

const getIconForType = (type) => {
  switch (type) {
    case "Magazine":
      return BookOpen;
    case "Resource Guide":
      return Sparkles;
    default:
      return FileText;
  }
};

function MagazinesBlogs() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    // Load local posts first for 0ms initial render
    setPosts(getStoredPosts());

    // Sync remote posts from Firebase DB
    syncPostsFromRemote();

    // Listen for live updates from admin portal or remote sync
    const handlePostsUpdated = () => {
      setPosts(getStoredPosts());
    };

    window.addEventListener("saarzya_posts_updated", handlePostsUpdated);
    return () => window.removeEventListener("saarzya_posts_updated", handlePostsUpdated);
  }, []);

  return (
    <section id="magazines" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">
          Read & Explore
        </p>
        <h2 className="m-0 font-heading text-3xl text-slate sm:text-4xl">
          Magazines & Blogs
        </h2>
        <p className="mb-0 mt-4 max-w-2xl text-base leading-8 text-slate/80 sm:text-lg">
          Thoughtful articles, digital magazines, and practical wellness guides designed to inspire self-growth and deep psychological understanding.
        </p>
      </motion.div>

      {/* Publications Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((item, index) => {
          const Icon = getIconForType(item.type);
          const isMagazine = item.type === "Magazine" || Boolean(item.pdfUrl);
          const buttonLabel = (item.buttonText && item.buttonText !== "Know More Or Subscribe") 
            ? item.buttonText 
            : (isMagazine ? "Know More" : "Read Article");

          const handleCardClick = () => {
            if (isMagazine) {
              navigateTo(`/pdf_reader_magazine?id=${item.id}`);
            } else {
              setActivePost(item);
            }
          };

          return (
            <motion.article
              key={item.id || item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-3xl border border-moss/15 bg-white/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-moss/35 hover:bg-white cursor-pointer"
              onClick={handleCardClick}
            >
              <div>
                <div className="relative mb-5 h-[420px] sm:h-[460px] w-full overflow-hidden rounded-2xl border border-moss/10 bg-[#F5F2EC] flex items-center justify-center p-3">
                  <img
                    src={item.image || "/assets/logo.jpg"}
                    alt={item.title}
                    className="h-full w-full object-contain rounded-xl transition duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-moss px-3.5 py-1 text-xs font-semibold text-white shadow-md">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="mb-3 flex items-center justify-between text-xs text-moss font-semibold uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon size={14} /> {item.type}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="m-0 font-heading text-2xl text-slate">{item.title}</h3>
                <p className="mb-0 mt-3 line-clamp-3 text-sm leading-7 text-slate/80">{item.description}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-moss/10 pt-4">
                <div className="flex items-center justify-between text-xs text-slate/60">
                  <span>By {item.author || "Saarzya Team"}</span>
                </div>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-5 text-sm font-bold shadow-md transition active:scale-95 ${
                    isMagazine
                      ? "bg-moss text-white hover:bg-[#3D5A4E]"
                      : "bg-moss/10 text-moss hover:bg-moss hover:text-white"
                  }`}
                >
                  <span>{buttonLabel}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Blog / Article Modal Overlay */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-moss/15 pb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-moss">
                  {activePost.type}
                </span>
                <button
                  onClick={() => setActivePost(null)}
                  className="rounded-full border border-moss/20 p-2 text-slate hover:bg-slate/10"
                  aria-label="Close reader"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6">
                <h2 className="font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">{activePost.title}</h2>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate/70">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-moss" /> {activePost.author || "Saarzya Team"}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-moss" /> {activePost.date}</span>
                </div>
              </div>

              {activePost.image && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-moss/15 shadow-md flex justify-center bg-[#F5F2EC] p-3">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="max-h-[500px] w-full object-contain rounded-2xl"
                  />
                </div>
              )}

              <div className="mt-8 space-y-4 border-t border-moss/15 pt-6 leading-relaxed text-slate/90">
                <p className="text-lg font-medium italic text-moss">{activePost.description}</p>
                <div className="whitespace-pre-line text-base leading-8 text-slate/85">
                  {activePost.content || "Full article content coming soon."}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-end border-t border-moss/15 pt-6">
                <button
                  onClick={() => setActivePost(null)}
                  className="rounded-full bg-moss px-7 py-3 text-sm font-semibold text-white shadow hover:bg-sage"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MagazinesBlogs;

