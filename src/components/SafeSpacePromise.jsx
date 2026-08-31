import { motion } from "framer-motion";
import { Fingerprint, Heart, Lock, UserRoundCog } from "lucide-react";

const pillars = [
  { title: "Confidentiality", icon: Lock },
  { title: "Stigma-free", icon: Fingerprint },
  { title: "Personalized Care", icon: UserRoundCog },
  { title: "Empathy First", icon: Heart },
];

function SafeSpacePromise() {
  return (
    <section className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-7 sm:p-10"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">The Safe Space Promise</p>
        <h2 className="m-0 font-heading text-3xl text-slate sm:text-4xl">Your care journey stays respectful, private, and human.</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-moss/15 bg-white/85 p-5"
              >
                <div className="mb-3 inline-flex rounded-xl bg-sage/20 p-2.5 text-moss">
                  <Icon size={20} />
                </div>
                <p className="m-0 font-semibold text-slate">{pillar.title}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default SafeSpacePromise;
