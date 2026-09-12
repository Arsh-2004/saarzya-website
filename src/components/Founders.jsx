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
    role: "Co-Founder & Executive Director | Author | Writer",
    bio: "Sanyukta Sherry is a writer, author and emerging psychology professional with a deep interest in understanding the human mind, emotions and the stories that shape our lives.",
    paragraphs: [
      "Sanyukta Sherry is a writer, author and emerging psychology professional with a deep interest in understanding the human mind, emotions and the stories that shape our lives.",
      "She has published two books: Rooh and Soul – An Inner Journey & My Five Fairly Conservative.",
      "As the Co-Founder and Executive Director of Saarzya, she works towards building a space where psychology, wellbeing, research, creativity and meaningful human connection can come together. She completed her UG from Sunbeam Women's College Varuna, and is currently pursuing her Master's in Clinical Psychology.",
      "Sanyukta brings together her academic interest in psychology with her long-standing passion for writing and storytelling. She believes that psychological knowledge should not remain confined to classrooms and textbooks—it should become something people can understand, relate to and carry into their everyday lives.",
      "As an author, she is particularly drawn towards themes of human emotions, relationships, self-discovery, hope and personal growth. Her approach to writing reflects a simple belief: sometimes, a few honest words can help someone understand a feeling they could never quite name.",
      "Through Saarzya, Sanyukta hopes to contribute to a culture where conversations around mental health are approached with curiosity rather than fear, compassion rather than judgement, and understanding rather than assumptions.",
      "Her vision is to help create a generation that does not simply learn about mental health, but learns to listen to themselves, understand others and grow with greater emotional awareness."
    ],
    quote: "Her vision is to help create a generation that does not simply learn about mental health, but learns to listen to themselves, understand others and grow with greater emotional awareness.",
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
