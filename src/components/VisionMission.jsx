import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

function VisionMission() {
  return (
    <section id="vision" className="py-16 sm:py-24">
      <div className="section-shell">
        {/* VISION SECTION (Horizontally Overlapping Layout) */}
        <div className="relative grid items-center lg:grid-cols-12 gap-6 lg:gap-0 max-w-5xl mx-auto">
          {/* Left Column: Overlapping Green Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 z-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-moss via-sage to-[#587B6D] p-8 sm:p-10 text-center text-white shadow-xl lg:-mr-10 flex flex-col justify-center min-h-[200px] lg:min-h-[280px]"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-xl" />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-black/10 blur-xl" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
                Vision
              </h2>
              <p className="mt-3 text-base sm:text-lg font-medium text-white/95">
                Our vision is two fold:
              </p>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Merged White Points Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 z-0 bg-white p-7 sm:p-10 lg:py-12 lg:pl-16 lg:pr-10 shadow-xl rounded-3xl border border-white/90 space-y-5 text-left"
          >
            <div className="flex items-start gap-3.5">
              <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-moss" />
              <p className="text-base sm:text-lg leading-relaxed text-slate/90 font-normal">
                To create a world where mental health is <strong className="font-semibold text-slate">understood, valued, and accessible to all</strong>—where every individual feels safe to seek support.
              </p>
            </div>

            <div className="flex items-start gap-3.5 pt-5 border-t border-slate/10">
              <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-moss" />
              <p className="text-base sm:text-lg leading-relaxed text-slate/90 font-normal">
                To empower individuals to <strong className="font-semibold text-slate">understand themselves, grow beyond their struggles</strong>, and receive compassionate, high-quality care.
              </p>
            </div>
          </motion.div>
        </div>

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

          {/* 3 Pillars / Icons & Video Grid */}
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-3">
            {/* Pillar 1 (With Video Clip) */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-sage/20 border-2 border-sage/40 shadow-md transition-transform duration-300 hover:scale-105">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover rounded-full pointer-events-none"
                >
                  <source src="/assets/Psychology_processed.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Make psychological knowledge simple, relatable, and useful so that people can apply it to their everyday lives—not just encounter it in textbooks or clinical settings.
              </p>
            </div>

            {/* Pillar 2 (With culture.mp4 Video Clip) */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-moss/15 border-2 border-moss/40 shadow-md transition-transform duration-300 hover:scale-105">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover rounded-full pointer-events-none"
                >
                  <source src="/assets/culture.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Create a culture where reaching out for psychological support is seen as an act of courage and self-care, not weakness or something to be ashamed of.
              </p>
            </div>

            {/* Pillar 3 (With download.mp4 Video Clip) */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-blush/20 border-2 border-blush/40 shadow-md transition-transform duration-300 hover:scale-105">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover rounded-full pointer-events-none"
                >
                  <source src="/assets/download.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mt-2 text-sm sm:text-base text-slate/75 leading-relaxed">
                Advocate learning, guidance, practical exposure, and growth opportunities for psychology students and emerging professionals—helping strengthen the bridge between education and meaningful real-world impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;

