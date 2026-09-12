import { motion } from "framer-motion";

const founders = [
  {
    name: "Aarzoo Singh",
    role: "Co-founder & Managing Director",
    paragraphs: [
      "Aarzoo holds a Bachelor’s in Psychology Honours and a Master’s in Clinical Psychology. Driven by a deep interest in human behavior, emotional wellbeing, and personal growth, she co-founded Saarzya to bridge the gap between academic psychology and everyday life.",
      "She is committed to transforming complex psychological concepts into accessible, responsible, and practical tools that support interpersonal relationships and self-understanding. Through her leadership at Saarzya, Aarzoo aims to build a credible, purpose-driven platform that fosters human connection and cultivates a culture where mental wellbeing is approached with empathy, dignity, and true psychological awareness."
    ],
    tags: ["Clinical Psychology", "Emotional Wellbeing", "Youth & Professional Support"],
    initials: "AS",
    image: "/assets/aarzoo.jpg",
  },
  {
    name: "Sanyukta Sherry",
    role: "Co-Founder & Executive Director | Author | Writer",
    paragraphs: [
      "Sanyukta Sherry is a writer, author, and emerging psychology professional pursuing her Master's in Clinical Psychology. She is the author of two books: Rooh and Soul: An Inner Journey & My Five Fairly Conservative.",
      "Blending her background in storytelling with academic psychology, she explores themes of emotion, relationships, self-discovery, and personal growth. As Co-Founder and Executive Director of Saarzya, she works to bridge psychology, creativity, and human connection, transforming psychological knowledge into everyday understanding. Sanyukta’s vision is to foster a culture where mental health is approached with compassion, curiosity, and deep emotional awareness."
    ],
    tags: ["Author & Writer", "Clinical Psychology", "Self-Discovery & Hope", "Emotional Awareness"],
    initials: "SS",
    image: "/assets/sanyukta.jpg",
  },
];

function Founders() {
  return (
    <div id="founders" className="py-6">
      <div className="flex flex-col gap-10">
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
                <h3 className="m-0 font-heading text-3xl text-slate sm:text-4xl lg:text-5xl">{founder.name}</h3>
                <div className="mt-3 inline-block self-start rounded-full border border-moss/20 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-moss">
                  {founder.role}
                </div>

                {founder.paragraphs ? (
                  <div className="mt-6 space-y-4 text-base leading-8 text-slate/85 sm:text-lg sm:leading-8">
                    {founder.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mb-0 mt-6 text-base leading-8 text-slate/85 sm:text-lg sm:leading-9">{founder.bio}</p>
                )}

                {founder.quote && (
                  <blockquote className="mb-0 mt-6 rounded-3xl border border-moss/20 bg-white/90 p-5 sm:p-6 italic text-slate/90 shadow-sm text-base sm:text-lg leading-relaxed">
                    "{founder.quote}"
                  </blockquote>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Founders;
