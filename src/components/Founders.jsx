import { motion } from "framer-motion";

const founders = [
  {
    name: "Aarzoo Singh",
    role: "Co-founder & Managing Director",
    bio: "Aarzoo is dedicated to building an accessible, transparent, and stigma-free mental health ecosystem where every individual receives compassionate, professional care.",
    quote: "Mental healthcare shouldn't feel like entering a cold clinic. SAARZYA was born out of a desire to make quality support accessible without complex barriers, We provide the trusted ecosystem and administrative care so you can focus entirely on your personal growth alongside qualified, empaneled professionals.",
    tags: ["Emotional Safety", "Administrative Care", "Youth & Professional Support"],
    initials: "AS",
    image: "/assets/aarzoo.jpg",
  },
  {
    name: "Sanyukta Sherry",
    role: "Co-founder, Executive Director",
    bio: "Sanyukta champions a therapy-first approach that blends evidence-based frameworks with deep emotional listening to help clients feel lighter, clearer, and more resilient.",
    quote: "Healing is not becoming someone else, it is returning home to yourself.",
    tags: ["Individual Therapy", "Stress Management", "Mindful Wellness"],
    initials: "SS",
    image: "/assets/sanyukta.jpg",
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

      <div className="mt-12 flex flex-col gap-10">
        {founders.map((founder, index) => (
          <motion.article
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-card p-8 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-12">
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-[420px] w-full max-w-[360px] shrink-0 self-center rounded-[2.5rem] border-2 border-moss/25 object-cover object-top shadow-2xl transition duration-500 hover:scale-[1.01] sm:h-[500px] sm:max-w-[420px] md:h-[540px] md:w-[380px] lg:w-[420px]"
                />
              ) : (
                <div className="flex h-[420px] w-full max-w-[360px] shrink-0 self-center items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-sage to-moss font-heading text-7xl text-white shadow-2xl sm:h-[500px] sm:max-w-[420px] md:h-[540px] md:w-[380px] lg:w-[420px]">
                  {founder.initials}
                </div>
              )}
              <div className="flex flex-1 flex-col justify-center">
                <div className="inline-block self-start rounded-full border border-moss/20 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-moss">
                  {founder.role}
                </div>
                <h3 className="m-0 mt-3 font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">{founder.name}</h3>

                <p className="mb-0 mt-6 text-base leading-8 text-slate/85 sm:text-lg sm:leading-9">{founder.bio}</p>
                <blockquote className="mb-0 mt-6 rounded-3xl border border-moss/20 bg-white/90 p-5 sm:p-6 italic text-slate/90 shadow-sm text-base sm:text-lg leading-relaxed">
                  "{founder.quote}"
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-moss/20 bg-sage/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-moss"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Founders;
