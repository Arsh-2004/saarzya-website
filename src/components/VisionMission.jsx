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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">SAARZYA</p>
        <h2 className="m-0 max-w-3xl font-heading text-3xl text-slate sm:text-4xl">
          Vision & Mission
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col justify-between p-7 sm:p-8"
        >
          <div>
            <div className="mb-4 inline-flex rounded-2xl bg-sage/20 p-3 text-moss">
              <Eye size={24} />
            </div>
            <h3 className="m-0 font-heading text-2xl text-slate">Vision</h3>
            <p className="mb-0 mt-4 text-lg font-medium leading-relaxed text-slate">
              <strong className="font-semibold text-slate">To create a world where mental health is understood, valued, and accessible to all—where every individual feels safe to seek support, empowered to understand themselves, and encouraged to grow beyond their struggles.</strong>
            </p>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass-card flex flex-col justify-between p-7 sm:p-8"
        >
          <div>
            <div className="mb-4 inline-flex rounded-2xl bg-blush/20 p-3 text-[#b96647]">
              <Flag size={24} />
            </div>
            <h3 className="m-0 font-heading text-2xl text-slate">Mission</h3>
            <p className="mb-0 mt-4 text-lg font-medium leading-relaxed text-slate">
              <strong className="font-semibold text-slate">Saarzya’s mission is to make psychological understanding more accessible, ethical, inclusive, and human.</strong>
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default VisionMission;
