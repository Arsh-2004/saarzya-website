import { motion } from "framer-motion";
import { BookOpen, FileText, Sparkles, ArrowUpRight } from "lucide-react";

const publications = [
  {
    type: "Magazine",
    title: "Saarzya Wellness Edition Vol. 1",
    description:
      "Our flagship digital magazine exploring student mental health, emotional resilience, and modern self-discovery.",
    badge: "Latest Release",
    icon: BookOpen,
  },
  {
    type: "Article / Blog",
    title: "Finding Your Core in a Noisy World",
    description:
      "Practical psychological insights on peeling back external pressures and returning to what truly matters—your core self.",
    badge: "Popular Read",
    icon: FileText,
  },
  {
    type: "Resource Guide",
    title: "Mindfulness & Daily Balance Handbook",
    description:
      "Actionable self-care tools, reflection prompts, and stress management routines tailored for young seekers.",
    badge: "Free Download",
    icon: Sparkles,
  },
];

function MagazinesBlogs() {
  return (
    <section id="magazines" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {publications.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-moss/15 bg-white/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-moss/35 hover:bg-white"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-moss/10 p-3 text-moss transition group-hover:bg-moss group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-moss/20 bg-sage/10 px-3 py-1 text-xs font-semibold text-moss">
                    {item.badge}
                  </span>
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-moss/80">
                  {item.type}
                </p>
                <h3 className="m-0 font-heading text-2xl text-slate">{item.title}</h3>
                <p className="mb-0 mt-3 text-sm leading-7 text-slate/80">{item.description}</p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-moss transition group-hover:translate-x-1">
                <span>Read Feature</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default MagazinesBlogs;
