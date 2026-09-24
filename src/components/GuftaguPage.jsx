import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { navigateTo } from "../utils/router";

function GuftaguPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleBackToSite = (e) => {
    e.preventDefault();
    navigateTo("/");
  };

  const handleOpenArticle = (e, targetHash = "") => {
    if (e) e.preventDefault();
    const targetPath = targetHash ? `/guftagu/why-do-we-attach${targetHash}` : "/guftagu/why-do-we-attach";
    navigateTo(targetPath);
  };

  return (
    <div className="min-h-screen bg-[#FAF2EA] text-[#38452F] font-['Jost',sans-serif] font-light text-[17px] leading-[1.8] selection:bg-[#C9A9BA] selection:text-[#38452F]">
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-[#FAF2EA]/90 backdrop-blur-md border-b border-[#38452F]/15">
        <div className="max-w-[1080px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToSite}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#5F6A54] uppercase hover:text-[#8E6B81] transition"
            >
              <ArrowLeft size={14} />
              <span>Main Site</span>
            </button>
            <div className="h-4 w-[1px] bg-[#38452F]/20" />
            <a href="/guftagu" className="flex items-center gap-3 text-inherit no-underline">
              <img
                src="/assets/logo.jpg"
                alt="Saarzya Logo"
                className="w-9 h-9 rounded-full object-cover object-center border border-[#38452F]/15"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo.png";
                }}
              />
              <span className="font-['Cormorant_Garamond',serif] text-xl font-normal leading-none">
                Guftagu<small className="block font-['Jost',sans-serif] text-[9px] tracking-[0.3em] text-[#5F6A54] mt-1 uppercase">BY SAARZYA</small>
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-5">
            <a href="#featured" className="hidden sm:inline-block text-[11px] tracking-[0.18em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">
              Featured
            </a>
            <a href="#pillars" className="hidden sm:inline-block text-[11px] tracking-[0.18em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">
              Categories
            </a>
            <a href="#archive" className="hidden sm:inline-block text-[11px] tracking-[0.18em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">
              Archive
            </a>
            <a href="#write" className="border border-[#C9A9BA] rounded-sm px-3.5 py-1.5 text-[11px] tracking-[0.18em] uppercase text-[#8E6B81] hover:bg-[#8E6B81] hover:text-white transition no-underline">
              Write for Guftagu
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="py-20 px-6 text-center border-b border-[#38452F]/15 bg-[radial-gradient(circle_at_15%_20%,rgba(207,159,168,0.18)_0%,transparent_45%),radial-gradient(circle_at_85%_75%,rgba(161,90,99,0.14)_0%,transparent_50%)]">
          <div className="max-w-[1080px] mx-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-2 flex items-center justify-center gap-2">
              Guftagu by Saarzya
            </p>
            <h1 className="font-['Cormorant_Garamond',serif] font-normal text-4xl sm:text-6xl lg:text-7xl leading-[1.03] my-3">
              A space for the<br /><em className="italic">conversations</em> we don't usually have.
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-lg sm:text-2xl max-w-[34ch] mx-auto mb-2">
              On the mind, on love, on the people we can't stop thinking about.
            </p>
            <p className="text-xs tracking-wider text-[#A88F6C] max-w-[44ch] mx-auto mb-8">
              Guftagu (گفتگو) — Hindi–Urdu for “conversation.” This is where Saarzya Psychology &amp; Wellness thinks out loud, and invites you to think along.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/guftagu/why-do-we-attach"
                onClick={(e) => handleOpenArticle(e)}
                className="inline-block bg-[#8E6B81] border border-[#8E6B81] text-[#FBF5F8] text-[11px] tracking-[0.18em] uppercase px-6 py-3 rounded-sm font-medium hover:opacity-90 transition no-underline"
              >
                Read this month's Guftagu
              </a>
              <a
                href="#write"
                className="inline-block border border-[#38452F]/20 text-[#5F6A54] text-[11px] tracking-[0.18em] uppercase px-5 py-3 rounded-sm font-medium hover:border-[#8E6B81] hover:text-[#8E6B81] transition no-underline"
              >
                Write for us
              </a>
            </div>
          </div>
        </section>

        {/* ---------- TABLE OF CONTENTS / JOURNEY ---------- */}
        <div className="max-w-[1080px] mx-auto py-11 px-6">
          <ul className="max-w-[560px] mx-auto divide-y divide-[#38452F]/15 list-none p-0 m-0">
            <li className="border-t border-[#38452F]/15">
              <a href="#about" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>About Guftagu</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#featured" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Featured Guftagu</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#latest" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Latest Guftagu</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>

            <li>
              <a href="#unsaid" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>The Unsaid</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#myth" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Myth vs Fact</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#everyday" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Psychology in Everyday Life</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#voices" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Voices of Saarzya</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#theme" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Monthly Theme</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#write" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Write for Guftagu</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
            <li>
              <a href="#archive" className="flex items-baseline justify-between gap-3 py-3.5 px-1 font-['Cormorant_Garamond',serif] text-xl text-[#38452F] hover:text-[#8E6B81] no-underline">
                <span>Guftagu Archive</span><span className="font-['Jost',sans-serif] text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">↓</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- ABOUT SECTION ---------- */}
        <section id="about" className="py-14 border-t border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
                  About Guftagu
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-4">
                  Psychology, spoken the way people actually talk.
                </h2>
                <p className="mb-4 text-[#38452F]/90">
                  Guftagu is the monthly conversation space of Saarzya, Psychology &amp; Wellness. Each issue takes one theme in love, attachment, family, work or the mind, and holds it from every angle — the research, a story, a myth worth correcting, a reader's real question, and the words the community sends in but never says out loud elsewhere.
                </p>
                <p className="mb-0 text-[#38452F]/90">
                  It isn't a lecture. It's closer to a long, honest conversation — the kind you have with someone who happens to know the psychology, and asks good questions instead of handing you a diagnosis.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/image.png"
                  alt="Guftagu — The Psychology Magazine by Saarzya"
                  className="w-56 h-56 rounded-2xl object-cover object-center border border-[#38452F]/20 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FEATURED SECTION ---------- */}
        <section id="featured" className="py-14 bg-[#F3E9DF] border-t border-b border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Featured Guftagu
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
              This month, we're asking why we attach.
            </h2>
            
            <div className="grid md:grid-cols-[1fr_1.15fr] border border-[#38452F]/15 rounded-md overflow-hidden bg-white shadow-sm">
              <div className="bg-[radial-gradient(120%_140%_at_20%_10%,#CBD4BC_0%,#F3E9DF_60%)] flex items-center justify-center p-10 min-h-[220px]">
                <svg viewBox="0 0 220 200" className="w-full max-w-[230px]" role="img" aria-label="Line drawn faces forming a heart">
                  <path d="M40 175c0-46 8-74 24-90 12-12 26-16 26-28 0-9-7-14-7-23 0-10 9-17 19-17" stroke="#8E6B81" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                  <path d="M180 175c0-46-8-74-24-90-12-12-26-16-26-28 0-9 7-14 7-23 0-10-9-17-19-17" stroke="#8E9D7B" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                  <path d="M110 152c-18-14-34-26-34-40 0-11 8-18 18-18 7 0 13 4 16 10 3-6 9-10 16-10 10 0 18 7 18 18 0 14-16 26-34 40z" stroke="#A88F6C" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>

              <div className="p-8 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 flex-wrap mb-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold">Issue 01</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold">Attachment</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold">Relationships</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl text-[#38452F] mb-3 leading-tight">
                    Why do we attach?<br />Understanding love, attachment, and relationship.
                  </h3>
                  <p className="text-sm text-[#5F6A54] leading-relaxed mb-6">
                    Why one silence can feel like a small emergency. Why we return to people who are bad for us, and struggle to accept the ones who are steady. This issue walks through the psychology of attachment — from Bowlby's earliest theories to a very ordinary 11.42 pm text — without a single ounce of shame attached to any of it.
                  </p>
                </div>

                <a
                  href="#archive"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("archive");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] border-b border-[#C9A9BA] pb-1 font-bold hover:text-[#7a3f4e] transition no-underline w-max"
                >
                  <span>Read the full Guftagu →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- LATEST SECTION ---------- */}
        <section id="latest" className="py-14 border-t border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Latest Guftagu
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
              From the issues
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold mb-3">Issue 01</span>
                  <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-2 font-medium">Why do we attach?</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">Understanding love, attachment, and relationship — the cover story, the science, the unsaid.</p>
                </div>
                <a
                  href="/guftagu/why-do-we-attach"
                  onClick={(e) => handleOpenArticle(e)}
                  className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-bold no-underline hover:underline"
                >
                  Read now →
                </a>
              </div>

              <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 flex flex-col justify-between opacity-75 shadow-xs">
                <div>
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#A88F6C] border border-[#A88F6C] rounded-xs px-2.5 py-1 font-semibold mb-3">Issue 02</span>
                  <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[#5F6A54] mb-2 font-medium">Next month's Guftagu</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">A new theme is being written. Subscribe by mail to know the moment it's out.</p>
                </div>
                <a href="mailto:Saarzya@gmail.com?subject=Notify%20me%20—%20Next%20Guftagu" className="text-[11px] tracking-[0.16em] uppercase text-[#A88F6C] font-bold no-underline hover:underline">
                  Notify me →
                </a>
              </div>

              <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 flex flex-col justify-between opacity-75 shadow-xs">
                <div>
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#A88F6C] border border-[#A88F6C] rounded-xs px-2.5 py-1 font-semibold mb-3">Coming soon</span>
                  <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[#5F6A54] mb-2 font-medium">Have a theme in mind?</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">Tell us what you'd like Guftagu to talk about next — we read every suggestion.</p>
                </div>
                <a href="mailto:Saarzya@gmail.com?subject=Theme%20suggestion%20for%20Guftagu" className="text-[11px] tracking-[0.16em] uppercase text-[#A88F6C] font-bold no-underline hover:underline">
                  Suggest a theme →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CATEGORIES / PILLARS ---------- */}
        <section id="pillars" className="py-14 bg-[#F3E9DF] border-t border-b border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Where to begin
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
              Seven ways into the same conversation
            </h2>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-lg mb-8 max-w-[60ch]">
              Every Guftagu is built out of these recurring sections — each a different lens on the month's theme.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E9D7B] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Zehn <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">The Mind</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">The evidence. Concepts, research, and the psychology behind the theme, explained without jargon.</p>
                <a href="/guftagu/why-do-we-attach#psychology" onClick={(e) => handleOpenArticle(e, "#psychology")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Zehn →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E6B81] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Ehsaas <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Emotions</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">What the theme actually feels like in the body — the ache, the relief, the parts psychology alone can't fully name.</p>
                <a href="/guftagu/why-do-we-attach#corner" onClick={(e) => handleOpenArticle(e, "#corner")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Ehsaas →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E9D7B] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Dastaan <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Stories</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">A fictional scene, built from patterns we see often — so the theme has a face and a Tuesday evening, not just a definition.</p>
                <a href="/guftagu/why-do-we-attach#real-life" onClick={(e) => handleOpenArticle(e, "#real-life")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Dastaan →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E6B81] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Nazariya <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Perspectives</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">The misconceptions worth retiring, and the research-backed view that replaces them.</p>
                <a href="/guftagu/why-do-we-attach#myth" onClick={(e) => handleOpenArticle(e, "#myth")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Nazariya →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E9D7B] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Samvaad <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Conversations</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">Reader questions, answered honestly and in general terms — the questions you'd ask a psychologist if the room felt safe enough.</p>
                <a href="/guftagu/why-do-we-attach#ask" onClick={(e) => handleOpenArticle(e, "#ask")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Samvaad →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E6B81] rounded-sm p-6">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Campus Guftagu <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Student voices</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">Reflections from students and young readers — because a lot of this is first learned, and first misunderstood, on campus.</p>
                <a href="/guftagu/why-do-we-attach#voices" onClick={(e) => handleOpenArticle(e, "#voices")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Campus Guftagu →</a>
              </div>

              <div className="bg-white border border-[#38452F]/15 border-l-4 border-l-[#8E9D7B] rounded-sm p-6 sm:col-span-2">
                <div className="font-['Cormorant_Garamond',serif] text-2xl flex items-baseline gap-2.5 text-[#38452F]">
                  Aaina <small className="font-['Jost',sans-serif] text-[10px] tracking-[0.16em] uppercase text-[#5F6A54]">Reflections</small>
                </div>
                <p className="my-2.5 text-sm text-[#5F6A54]">A simple activity or journaling prompt to sit with the theme yourself — a mirror, not a lecture.</p>
                <a href="/guftagu/why-do-we-attach#try" onClick={(e) => handleOpenArticle(e, "#try")} className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-semibold no-underline hover:underline">This issue's Aaina →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- THE UNSAID SECTION ---------- */}
        <section id="unsaid" className="py-14 border-t border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              The Unsaid 💌
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
              Say the unsaid
            </h2>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-lg mb-8 max-w-[60ch]">
              Every issue holds space for the things our community has never told anyone. This month it's about how we love, leave, or stay — and it's waiting for your words.
            </p>

            <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-7 sm:p-8 max-w-[640px]">
              <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Say the unsaid</h4>
              <p className="text-sm text-[#5F6A54] mb-4">Send us something you've never said out loud. We publish anonymously, never print names, and remove anything that could identify you or anyone else.</p>
              <a href="mailto:Saarzya@gmail.com?subject=The%20Unsaid%20—%20Issue%2002&body=Age%20and%20city%20(optional)%3A%0A%0AWhat%20I've%20never%20said%20out%20loud%3A%0A" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] no-underline hover:underline">
                Saarzya@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ---------- MYTH VS FACT SECTION ---------- */}
        <section id="myth" className="py-14 bg-[#F3E9DF] border-t border-b border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Myth vs Fact
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
              A misconception worth retiring
            </h2>

            <div className="border-t border-[#38452F]/15 max-w-[760px] divide-y divide-[#38452F]/15">
              <div className="py-5">
                <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                  Your attachment style is fixed — you either got it right in childhood or you didn't.
                </p>
                <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                  Attachment shows moderate stability, not permanence. Styles shift with significant relational experience: a steady partnership, parenthood, loss, therapy.
                </p>
              </div>

              <div className="py-5">
                <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                  Needing someone is weakness. Healthy adults are independent.
                </p>
                <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                  Research on the dependency paradox finds the opposite — people who can rely on a partner when distressed tend to function more autonomously, not less.
                </p>
              </div>
            </div>

            <p className="mt-6">
              <a href="/guftagu/why-do-we-attach#myth" onClick={(e) => handleOpenArticle(e, "#myth")} className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] border-b border-[#C9A9BA] pb-1 font-bold no-underline hover:underline">
                Read all six, this issue →
              </a>
            </p>
          </div>
        </section>

        {/* ---------- MONTHLY THEME BANNER ---------- */}
        <section id="theme" className="py-14 border-t border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Monthly Theme
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
              Why does this month matter?
            </h2>

            <div className="border border-[#38452F]/15 rounded-md p-8 sm:p-10 bg-[linear-gradient(135deg,rgba(201,169,186,0.18)_0%,#FAF2EA_60%)]">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#A88F6C] mb-2">Issue 01 · This month's theme</p>
              <h3 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-3">Why do we attach?</h3>
              <p className="text-sm text-[#5F6A54] leading-relaxed mb-6 max-w-3xl">
                Attachment shapes almost every close relationship we have, yet most of us never learn the language for it — so we live it out instead: the pursuit, the withdrawal, the person we keep forgiving, the closeness we keep at arm's length. Every section of this issue — Zehn, Dastaan, Nazariya, Samvaad and the rest — looks at this from a different angle, so that by the last page, the pattern feels less like a personal failing and more like something you can actually work with.
              </p>
              <a
                href="/guftagu/why-do-we-attach"
                onClick={(e) => handleOpenArticle(e)}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] border-b border-[#C9A9BA] pb-1 font-bold no-underline hover:underline"
              >
                Start reading →
              </a>
            </div>
          </div>
        </section>

        {/* ---------- WRITE FOR GUFTAGU ---------- */}
        <section id="write" className="py-14 bg-[#F3E9DF] border-t border-b border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Write for Guftagu
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
              Have something to say?
            </h2>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-lg mb-8 max-w-[60ch]">
              Guftagu is written with, not just for, its readers. We welcome essays, questions, poetry, artwork, campus reflections, and anonymous submissions from anyone who has something honest to add to the conversation.
            </p>

            <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-7 sm:p-8 max-w-[640px]">
              <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Pitch, submit, or contribute</h4>
              <p className="text-sm text-[#5F6A54] mb-4">Tell us what you'd like to write, or attach what you've already written. Students, alumni, clients and readers are all welcome — you don't need to be a psychologist to have something worth saying.</p>
              <a href="mailto:Saarzya@gmail.com?subject=Write%20for%20Guftagu&body=What%20I'd%20like%20to%20contribute%3A%0A%0AA%20little%20about%20me%20(optional)%3A%0A" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] no-underline hover:underline">
                Saarzya@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ---------- ARCHIVE SECTION ---------- */}
        <section id="archive" className="py-14 border-t border-[#38452F]/15">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1.5 flex items-center gap-2">
              Guftagu Archive
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
              Every issue, gathered here
            </h2>

            <div className="max-w-[640px] divide-y divide-[#38452F]/15">
              <div className="flex justify-between items-baseline gap-4 py-4 border-t border-b border-[#38452F]/15">
                <span className="font-['Cormorant_Garamond',serif] text-xl text-[#38452F]">Issue 01 — Why do we attach?</span>
                <a
                  href="/guftagu/why-do-we-attach"
                  onClick={(e) => handleOpenArticle(e)}
                  className="text-[11px] tracking-[0.16em] uppercase text-[#8E6B81] font-bold no-underline hover:underline"
                >
                  Read →
                </a>
              </div>
              <div className="flex justify-between items-baseline gap-4 py-4 border-b border-[#38452F]/15">
                <span className="font-['Cormorant_Garamond',serif] text-xl text-[#5F6A54]">Issue 02 — coming next month</span>
                <span className="text-[11px] tracking-[0.16em] uppercase text-[#5F6A54]">Soon</span>
              </div>
            </div>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-lg mt-5">This archive grows by one conversation every month.</p>
          </div>
        </section>
      </main>

      {/* ---------- LAST PAGE ---------- */}
      <section className="bg-[#F3E9DF] border-t border-[#38452F]/15 text-center py-20 px-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-6 justify-center">The last page</p>
        <q className="quotes-none font-['Cormorant_Garamond',serif] italic text-3xl sm:text-4xl leading-snug block max-w-[20ch] mx-auto text-[#38452F]">
          We are only as needy as our unmet needs.
        </q>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#A88F6C] mt-4">— John Bowlby</p>
        <div className="flex gap-2.5 justify-center mt-8">
          <i className="w-1.5 h-1.5 rounded-full bg-[#C9A9BA]" />
          <i className="w-1.5 h-1.5 rounded-full bg-[#A88F6C]" />
          <i className="w-1.5 h-1.5 rounded-full bg-[#8E9D7B]" />
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-[#38452F]/15 py-11 px-6 text-center text-[#5F6A54] text-xs">
        <p className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-1">Guftagu by Saarzya</p>
        <p className="text-[11px] tracking-[0.12em] uppercase">Psychology &amp; Wellness · A space for healing</p>
        <p><a href="mailto:Saarzya@gmail.com" className="text-[#8E6B81] no-underline">Saarzya@gmail.com</a></p>
        <p className="max-w-[54ch] mx-auto mt-5 leading-relaxed text-[11px]">
          Guftagu is written for education and reflection. It is not therapy, diagnosis, or individual advice.
        </p>
      </footer>
    </div>
  );
}

export default GuftaguPage;
