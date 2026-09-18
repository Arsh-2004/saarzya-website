import { useState } from "react";
import { ArrowLeft, Download, Share2, FileText, ExternalLink } from "lucide-react";
import { getEmbeddablePdfUrl, getDirectDownloadPdfUrl } from "../utils/postsStorage";
import { navigateTo } from "../utils/router";

function FullBrochureReaderPage() {
  const [copied, setCopied] = useState(false);

  const rawPdf = "/assets/saarzya-brochure.pdf";
  const embedPdfUrl = getEmbeddablePdfUrl(rawPdf);
  const downloadPdfUrl = getDirectDownloadPdfUrl(rawPdf);

  const handleBack = () => {
    navigateTo("/");
    setTimeout(() => {
      const el = document.getElementById("about") || document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
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
      {/* Top Navigation Header */}
      <header className="flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#161a20] px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20 active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </button>

          <div className="h-5 w-[1px] bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img
              src="/assets/logo.jpg"
              alt="Saarzya logo"
              className="h-8 w-8 rounded-lg border border-white/20 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/assets/logo.png";
              }}
            />
            <div className="flex flex-col">
              <h1 className="m-0 text-sm font-bold tracking-wide text-white truncate max-w-[200px] sm:max-w-md">
                Saarzya Official Brochure
              </h1>
              <span className="text-[10px] text-white/60 uppercase tracking-wider hidden sm:block">
                Where Minds Heal & Hearts Grow • Space for Healing
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
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
            download="Saarzya-Brochure.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow transition hover:bg-emerald-500 active:scale-95"
          >
            <Download size={14} />
            <span>Download Brochure</span>
          </a>
        </div>
      </header>

      {/* PDF View Container */}
      <main className="relative flex-1 w-full h-[calc(100vh-4rem)] bg-[#111418] overflow-hidden">
        <object
          data={`${embedPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
          type="application/pdf"
          className="h-full w-full"
        >
          <iframe
            src={`${embedPdfUrl}#toolbar=1`}
            title="Saarzya Official Brochure"
            className="h-full w-full border-0"
          >
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#161a20] p-6 text-center text-white">
              <FileText size={48} className="mb-4 text-emerald-400" />
              <h2 className="text-xl font-bold">Preview unavailable in your current browser</h2>
              <p className="mt-2 text-sm text-white/70">
                Click below to open or download the complete Saarzya Brochure.
              </p>
              <a
                href={embedPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-500"
              >
                <ExternalLink size={16} />
                <span>Open PDF in New Window</span>
              </a>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}

export default FullBrochureReaderPage;
