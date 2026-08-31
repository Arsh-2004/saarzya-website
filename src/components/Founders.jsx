import { motion } from "framer-motion";

const founders = [
  {
    name: "Sanyukta",
    role: "Co-founder",
    bio: "Sanyukta champions a therapy-first approach that blends evidence-based frameworks with deep emotional listening to help clients feel lighter, clearer, and more resilient.",
    quote: "Healing is not becoming someone else, it is returning home to yourself.",
    tags: ["Individual Therapy", "Stress Management", "Mindful Wellness"],
    initials: "S",
  },
  {
    name: "Aarzo",
    role: "Co-founder",
    bio: "Aarzo focuses on building safe spaces where people can speak freely, explore identity, and grow through compassionate, practical, and culturally aware support.",
    quote: "A safe space is where growth begins without fear of judgment.",
    tags: ["Emotional Safety", "Growth Coaching", "Youth Wellness"],
    initials: "A",
  },
];

function Founders() {
  return (
    <section id="founders" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">About Saarzya</p>
        <h2 className="m-0 max-w-3xl font-heading text-3xl text-slate sm:text-4xl">A story rooted in empathy and intentional care.</h2>
        <p className="mb-0 mt-5 max-w-4xl leading-8 text-slate/80">
          Saarzya was built to become a trusted mental wellness initiative where young adults and
          professionals can seek support without stigma. Through counselling, psychological guidance,
          and community wellness practices, we create pathways toward steady, meaningful healing.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {founders.map((founder, index) => (
          <motion.article
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-card p-7 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sage to-moss font-heading text-3xl text-white">
                {founder.initials}
              </div>
              <div>
                <h3 className="m-0 font-heading text-2xl text-slate">{founder.name}</h3>
                <p className="m-0 mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-slate/70">{founder.role}</p>
              </div>
            </div>

            <p className="mb-0 leading-8 text-slate/80">{founder.bio}</p>
            <p className="mb-0 mt-5 rounded-2xl border border-moss/15 bg-white/85 px-4 py-3 italic text-slate/85">
              "{founder.quote}"
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {founder.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-moss/20 bg-sage/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-moss"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Founders;
