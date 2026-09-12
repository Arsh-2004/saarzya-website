import { motion } from "framer-motion";
import { Compass, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    title: "Bridging the Gap",
    description:
      "Connecting academic psychology with everyday, practical life so individuals can better understand themselves.",
    icon: Compass,
  },
  {
    title: "Empowering Growth",
    description:
      "Providing actionable tools and knowledge to help people navigate their emotions with resilience.",
    icon: Zap,
  },
  {
    title: "A Safe Digital Ecosystem",
    description:
      "Creating a space where individuals can reflect, learn, and grow without the pressure of artificial social expectations.",
    icon: ShieldCheck,
  },
];

function WhyWeBuiltThis() {
  return (
    <section id="why-we-built-this" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-moss">
          WHY WE BUILT THIS
        </p>
        <h2 className="m-0 max-w-3xl font-heading text-2xl text-slate sm:text-3xl leading-snug">
          A compassionate sanctuary for genuine vulnerability and human connection.
        </h2>
        <p className="mb-0 mt-5 max-w-4xl leading-8 text-slate/80">
          Saarzya addresses the overwhelming noise of digital filters and staged perfection by offering authentic psychoeducation, self-growth resources, and a non-judgmental community—specifically tailored for students and young seekers.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-3xl border border-transparent bg-white/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-moss/30 hover:bg-white"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-moss/10 p-3 text-moss transition group-hover:bg-moss group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="m-0 font-heading text-2xl text-slate">{pillar.title}</h3>
              <p className="mb-0 mt-4 leading-8 text-slate/80">{pillar.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default WhyWeBuiltThis;
