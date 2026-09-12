import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AboutSaarzya() {
  return (
    <section id="about" className="section-shell py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Text & Quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate">
            About Saarzya
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate/85">
            Saarzya represents the idea of essence, inner truth, and a steady, harmonious flow—a return to your authentic self beneath the noise of expectations, pressure, and fear.
          </p>

          <blockquote className="relative rounded-2xl border-l-4 border-moss bg-cream/70 p-6 sm:p-7 shadow-sm">
            <p className="font-serif text-lg sm:text-xl italic leading-relaxed text-slate/90 m-0">
              “Saarzya is a space to reconnect with your essence, understand your inner world, and move through life with greater clarity, compassion, and balance.”
            </p>
          </blockquote>

          {/* Read More Button (redirects to detailed section) */}
          <div className="pt-3">
            <a
              href="#founders"
              className="inline-flex items-center gap-2 rounded-xl bg-[#a36849] px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#8b5437] hover:shadow-lg active:scale-95"
            >
              <span>Read More</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-cream shadow-2xl max-w-[480px] w-full transition duration-500 hover:scale-[1.02]">
            <img
              src="/assets/about-saarzya.jpg"
              alt="About Saarzya - Same mind, Kind heart, Better tomorrow"
              className="h-full w-full object-cover object-center max-h-[560px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSaarzya;


