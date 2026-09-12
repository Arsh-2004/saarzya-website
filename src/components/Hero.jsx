import { motion } from "framer-motion";

const badgeList = ["100% Confidential", "Safe & Inclusive Space", "Evidence-Based Care"];

function Hero() {
  return (
    <section id="home" className="section-shell pb-14 pt-12 lg:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="mb-3 inline-flex rounded-full border border-moss/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-moss">
            Where minds heal and hearts grow
          </p>
          <h1 className="m-0 font-heading text-4xl leading-tight text-slate sm:text-5xl lg:text-6xl">
            A Gentle Space for Your Mind to Unwind, Heal, and Grow.
          </h1>
          <p className="mb-0 mt-3 max-w-2xl text-base leading-8 text-slate/80 sm:text-lg">
            Psychology, Assessment and Wellness guided by empathy, tailored for young adults and
            professionals seeking real change in a judgment-free environment.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-moss px-7 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-105 hover:bg-sage"
            >
              Begin Your Journey
            </a>
            <a
              href="#about"
              className="rounded-full border border-moss/25 bg-white/80 px-7 py-3 text-sm font-semibold text-slate transition hover:border-moss/45 hover:bg-white"
            >
              About Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-20 -top-16 h-44 w-44 rounded-full bg-sage/20 blur-3xl" />
            <div className="absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-clay/30 blur-2xl" />

            <div className="relative space-y-4">
              {badgeList.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.15, duration: 0.45 }}
                  className="rounded-2xl border border-moss/15 bg-white/90 px-4 py-4 text-sm font-semibold text-slate shadow-sm"
                >
                  {badge}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.45 }}
                className="rounded-2xl bg-moss px-5 py-4 text-white"
              >
                <p className="m-0 text-xs uppercase tracking-[0.14em] text-white/80">Tagline</p>
                <p className="m-0 mt-2 text-sm leading-7">
                  Your safe space to understand, heal and grow.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-4 -right-3 hidden rounded-2xl border border-clay/45 bg-white/95 px-4 py-3 text-sm font-semibold text-slate shadow-soft sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
          >
            Session • Workshops • Assessments
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
