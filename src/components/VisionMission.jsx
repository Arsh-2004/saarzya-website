import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

function VisionMission() {
  return (
    <section id="vision" className="py-16 sm:py-24">
      <div className="section-shell">
        {/* VISION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-slate font-medium">
            Vision
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate/80 font-normal">
            Our vision is two fold:
          </p>

          <div className="mt-8 text-left max-w-3xl mx-auto space-y-4">
            <ul className="space-y-4 text-base sm:text-lg leading-relaxed text-slate/90 font-medium list-disc pl-6">
              <li>
                To create a world where mental health is <strong className="font-semibold text-slate">understood, valued, and accessible to all</strong>—where every individual feels safe to seek support.
              </li>
              <li>
                To empower individuals to <strong className="font-semibold text-slate">understand themselves, grow beyond their struggles</strong>, and receive compassionate, high-quality care.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-16 sm:my-20 mx-auto w-24 h-px bg-slate/15" />

        {/* MISSION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-slate font-medium">
            Mission
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate/80 font-normal">
            We, at <strong className="font-semibold text-slate">Saarzya</strong>, have been cultivating this vision since our founding:
          </p>

          {/* 3 Pillars / Icons Grid */}
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sage/20 text-moss transition-transform duration-300 hover:scale-105">
                <Sparkles size={36} className="stroke-[1.75]" />
              </div>
              <h3 className="font-heading text-xl text-slate font-medium">Accessible Care</h3>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Making psychological understanding more accessible, ethical, and inclusive for everyone.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-moss/15 text-moss transition-transform duration-300 hover:scale-105">
                <ShieldCheck size={36} className="stroke-[1.75]" />
              </div>
              <h3 className="font-heading text-xl text-slate font-medium">Ethical Standards</h3>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Delivering high-quality therapy and care with qualified, empaneled professionals.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blush/20 text-[#b96647] transition-transform duration-300 hover:scale-105">
                <HeartHandshake size={36} className="stroke-[1.75]" />
              </div>
              <h3 className="font-heading text-xl text-slate font-medium">Human Connection</h3>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Creating a safe, stigma-free culture built on curiosity, compassion, and understanding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;

