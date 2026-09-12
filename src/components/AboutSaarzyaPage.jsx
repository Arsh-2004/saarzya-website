import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Founders from "./Founders";
import { navigateTo } from "../utils/router";
import { ArrowLeft, Heart, Compass, Sparkles, Users } from "lucide-react";

function AboutSaarzyaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-slate overflow-x-clip">
      <Navbar />

      <main className="section-shell py-12 lg:py-20 max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigateTo("/")}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-moss/20 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate transition hover:border-moss hover:bg-white hover:text-moss shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </motion.button>

        {/* Hero Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8 border-b border-moss/15 pb-6"
        >
          <p className="inline-flex rounded-full border border-moss/20 bg-moss/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-moss">
            About Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate">
            About Saarzya
          </h1>
        </motion.div>

        {/* Main Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8 text-slate/85 text-base sm:text-lg leading-relaxed font-body"
        >
          {/* Section Divider / Title: Our Journey */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate mb-6 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-moss" /> Our Journey
            </h2>

            <div className="space-y-6 text-slate/85 leading-relaxed">
              <p>
                When Aarzoo was wrapping her master&apos;s and I was pursuing my Master’s, we were hit with a reality that nobody really prepares you for.
              </p>

              <p>
                We had spent years studying the mind, writing research papers, and pouring our hearts into psychology. But as graduation approached, a quiet anxiety started creeping in: <span className="italic font-medium text-slate">What if we don&apos;t get clients? What if, after all these years of dedication, we struggle to make a real impact? And worse—what about the students coming after us? How can we make sure they don&apos;t have to navigate this same uncertainty alone?</span>
              </p>

              <p>
                We realized that while academic psychology is incredibly rich, the bridge between degree completion and real-world impact felt broken. Students were left searching for guidance, and everyday people looking for mental support were met with options that felt too clinical, distant, or overwhelming.
              </p>

              <p>
                We didn&apos;t want to just sit back and hope things would work out. We wanted to build the solution ourselves.
              </p>

              <div className="bg-moss/10 border border-moss/20 p-6 sm:p-8 rounded-none my-6">
                <p className="m-0 font-bold text-moss text-lg sm:text-xl">
                  That uncertainty became the spark for Saarzya.
                </p>
              </div>

              <p>
                We set out to create a safe, compassionate digital home a place that breaks down complex psychological insights into relatable, everyday tools, while creating honest opportunities and practical resources for students and practitioners alike.
              </p>

              <p>
                The name Saarzya comes from the idea of essence, core truth, and a steady, harmonious flow. We built this to help you strip away the overwhelming noise of expectations and re-ground yourself in what actually matters: your true, core self.
              </p>

              <p className="font-medium text-slate text-lg pt-4">
                We started Saarzya out of a need for clarity in our own lives, and today, we run it to bring that same clarity, empathy, and direction to yours. Welcome to our space.
              </p>
            </div>
          </div>

          {/* Co-Founders Section */}
          <div className="pt-10 border-t border-moss/15 mt-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate mb-4 flex items-center gap-3">
              <Users className="w-7 h-7 text-moss" /> Meet Our Founders
            </h2>
            <Founders />
          </div>

          {/* Bottom Call To Action */}
          <div className="pt-10 flex flex-wrap items-center justify-between gap-4 border-t border-moss/15 mt-12">
            <button
              onClick={() => navigateTo("/")}
              className="inline-flex items-center gap-2 rounded-none bg-moss px-8 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-sage"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Homepage
            </button>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="inline-flex items-center gap-2 rounded-none border border-moss/25 bg-white px-8 py-3.5 text-sm font-bold text-slate transition duration-300 hover:border-moss hover:bg-cream"
            >
              <Heart className="w-4 h-4 text-moss" /> Connect With Us
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutSaarzyaPage;
