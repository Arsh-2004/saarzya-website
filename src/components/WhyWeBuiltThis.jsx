import { motion } from "framer-motion";
import { Compass, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Bridging the Gap",
    description:
      "Connecting academic psychology with everyday, practical life so individuals can better understand themselves.",
    icon: Compass,
    align: "left",
  },
  {
    number: "02",
    title: "Empowering Growth",
    description:
      "Providing actionable tools and knowledge to help people navigate their emotions with resilience.",
    icon: Zap,
    align: "right",
  },
  {
    number: "03",
    title: "A Safe Digital Ecosystem",
    description:
      "Creating a space where individuals can reflect, learn, and grow without the pressure of artificial social expectations.",
    icon: ShieldCheck,
    align: "left",
  },
];

function WhyWeBuiltThis() {
  return (
    <section
      id="why-we-built-this"
      className="relative w-full bg-gradient-to-b from-[#4A6B5E] via-[#587B6D] to-[#436256] py-20 px-4 sm:px-8 text-white shadow-xl overflow-hidden my-12"
    >
      {/* Subtle background ambient glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="section-shell relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl text-white font-medium tracking-tight">
              WHY WE BUILT THIS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Saarzya addresses the overwhelming noise of digital filters and staged perfection by offering authentic psychoeducation, self-growth resources, and a non-judgmental community—specifically tailored for students and young seekers.
            </p>
          </motion.div>

          {/* Staggered Cards */}
          <div className="space-y-10 sm:space-y-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isLeft = pillar.align === "left";

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`w-full max-w-2xl ${isLeft ? "mr-auto" : "ml-auto"}`}
                >
                  <div className={`group relative rounded-3xl bg-white text-slate shadow-xl border border-white/90 transition duration-300 hover:shadow-2xl py-7 sm:py-10 ${
                    isLeft 
                      ? "pl-7 sm:pl-10 pr-20 sm:pr-24 lg:pr-28" 
                      : "pr-7 sm:pr-10 pl-20 sm:pl-24 lg:pl-28"
                  }`}>
                    {/* Number */}
                    <span className="block font-heading text-5xl sm:text-6xl font-bold text-moss/30 mb-2 transition group-hover:text-moss/50">
                      {pillar.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl text-slate font-medium">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-base sm:text-lg text-slate/80 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    {/* Floating Overlapping Circular Badge */}
                    <div
                      className={`flex absolute top-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-cream shadow-2xl border-4 border-[#587B6D] transition-transform duration-300 group-hover:scale-110 ${
                        isLeft ? "-right-7 sm:-right-12" : "-left-7 sm:-left-12"
                      }`}
                    >
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-sage/20 text-moss">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.75]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
    </section>
  );
}

export default WhyWeBuiltThis;
