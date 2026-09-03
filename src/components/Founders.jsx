import { motion } from "framer-motion";

const founders = [
  {
    name: "Aarzoo Singh",
    role: "Co-founder & Managing Director",
    bio: "Aarzoo is dedicated to building an accessible, transparent, and stigma-free mental health ecosystem where every individual receives compassionate, professional care.",
    quote: "Mental healthcare shouldn't feel like entering a cold clinic. SAARZYA was born out of a desire to make quality support accessible without complex barriers, We provide the trusted ecosystem and administrative care so you can focus entirely on your personal growth alongside qualified, empaneled professionals.",
    tags: ["Emotional Safety", "Administrative Care", "Youth & Professional Support"],
    initials: "AS",
    image: "/assets/aarzoo.jpg",
  },
  {
    name: "Sanyukta Sherry",
    role: "Co-founder & Executive Director",
    bio: "Sanyukta is passionate about guiding students and young minds towards self-awareness, emotional balance, and personal resilience.",
    quote: "You are not a problem to be fixed; you are a story unfolding. Mental health awareness isn't about clinical labels or heavy medical rooms — it's about self-awareness, daily balance and giving yourself permission to take a pause. SAARZYA was designed with students and young minds in mind: to offer a warm, welcoming space where you can speak your truth, build resilience and step into your full potential.",
    tags: ["Youth Resilience", "Self-Awareness", "Mindful Balance"],
    initials: "SS",
    image: "/assets/sanyukta.jpg",
  },
];

function Founders() {
  return (
    <section id="founders" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 rounded-3xl border border-moss/15 bg-white/80 p-8 sm:p-10 shadow-soft"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-moss sm:text-base">About Saarzya</p>
        <h2 className="m-0 font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">
          Welcome to Saarzya: Finding Your Core in a Noisy World
        </h2>
        <p className="mb-0 mt-5 text-base sm:text-lg leading-8 text-slate/85">
          In a world filled with endless digital noise and overwhelming expectations, taking care of your mind shouldn’t feel complicated. <strong className="font-semibold text-slate">Saarzya</strong> was born out of a simple yet powerful belief: mental well-being and self-growth begin when complex psychological insights are made accessible, relatable, and deeply human.
        </p>
        <p className="mb-0 mt-4 text-base sm:text-lg leading-8 text-slate/85">
          The name <em>Saarzya</em> draws inspiration from the idea of essence, core truth, and a harmonious, steady flow. We exist to help you peel back the external pressure and return to what truly matters—<strong className="font-semibold text-slate">your core self</strong>.
        </p>

        <div className="mt-8 border-t border-moss/15 pt-8">
          <h3 className="m-0 font-heading text-2xl text-slate sm:text-3xl">Our Journey & Purpose</h3>
          <p className="mb-0 mt-4 text-base sm:text-lg leading-8 text-slate/85">
            Founded by <strong className="font-semibold text-slate">Aarzoo Singh</strong> and <strong className="font-semibold text-slate">Sanyukta Sherry</strong>, Saarzya started with a shared vision to bridge the gap between academic psychology and everyday life. While traditional mental health conversations often feel clinical or intimidating, we set out to build a compassionate, digital safe space centered on psychoeducation, personal growth, and practical student resources.
          </p>
          <p className="mb-0 mt-4 text-base sm:text-lg leading-8 text-slate/85">
            Rather than offering quick fixes or rigid direct therapy, Saarzya focuses on empowering you through knowledge, mindful tools, and honest storytelling. We believe that when you understand your mind, you gain the clarity to navigate life with confidence and resilience.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {founders.map((founder, index) => (
          <motion.article
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-card p-8 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-12">
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-[420px] w-full max-w-[360px] shrink-0 self-center rounded-[2.5rem] border-2 border-moss/25 object-cover object-top shadow-2xl transition duration-500 hover:scale-[1.01] sm:h-[500px] sm:max-w-[420px] md:h-[540px] md:w-[380px] lg:w-[420px]"
                />
              ) : (
                <div className="flex h-[420px] w-full max-w-[360px] shrink-0 self-center items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-sage to-moss font-heading text-7xl text-white shadow-2xl sm:h-[500px] sm:max-w-[420px] md:h-[540px] md:w-[380px] lg:w-[420px]">
                  {founder.initials}
                </div>
              )}
              <div className="flex flex-1 flex-col justify-center">
                <div className="inline-block self-start rounded-full border border-moss/20 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-moss">
                  {founder.role}
                </div>
                <h3 className="m-0 mt-3 font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">{founder.name}</h3>

                <p className="mb-0 mt-6 text-base leading-8 text-slate/85 sm:text-lg sm:leading-9">{founder.bio}</p>
                <blockquote className="mb-0 mt-6 rounded-3xl border border-moss/20 bg-white/90 p-5 sm:p-6 italic text-slate/90 shadow-sm text-base sm:text-lg leading-relaxed">
                  "{founder.quote}"
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-moss/20 bg-sage/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-moss"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Founders;
