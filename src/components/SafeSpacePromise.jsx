import { motion } from "framer-motion";
import { Fingerprint, Heart, Lock, UserRoundCog, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "100% Confidentiality",
    description: "Your personal stories, notes, and sessions remain completely private and securely protected.",
    icon: Lock,
    accent: "border-moss/30 bg-moss/5",
    iconBg: "bg-moss text-white",
  },
  {
    title: "Stigma Free Space",
    description: "Express your thoughts and emotions freely without fear of judgment, shame, or bias.",
    icon: Fingerprint,
    accent: "border-sage/40 bg-sage/10",
    iconBg: "bg-[#436256] text-white",
  },
  {
    title: "Personalized Care",
    description: "Tailored psychological guidance crafted around your unique lived experiences and growth goals.",
    icon: UserRoundCog,
    accent: "border-moss/30 bg-moss/5",
    iconBg: "bg-moss text-white",
  },
  {
    title: "Empathy First",
    description: "Compassionate practitioners who prioritize genuine human connection and healing above all else.",
    icon: Heart,
    accent: "border-sage/40 bg-sage/10",
    iconBg: "bg-[#3A554A] text-white",
  },
];

function SafeSpacePromise() {
  return (
    <section className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-moss/20 bg-gradient-to-b from-[#FBF9F4] via-white to-[#F5F2EA] p-8 sm:p-12 lg:p-16 shadow-soft"
      >
        {/* Subtle background ambient blur spots */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sage/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-moss/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/25 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-moss">
            <ShieldCheck size={14} /> The Safe Space Promise
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate leading-tight">
            Your care journey stays respectful, private, and human.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate/75 leading-relaxed">
            We hold space for your healing with absolute discretion, deep empathy, and evidence-based psychological support.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.09 }}
                className={`group flex flex-col justify-between rounded-3xl border p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl bg-white/90 ${pillar.accent}`}
              >
                <div>
                  <div className={`mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl ${pillar.iconBg} shadow-md transition duration-300 group-hover:scale-110 p-3`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate group-hover:text-moss transition">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate/75">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default SafeSpacePromise;

