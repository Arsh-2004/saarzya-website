import { motion } from "framer-motion";
import { Eye, Flag } from "lucide-react";

function VisionMission() {
  return (
    <section id="vision" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">Vision and Mission</p>
        <h2 className="m-0 max-w-3xl font-heading text-3xl text-slate sm:text-4xl">
          Compassion-led mental healthcare designed for real life.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="mb-4 inline-flex rounded-2xl bg-sage/20 p-3 text-moss">
            <Eye size={22} />
          </div>
          <h3 className="m-0 font-heading text-2xl text-slate">Our Vision</h3>
          <p className="mb-0 mt-4 leading-8 text-slate/80">
            Normalizing mental health care with accessible, compassionate, and stigma-free support
            where everyone feels seen, heard, and understood.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="mb-4 inline-flex rounded-2xl bg-blush/20 p-3 text-[#b96647]">
            <Flag size={22} />
          </div>
          <h3 className="m-0 font-heading text-2xl text-slate">Our Mission</h3>
          <p className="mb-0 mt-4 leading-8 text-slate/80">
            Empowering individuals through evidence-based psychology, personalized therapy,
            and holistic wellness practices that nurture long-term growth.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default VisionMission;
