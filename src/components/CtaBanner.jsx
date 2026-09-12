import { motion } from "framer-motion";

function CtaBanner() {
  return (
    <section id="contact" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-moss via-sage to-[#73958A] px-7 py-10 text-white shadow-glow sm:px-10"
      >
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -bottom-14 left-8 h-32 w-32 rounded-full bg-blush/35 blur-2xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Begin Your Journey</p>
            <h2 className="m-0 max-w-2xl font-heading text-3xl sm:text-4xl">Ready to take your first step?</h2>
            <p className="mb-0 mt-3 text-white/90">Get in touch with us to schedule a private consultation today.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:saarzya@gmail.com"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-moss transition hover:scale-105 shadow-md"
            >
              Email Us: saarzya@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaBanner;
