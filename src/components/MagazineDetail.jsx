import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, BookOpen, CheckCircle, Sparkles } from "lucide-react";
import { getEmbeddablePdfUrl, getDirectDownloadPdfUrl } from "../utils/postsStorage";

function MagazineDetail({ magazine, onBack }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!magazine) return null;

  const rawPdf = magazine.pdfUrl || "/assets/saarzya-magazine-issue-01.pdf";
  const embedPdfUrl = getEmbeddablePdfUrl(rawPdf);
  const downloadPdfUrl = getDirectDownloadPdfUrl(rawPdf);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-slate pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-moss/15 bg-white/90 backdrop-blur-md">
        <div className="section-shell flex h-16 items-center justify-between py-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-cream/50 px-4 py-2 text-xs font-bold text-moss transition hover:bg-moss hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Magazines & Blogs
          </button>
          
          <div className="flex items-center gap-2">
            <img src="/assets/logo.jpg" alt="Saarzya logo" className="h-8 w-8 rounded-lg border border-moss/20 object-contain" />
            <span className="font-serif text-lg font-bold text-moss hidden sm:inline">Saarzya Magazine</span>
          </div>
        </div>
      </header>

      <main className="section-shell pt-8">
        {/* Magazine Cover & Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-moss/20 bg-white p-6 sm:p-10 shadow-soft"
        >
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Cover Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-cream shadow-2xl transition duration-500 hover:scale-105 max-w-[280px]">
                <img
                  src={magazine.image || "/assets/logo.jpg"}
                  alt={magazine.title}
                  className="h-full w-full object-cover object-top"
                />
                {magazine.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-moss px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {magazine.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-moss">
                <BookOpen size={14} /> {magazine.date || "July 2026"} • Edition 1
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate leading-tight">
                {magazine.title}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate/80">
                {magazine.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#pdf-reader"
                  className="inline-flex items-center gap-2 rounded-full bg-moss px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-sage active:scale-95"
                >
                  <BookOpen size={18} /> Read Magazine Below
                </a>

                {downloadPdfUrl && (
                  <a
                    href={downloadPdfUrl}
                    download="Saarzya-Magazine-Issue-01.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-white px-6 py-3.5 text-sm font-bold text-moss shadow-sm transition hover:bg-moss/10 active:scale-95"
                  >
                    <Download size={18} /> Download PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Purpose Grid (Matching PDF Highlights) */}
        <section className="mt-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-moss">Inside This Edition</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate mt-1">Magazine Highlights</h2>
            <p className="text-sm text-slate/75 mt-2">
              Discover theoretical and practical psychological insights curated by psychologists & young researchers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Box 1 */}
            <div className="rounded-2xl border border-moss/15 bg-white p-6 shadow-sm hover:border-moss/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss/10 text-moss mb-4 font-bold text-lg">
                01
              </div>
              <h3 className="font-bold text-lg text-slate mb-2">Filling The Gap</h3>
              <p className="text-xs leading-relaxed text-slate/75">
                Bridging practical and theoretical psychological knowledge with real-world updates and expert guidance.
              </p>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl border border-moss/15 bg-white p-6 shadow-sm hover:border-moss/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss/10 text-moss mb-4 font-bold text-lg">
                02
              </div>
              <h3 className="font-bold text-lg text-slate mb-2">Research Focus</h3>
              <p className="text-xs leading-relaxed text-slate/75">
                Highlighting modern psychology research, mental health studies, and actionable self-care techniques.
              </p>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl border border-moss/15 bg-white p-6 shadow-sm hover:border-moss/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss/10 text-moss mb-4 font-bold text-lg">
                03
              </div>
              <h3 className="font-bold text-lg text-slate mb-2">Youth & Experts</h3>
              <p className="text-xs leading-relaxed text-slate/75">
                Giving opportunities to young minds and practicing psychologists to share their voices and insights.
              </p>
            </div>

            {/* Box 4 */}
            <div className="rounded-2xl border border-moss/15 bg-white p-6 shadow-sm hover:border-moss/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss/10 text-moss mb-4 font-bold text-lg">
                04
              </div>
              <h3 className="font-bold text-lg text-slate mb-2">Fun Corner</h3>
              <p className="text-xs leading-relaxed text-slate/75">
                Interactive games, quizzes, and psychological trivia to make learning engaging and enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Interactive PDF Viewer */}
        <section id="pdf-reader" className="mt-14 scroll-mt-24">
          <div className="rounded-3xl border border-moss/20 bg-white p-4 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between border-b border-moss/15 pb-4 mb-6 gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate">Full PDF Interactive Reader</h3>
                <p className="text-xs text-slate/60 mt-0.5">Read through the pages directly below or open in full screen</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={embedPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-moss/20 bg-cream/50 px-4 py-2 text-xs font-bold text-moss hover:bg-moss hover:text-white"
                >
                  <ExternalLink size={14} /> Full Screen
                </a>
                <a
                  href={downloadPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Saarzya-Magazine-Issue-01.pdf"
                  className="inline-flex items-center gap-1.5 rounded-full bg-moss px-4 py-2 text-xs font-bold text-white shadow hover:bg-sage"
                >
                  <Download size={14} /> Download
                </a>
              </div>
            </div>

            {/* PDF View Container */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-moss/15 bg-[#525659] shadow-inner h-[650px] sm:h-[750px] lg:h-[850px]">
              {embedPdfUrl.includes("drive.google.com") ? (
                <iframe
                  src={embedPdfUrl}
                  title="Saarzya Magazine Reader"
                  className="w-full h-full border-0 rounded-2xl"
                  allow="autoplay"
                />
              ) : (
                <object
                  data={`${embedPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${embedPdfUrl}#toolbar=1`}
                    title="Saarzya Magazine Reader"
                    className="w-full h-full border-0"
                  >
                    <div className="p-8 text-center bg-white text-slate">
                      <p className="text-base font-bold">PDF preview is unavailable directly in your browser.</p>
                      <a
                        href={embedPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-bold text-white"
                      >
                        Click Here to View & Download PDF
                      </a>
                    </div>
                  </iframe>
                </object>
              )}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="mt-14 rounded-3xl border border-moss/20 bg-moss p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mx-auto">
              <Sparkles size={24} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Subscribe to Our Quarterly Magazine</h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Get future digital magazine editions, psychology research summaries, and wellness activities delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/60 outline-none focus:border-white focus:bg-white/20"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-moss shadow-md hover:bg-cream active:scale-95 transition whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>

            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xs font-bold text-white mt-4"
              >
                <CheckCircle size={16} /> Thank you! You're subscribed to Saarzya Magazine.
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MagazineDetail;
