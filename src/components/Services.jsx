import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Sparkles } from "lucide-react";

function Services() {
  return (
    <section id="services" className="section-shell py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center lg:text-left"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl text-slate font-medium tracking-wide uppercase">
          CORE OFFERINGS
        </h2>
      </motion.div>

      {/* Main Split Container */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* LEFT SIDE: Triangular 3-Vertex Layout */}
        <div className="lg:col-span-7 flex flex-col items-center gap-6">
          
          {/* TOP CARD (Psychological Assessments) */}
          <motion.article
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="group w-full max-w-lg rounded-none bg-white p-7 sm:p-8 shadow-sm border border-moss/20 transition duration-300 hover:shadow-md hover:border-moss/40 text-left relative overflow-hidden"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none bg-moss/10 text-moss transition duration-300 group-hover:bg-moss group-hover:text-white">
              <ClipboardCheck className="h-6 w-6 stroke-[1.75]" />
            </div>

            <h3 className="font-heading text-2xl text-slate font-medium">
              Psychological Assessments and Guidance
            </h3>
            <p className="mt-2 text-base text-slate/80 leading-relaxed font-normal">
              Structured assessments and tailored guidance to support informed mental health decisions.
            </p>
          </motion.article>

          {/* SVG Connecting Triangle Line Accent */}
          <div className="w-full flex justify-center -my-2 opacity-40 pointer-events-none">
            <svg width="280" height="24" viewBox="0 0 280 24" fill="none" className="stroke-moss">
              <path d="M140 0 L40 24 M140 0 L240 24" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* BOTTOM BASE CARDS (Left & Right) */}
          <div className="grid sm:grid-cols-2 gap-6 w-full">
            
            {/* BOTTOM LEFT CARD (Wellness & Mindfulness) */}
            <motion.article
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="group rounded-none bg-white p-7 sm:p-8 shadow-sm border border-moss/20 transition duration-300 hover:shadow-md hover:border-moss/40 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none bg-moss/10 text-moss transition duration-300 group-hover:bg-moss group-hover:text-white">
                  <Sparkles className="h-6 w-6 stroke-[1.75]" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl text-slate font-medium">
                  Wellness and Mindfulness Workshops
                </h3>
                <p className="mt-2 text-base text-slate/80 leading-relaxed font-normal">
                  Holistic workshops that build resilience, mindful habits, and healthier daily routines.
                </p>
              </div>
            </motion.article>

            {/* BOTTOM RIGHT CARD (Blog / Insights / Resources) */}
            <motion.article
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="group rounded-none bg-white p-7 sm:p-8 shadow-sm border border-moss/20 transition duration-300 hover:shadow-md hover:border-moss/40 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none bg-moss/10 text-moss transition duration-300 group-hover:bg-moss group-hover:text-white">
                  <BookOpen className="h-6 w-6 stroke-[1.75]" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl text-slate font-medium">
                  Blog / Insights / Resources
                </h3>
                <p className="mt-2 text-base text-slate/80 leading-relaxed font-normal">
                  Sharing articles, mental health tips, or wellness guides positions your team as experts, boosts search engine visibility (SEO), and provides free value to visitors before they book.
                </p>
              </div>
            </motion.article>

          </div>
        </div>

        {/* RIGHT SIDE: Art Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-none shadow-xl max-w-md w-full transition duration-300 hover:shadow-2xl border border-white/60">
            <img
              src="/assets/core_offerings_art.png"
              alt="Core Offerings Art"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
