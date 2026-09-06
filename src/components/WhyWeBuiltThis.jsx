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
        className="rounded-3xl border border-moss/15 bg-white/80 p-8 sm:p-10 lg:p-12 shadow-soft"
      >
        <h2 className="m-0 font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">
          Why We Built This
        </h2>
        <p className="mb-0 mt-3 font-heading text-xl text-moss sm:text-2xl">
          A Compassionate Sanctuary for Human Connection
        </p>

        <p className="mb-0 mt-6 text-base sm:text-lg leading-8 text-slate/85">
          Saarzya was built as a compassionate sanctuary to prioritize genuine vulnerability and human connection over cold, distant clinical support.
        </p>
        <p className="mb-0 mt-4 text-base sm:text-lg leading-8 text-slate/85">
          The platform addresses the overwhelming noise of digital filters and staged perfection by offering authentic psychoeducation, self-growth resources, and a non-judgmental community—specifically tailored for students and young seekers.
        </p>

        <div className="mt-10 border-t border-moss/15 pt-10">
          <h3 className="m-0 font-heading text-2xl text-slate sm:text-3xl">
            Key Pillars Behind Its Creation
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-moss/15 bg-cream/50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-moss/30 hover:bg-white"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-moss/10 p-3 text-moss">
                    <Icon size={24} />
                  </div>
                  <h4 className="m-0 font-heading text-xl text-slate">{pillar.title}</h4>
                  <p className="mb-0 mt-3 text-sm leading-7 text-slate/80">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyWeBuiltThis;
