import { useState, useEffect } from "react";
import { ArrowLeft, Download, ExternalLink, Sparkles, CheckCircle, Share2, BookOpen } from "lucide-react";
import { getStoredPosts, getEmbeddablePdfUrl, getDirectDownloadPdfUrl } from "../utils/postsStorage";
import { navigateTo } from "../utils/router";

function FullMagazineReaderPage() {
  const [magazine, setMagazine] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const posts = getStoredPosts();
    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id");

    const found = posts.find((p) => p.id === postId) || posts.find((p) => p.type === "Magazine") || posts[0];
    setMagazine(found);
  }, []);

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
      setShowSubscribeModal(false);
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col bg-[#1e232a] text-white overflow-hidden">
      {/* Top Fullscreen Header Navigation Bar */}
      <header className="flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#161a20] px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              navigateTo("/magazines");
              setTimeout(() => {
                const el = document.getElementById("magazines");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-white/20 active:scale-95"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Magazines</span>
          </button>

          <div className="h-5 w-[1px] bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img src="/assets/logo.jpg" alt="Saarzya logo" className="h-8 w-8 rounded-lg border border-white/20 object-contain" />
            <div className="flex flex-col">
              <h1 className="m-0 text-sm font-bold tracking-wide text-white truncate max-w-[200px] sm:max-w-md">
                {magazine.title}
              </h1>
              <span className="text-[10px] text-white/60 uppercase tracking-wider hidden sm:block">
                {magazine.date || "July 2026"} • {magazine.badge || "Quarterly Edition"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowSubscribeModal(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-900"
          >
            <Sparkles size={14} />
            <span className="hidden md:inline">Subscribe Issue</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80 transition hover:bg-white/15"
            title="Share Link"
          >
            <Share2 size={14} />
            {copied ? <span className="text-emerald-400">Copied!</span> : <span className="hidden lg:inline">Share</span>}
          </button>

          <a
            href={downloadPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Saarzya-Magazine-Issue-01.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow transition hover:bg-emerald-500 active:scale-95"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Full-Screen PDF Canvas */}
      <main className="relative flex-1 w-full h-[calc(100vh-4rem)] bg-[#111418] overflow-hidden">
        {embedPdfUrl.includes("drive.google.com") ? (
          <iframe
            src={embedPdfUrl}
            title={magazine.title}
            className="h-full w-full border-0"
            allow="autoplay"
          />
        ) : (
          <object
            data={`${embedPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            type="application/pdf"
            className="h-full w-full"
          >
            <iframe
              src={`${embedPdfUrl}#toolbar=1`}
              title={magazine.title}
              className="h-full w-full border-0"
            >
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#161a20] p-6 text-center text-white">
                <BookOpen size={48} className="mb-4 text-emerald-400" />
                <h2 className="text-xl font-bold">Preview unavailable in your current browser</h2>
                <p className="mt-2 text-sm text-white/70">Click below to open or download the complete PDF magazine.</p>
                <a
                  href={embedPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-500"
                >
                  Open PDF in New Window
                </a>
              </div>
            </iframe>
          </object>
        )}
      </main>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-[#161a20] p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-serif text-xl font-bold text-amber-300">Subscribe to Saarzya Magazine</h3>
              <button
                onClick={() => setShowSubscribeModal(false)}
                className="rounded-full p-1 text-white/70 hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/80">
              Receive notifications for upcoming quarterly magazine issues, psychology research updates, and wellness exercises.
            </p>

            <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 py-3 text-sm font-bold text-white shadow transition hover:bg-emerald-500"
              >
                Subscribe Now
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <CheckCircle size={16} /> Subscribed successfully! Thank you.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FullMagazineReaderPage;
