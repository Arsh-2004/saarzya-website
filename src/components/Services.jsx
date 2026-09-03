import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Sparkles } from "lucide-react";

const services = [
  {
    title: "Psychological Assessments and Guidance",
    description: "Structured assessments and tailored guidance to support informed mental health decisions.",
    icon: ClipboardCheck,
  },
  {
    title: "Wellness and Mindfulness Workshops",
    description: "Holistic workshops that build resilience, mindful habits, and healthier daily routines.",
    icon: Sparkles,
  },
  {
    title: "Blog / Insights / Resources",
    description: "Sharing articles, mental health tips, or wellness guides positions your team as experts, boosts search engine visibility (SEO), and provides free value to visitors before they book.",
    icon: BookOpen,
  },
];

function Services() {
  return (
    <section id="services" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss">Core Offerings</p>
        <h2 className="m-0 font-heading text-3xl text-slate sm:text-4xl">Care models built for your pace and needs.</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-3xl border border-transparent bg-white/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-moss/30 hover:bg-white"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-moss/10 p-3 text-moss transition group-hover:bg-moss group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="m-0 font-heading text-2xl text-slate">{service.title}</h3>
              <p className="mb-0 mt-4 leading-8 text-slate/80">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
