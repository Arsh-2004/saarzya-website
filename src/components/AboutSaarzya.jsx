import { motion } from "framer-motion";

function AboutSaarzya() {
  return (
    <section id="about" className="section-shell py-16 lg:py-24">
      <div className="relative grid items-center lg:grid-cols-12 gap-8 lg:gap-0">
        {/* Left Column: Overlapping White Content Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 z-10 bg-white p-8 sm:p-12 lg:p-16 shadow-xl lg:-mr-12 rounded-none space-y-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate">
            About Saarzya
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate/80">
            Saarzya represents the idea of essence, inner truth, and a steady, harmonious flow—a return to your authentic self beneath the noise of expectations, pressure, and fear.
          </p>

          <blockquote className="relative border-l-4 border-moss bg-[#F7F4EE] p-5 sm:p-6 italic text-slate/90 text-base sm:text-lg leading-relaxed">
            “Saarzya is a space to reconnect with your essence, understand your inner world, and move through life with greater clarity, compassion, and balance.”
          </blockquote>

          <div className="pt-2">
            <a
              href="#founders"
              className="inline-block rounded-none bg-moss px-8 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-sage"
            >
              Read More
            </a>
          </div>
        </motion.div>

        {/* Right Column: Square Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 z-0"
        >
          <div className="w-full h-full overflow-hidden shadow-2xl rounded-none">
            <img
              src="/assets/about-saarzya.jpg"
              alt="About Saarzya - Same mind, Kind heart, Better tomorrow"
              className="w-full h-full object-cover object-center scale-[1.04] origin-center min-h-[380px] lg:min-h-[520px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSaarzya;



