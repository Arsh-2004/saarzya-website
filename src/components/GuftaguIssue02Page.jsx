import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { navigateTo } from "../utils/router";

function GuftaguIssue02Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("cover-story");
  const [journalText, setJournalText] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  const STORAGE_KEY = "guftagu-issue02-map";

  useEffect(() => {
    window.scrollTo(0, 0);

    // Restore journal text from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setJournalText(saved);
        setSaveStatus("Saved on this device");
      }
    } catch (err) {
      console.warn("Storage not available:", err);
    }

    const handleScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)) * 100;
      setScrollProgress(pct);

      // Section scrollSpy
      const sectionIds = [
        "cover-story",
        "psychology",
        "real-life",
        "unsaid",
        "myth",
        "ask-us",
        "ask",
        "try",
        "corner",
        "last"
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJournalChange = (e) => {
    const val = e.target.value;
    setJournalText(val);
    try {
      localStorage.setItem(STORAGE_KEY, val);
      setSaveStatus("Saved on this device");
    } catch (err) {
      setSaveStatus("Not saved — storage unavailable");
    }
  };

  const handleClearJournal = () => {
    setJournalText("");
    try {
      localStorage.removeItem(STORAGE_KEY);
      setSaveStatus("Cleared");
    } catch (err) {
      // ignore
    }
  };

  const handleBackToGuftagu = (e) => {
    e.preventDefault();
    navigateTo("/guftagu");
  };

  const mailBody = encodeURIComponent(journalText);
  const mailHref = `mailto:saarzya@gmail.com?subject=${encodeURIComponent("Try This — My reflection (Issue 02)")}&body=${mailBody}`;

  return (
    <div className="min-h-screen bg-[#FAF2EA] text-[#38452F] font-['Jost',sans-serif] font-light text-[17px] leading-[1.82] selection:bg-[#C9A9BA] selection:text-[#38452F]">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#8E6B81] z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-[#FAF2EA]/90 backdrop-blur-md border-b border-[#38452F]/15">
        <div className="max-w-[1120px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToGuftagu}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#5F6A54] uppercase hover:text-[#8E6B81] transition cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Guftagu</span>
            </button>
            <div className="h-4 w-[1px] bg-[#38452F]/20" />
            <a href="/guftagu" onClick={handleBackToGuftagu} className="flex items-center gap-2.5 text-inherit no-underline">
              <span className="w-8 h-8 rounded-full bg-[#F6EFE6] border border-[#C9A9BA] flex items-center justify-center text-sm shadow-xs">
                🌿
              </span>
              <span className="font-['Cormorant_Garamond',serif] text-xl font-normal leading-none">
                Guftagu<small className="block font-['Jost',sans-serif] text-[9px] tracking-[0.32em] text-[#5F6A54] mt-1 uppercase">BY SAARZYA</small>
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-5">
            <a href="#cover-story" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">Read</a>
            <a href="#unsaid" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">The Unsaid</a>
            <a href="#last" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">Last Page</a>
            <a
              href="mailto:saarzya@gmail.com?subject=Guftagu%20—%20Who%20am%20I%2C%20really%3F"
              className="border border-[#C9A9BA] rounded-sm px-3.5 py-1.5 text-[11px] tracking-[0.2em] uppercase text-[#8E6B81] hover:bg-[#8E6B81] hover:text-white transition no-underline"
            >
              Write to us
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <div className="max-w-[1120px] mx-auto px-6 pt-16 pb-11 border-b border-[#38452F]/15">
          <div className="max-w-[680px]">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold">Issue 02</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#5F6A54] border border-[#38452F]/15 rounded-xs px-2.5 py-1 font-semibold">Identity</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#5F6A54] border border-[#38452F]/15 rounded-xs px-2.5 py-1 font-semibold">Self-Awareness</span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] font-light text-4xl sm:text-6xl lg:text-7xl leading-[1.05] my-2">
              Who am I, <em>really?</em>
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-xl sm:text-2xl leading-snug max-w-[34ch] mb-6">
              Understanding, self-awareness &amp; identity.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs tracking-wider text-[#5F6A54]">
              <span>By <b className="font-normal text-[#38452F]">Team Saarzya</b></span>
              <span className="w-1 h-1 rounded-full bg-[#A88F6C]" />
              <span>10 min read</span>
              <span className="w-1 h-1 rounded-full bg-[#A88F6C]" />
              <span>Psychology &amp; Wellness</span>
            </div>
          </div>
        </div>

        {/* ---------- MAIN BODY GRID ---------- */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid lg:grid-cols-[200px_minmax(0,680px)] gap-0 lg:gap-14 items-start">

            {/* LEFT SIDEBAR RAIL */}
            <aside className="hidden lg:block sticky top-[96px] pt-16" aria-label="On this page">
              <p className="text-[9px] tracking-[0.28em] uppercase text-[#A88F6C] mb-3 font-semibold">On this page</p>
              <nav className="flex flex-col text-xs space-y-1">
                {[
                  { id: "cover-story", label: "The cover story" },
                  { id: "psychology", label: "The psychology behind it" },
                  { id: "real-life", label: "In real life" },
                  { id: "unsaid", label: "The unsaid 💌" },
                  { id: "myth", label: "Myth vs fact" },
                  { id: "ask-us", label: "Ask us anything" },
                  { id: "ask", label: "Ask Saarzya" },
                  { id: "try", label: "Try this 🌱" },
                  { id: "corner", label: "The psychology corner" },
                  { id: "last", label: "The last page" }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`no-underline py-1.5 pl-3.5 border-l leading-snug transition ${
                      activeSection === item.id
                        ? "text-[#8E6B81] border-l-[#8E6B81] font-semibold"
                        : "text-[#5F6A54] border-l-[#38452F]/15 hover:text-[#8E6B81]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* MAIN ARTICLE CONTENT */}
            <article className="py-12">

              {/* COVER STORY */}
              <section id="cover-story" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 13C1 7 5 2 13 1c0 8-5 12-11 12z" stroke="currentColor"/></svg>
                  <span>The cover story</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  The question that arrives at 2am
                </h2>

                <p className="first-letter:font-['Cormorant_Garamond',serif] first-letter:float-left first-letter:text-6xl first-letter:leading-[0.82] first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-[#8E6B81] mb-5">
                  There's a version of this question that visits almost everyone eventually. Not loudly. Usually while brushing your teeth, or staring at a ceiling fan at 2am, or sitting in a meeting nodding at something you don't quite believe. <em>Who am I, really?</em> Not the job title. Not the role of daughter, partner, employee, the "responsible one." The version underneath all of that — if there even is one.
                </p>

                <p className="mb-5">
                  We tend to think of identity as something we discover once, like finding a birthmark we'd never noticed. But identity behaves less like a fact and more like a practice. It's built, session by session, out of the roles we're handed, the approval we chase, and — slowly, if we're paying attention — the choices we finally make on our own terms.
                </p>

                <p className="mb-5">
                  Most people don't wake up one day fully split from who they were raised to be. It happens in smaller moments: agreeing to a plan you didn't want, performing enthusiasm you didn't feel, realising you can describe yourself perfectly to a stranger but go blank when someone asks what you actually enjoy. Self-awareness is what turns the blankness into information instead of shame.
                </p>

                <blockquote className="my-9 pl-5 border-l-2 border-l-[#C9A9BA] font-['Cormorant_Garamond',serif] italic text-2xl sm:text-3xl leading-snug text-[#38452F]">
                  Identity confusion isn't a malfunction. It's usually the sound of a self that's outgrowing its old container.
                </blockquote>

                <p className="mb-5">
                  This issue is about that outgrowing — the gap between the self we perform and the self we suspect is underneath, and what it actually takes to close it without pretending the question was ever simple.
                </p>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* PSYCHOLOGY */}
              <section id="psychology" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor"/><path d="M7 1v12M1 7h12" stroke="currentColor" opacity=".5"/></svg>
                  <span>The psychology behind it</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  What the research actually says
                </h2>

                <p className="mb-5">
                  Erik Erikson framed adolescence around a central task he called "identity vs. role confusion" — but later researchers, particularly James Marcia, showed the process rarely finishes on schedule. Marcia described four identity statuses based on two things: whether a person has explored different values and roles, and whether they've committed to any of them. Most people cycle through these statuses more than once across a lifetime — after a breakup, a career change, a move, a loss, becoming a parent.
                </p>

                <div className="grid gap-3.5 my-6">
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-5 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-lg text-[#38452F] block mb-1">Diffusion</b>
                    <p className="text-sm text-[#5F6A54] m-0">No real exploration, no commitment — often mistaken for laziness, but usually reflects overwhelm rather than apathy.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-5 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-lg text-[#38452F] block mb-1">Foreclosure</b>
                    <p className="text-sm text-[#5F6A54] m-0">Commitment without exploration — values adopted wholesale from parents or culture, never actually tested against one's own experience.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-5 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-lg text-[#38452F] block mb-1">Moratorium</b>
                    <p className="text-sm text-[#5F6A54] m-0">Active exploration, no commitment yet — the uncomfortable but necessary middle where most real growth happens.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-5 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-lg text-[#38452F] block mb-1">Achievement</b>
                    <p className="text-sm text-[#5F6A54] m-0">Exploration followed by a self-chosen commitment — not permanent, and often revisited later in life.</p>
                  </div>
                </div>

                <p className="mt-6 mb-5">
                  Self-awareness research adds another layer, distinguishing between <em>internal</em> self-awareness — how clearly you see your own values and patterns — and <em>external</em> self-awareness — how accurately you read others' perception of you. Organisational psychologist Tasha Eurich's research found these two capacities don't automatically move together: people who are highly attuned to how others see them are sometimes the least connected to what they actually want, because so much bandwidth goes toward managing the external picture.
                </p>

                <p className="text-sm text-[#5F6A54] mt-5 leading-relaxed bg-[#F6EFE6] border border-[#38452F]/15 p-4 rounded-sm">
                  One caution: identity status isn't a label to diagnose yourself with permanently. The useful question isn't "which category am I," but "where, right now, am I performing a commitment I never actually chose?"
                </p>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* IN REAL LIFE */}
              <section id="real-life" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 3h10v8H2z" stroke="currentColor"/><path d="M2 3l5 4 5-4" stroke="currentColor"/></svg>
                  <span>In real life</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
                  The question with no rehearsed answer
                </h2>
                <p className="text-sm text-[#5F6A54] mb-6">A fictional scenario, built from patterns we see often.</p>

                <div className="font-['Cormorant_Garamond',serif] text-lg leading-relaxed bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-6 sm:p-7 space-y-4">
                  <p>Rhea is 27 and has a fully rehearsed answer for almost anything anyone could ask her — her plans, her opinions on other people's plans, what she thinks her parents want, what her manager expects by Friday. She is, by every external measure, extremely put-together.</p>
                  <p>At dinner, a colleague asks, half-joking, "Okay but what do you actually like doing — just for you, no one watching?" Rhea opens her mouth. Nothing arrives. She laughs it off, changes the subject, orders dessert. But the question follows her home.</p>
                  <p className="!mb-0">That night she doesn't have a breakdown. She just sits with the discomfort of realising she has a complete answer for who she is <em>to</em> everyone else, and almost nothing for who she is when no one's grading the performance.</p>
                </div>

                <p className="text-[10px] tracking-[0.28em] uppercase text-[#A88F6C] font-semibold mt-7 mb-2">What's actually happening</p>
                <p className="mb-5">
                  Rhea likely sits closer to foreclosure than she'd guess — competent, decisive, but running on commitments she inherited rather than chose. The blank space isn't a deficit; it's simply unexplored territory, because exploration was never modelled or made safe for her.
                </p>

                <p className="text-[10px] tracking-[0.28em] uppercase text-[#A88F6C] font-semibold mt-6 mb-2">What would change it</p>
                <p>
                  Not a dramatic reinvention. Just permission to answer badly at first — to say "I don't know yet" about something small, and let that be enough for one evening.
                </p>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* THE UNSAID */}
              <section id="unsaid" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 12S1.6 8.6 1.6 5.2A2.9 2.9 0 017 3.6a2.9 2.9 0 015.4 1.6C12.4 8.6 7 12 7 12z" stroke="currentColor"/></svg>
                  <span>The unsaid 💌</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Say the unsaid
                </h2>

                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 sm:p-7 my-5">
                  <div className="text-2xl mb-2.5">💌</div>
                  <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Something you've never told anyone</h4>
                  <p className="text-[#38452F] mb-4">
                    Something you've never told anyone about how you love, leave, or stay? Send it to us. We publish anonymously, we never print names, and we remove anything that could identify you or anyone else.
                  </p>
                  <a href="mailto:saarzya@gmail.com?subject=The%20Unsaid%20—%20Issue%2002" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] hover:text-[#7a3f4e] no-underline">
                    saarzya@gmail.com
                  </a>
                </div>
                <p className="text-sm text-[#5F6A54]">
                  Anonymous community experiences on this issue's theme will appear here in the next Guftagu.
                </p>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* MYTH VS FACT */}
              <section id="myth" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M2 4h10M2 10h10" stroke="currentColor"/></svg>
                  <span>Myth vs fact</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Correcting common misconceptions
                </h2>

                <div className="border-t border-[#38452F]/15">
                  {[
                    {
                      myth: "You should \"find yourself\" once, and know exactly who you are forever after.",
                      fact: "Identity evolves across life stages. Revisiting the question at 35 or 55 is growth, not a relapse into confusion."
                    },
                    {
                      myth: "Feeling unsure of who you are means something is wrong with you.",
                      fact: "Identity confusion is a common, often necessary phase — especially after major transitions."
                    },
                    {
                      myth: "Self-awareness means constantly analysing every thought and feeling.",
                      fact: "Real self-awareness is calmer than that — noticing patterns over time, not narrating every moment."
                    },
                    {
                      myth: "If your identity changes, your past self was \"fake.\"",
                      fact: "Every earlier version of you was genuine for the context it existed in. Growth adds to a self; it doesn't erase one."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="py-5 border-b border-[#38452F]/15">
                      <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] m-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                        {item.myth}
                      </p>
                      <p className="text-sm leading-relaxed text-[#38452F] mt-3 m-0 before:content-['Fact'] before:block before:font-['Jost',sans-serif] before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                        {item.fact}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* ASK US ANYTHING */}
              <section id="ask-us" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor"/></svg>
                  <span>Ask us anything</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  We'll answer one, next issue
                </h2>
                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 sm:p-7">
                  <p className="mb-4">
                    Send your question and we'll answer one in the next Guftagu. Published anonymously, answered in general terms — never as individual diagnosis or therapy.
                  </p>
                  <a href="mailto:saarzya@gmail.com?subject=Ask%20Us%20Anything" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] hover:text-[#7a3f4e] no-underline">
                    saarzya@gmail.com
                  </a>
                </div>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* ASK SAARZYA */}
              <section id="ask" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor"/></svg>
                  <span>Ask Saarzya</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Reader questions
                </h2>

                <div className="border-b border-[#38452F]/15 py-5">
                  <p className="font-['Cormorant_Garamond',serif] italic text-xl text-[#38452F] mb-3">
                    How do I know if I actually like something, or I've just always been told I should?
                    <span className="block not-italic font-['Jost',sans-serif] text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-1">— Reader</span>
                  </p>
                  <p className="text-sm leading-relaxed text-[#5F6A54]">
                    Notice how you feel <em>after</em> doing it when nobody else knows. Genuine preference tends to hold up in private; borrowed preference often needs an audience to feel worthwhile.
                  </p>
                </div>

                <div className="py-5">
                  <p className="font-['Cormorant_Garamond',serif] italic text-xl text-[#38452F] mb-3">
                    I feel like a different person around my family than with my friends. Is that a problem?
                    <span className="block not-italic font-['Jost',sans-serif] text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-1">— Reader</span>
                  </p>
                  <p className="text-sm leading-relaxed text-[#5F6A54]">
                    Not necessarily — context shifts everyone slightly. It's worth exploring only if one version is costing you something real, like honesty or peace.
                  </p>
                </div>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* TRY THIS */}
              <section id="try" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 13V5M7 5C7 2.8 8.8 1 11 1c0 2.2-1.8 4-4 4zM7 7C7 5.3 5.3 4 3.4 4c0 1.9 1.4 3 3.6 3z" stroke="currentColor"/></svg>
                  <span>Try this 🌱</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
                  Five honest minutes
                </h2>
                <p className="text-sm text-[#5F6A54] mb-6">Do it when you're calm, and don't edit your answers to sound better.</p>

                <ol className="list-none p-0 m-0 space-y-4 my-6">
                  {[
                    { title: "When completely alone, I actually enjoy…", sub: "Not what impresses anyone. Just what you'd do with the door closed." },
                    { title: "A belief I hold that isn't really mine", sub: "Something inherited rather than chosen — trace whose voice it first belonged to." },
                    { title: "People would describe me as ___, but I secretly feel more like ___", sub: "Notice the gap without rushing to close it." },
                    { title: "One small thing I could do this week, just for the \"me\" underneath the roles", sub: "Small is the point. This isn't a life overhaul." }
                  ].map((step, idx) => (
                    <li key={idx} className="relative pl-11 pb-2">
                      <span className="absolute left-0 -top-0.5 w-7 text-center font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA]">
                        {idx + 1}
                      </span>
                      <b className="font-['Cormorant_Garamond',serif] font-normal text-lg block text-[#38452F]">{step.title}</b>
                      <span className="text-sm text-[#5F6A54]">{step.sub}</span>
                    </li>
                  ))}
                </ol>

                <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-sm mt-3">
                  <label htmlFor="j1" className="block text-[11px] tracking-[0.16em] uppercase text-[#5F6A54] mb-2 font-medium">
                    Your page — saved only in this browser, on this device
                  </label>
                  <textarea
                    id="j1"
                    value={journalText}
                    onChange={handleJournalChange}
                    placeholder="Write your answers here…"
                    className="w-full min-h-[140px] resize-y bg-[#FAF2EA] text-[#38452F] border border-[#38452F]/15 rounded-xs p-3.5 font-['Cormorant_Garamond',serif] text-lg leading-relaxed outline-none focus:border-[#8E6B81]"
                  />
                  <div className="flex flex-wrap gap-3 justify-between items-center mt-3">
                    <span className="text-xs text-[#8E9D7B] font-medium" aria-live="polite">
                      {saveStatus}
                    </span>
                    <div className="flex gap-2.5 flex-wrap">
                      <button
                        type="button"
                        onClick={handleClearJournal}
                        className="bg-transparent border border-[#38452F]/20 text-[#5F6A54] font-['Jost',sans-serif] text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-xs hover:border-[#8E6B81] hover:text-[#8E6B81] transition cursor-pointer"
                      >
                        Clear page
                      </button>
                      <a
                        href={mailHref}
                        className="inline-block bg-[#8E6B81] border border-[#8E6B81] text-[#FBF5F8] font-['Jost',sans-serif] text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-xs hover:opacity-90 transition no-underline"
                      >
                        Mail us your answers
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-[#5F6A54] mt-3 mb-0">
                    Nothing is sent anywhere unless you choose to mail it.
                  </p>
                </div>
              </section>

              <hr className="border-0 flex items-center justify-center gap-3 my-10 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15 text-[#8E9D7B]" />

              {/* PSYCHOLOGY CORNER */}
              <section id="corner" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 1h4v4H1zM9 9h4v4H9zM5 5h4v4H5z" stroke="currentColor"/></svg>
                  <span>The psychology corner</span>
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  The performed self vs. the private self
                </h2>

                <p className="mb-5">
                  Psychologists sometimes describe a gap between our "public self" — the version we manage for others — and our "private self," the one we experience alone. A little gap is normal and even useful; a wide, permanent one is exhausting, because maintaining a performance takes energy that never gets to rest.
                </p>

                <p className="mb-6">
                  Closing the gap doesn't mean abandoning every role you play. It means occasionally checking whether the role still fits, or whether you're simply afraid of what happens if you stop playing it.
                </p>

                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 sm:p-7">
                  <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Share what you discovered</h4>
                  <p className="mb-4">
                    Did the reflection above surface something unexpected? Mail us your answers — your insight might become part of a future Guftagu, always anonymously.
                  </p>
                  <a href="mailto:saarzya@gmail.com?subject=Psychology%20Corner%20—%20My%20reflection" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] hover:text-[#7a3f4e] no-underline">
                    saarzya@gmail.com
                  </a>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ---------- LAST PAGE ---------- */}
        <section id="last" className="bg-[#F3E9DF] border-t border-[#38452F]/15 text-center py-20 px-6 mt-9">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-6 flex justify-center">
            The last page
          </div>
          <q className="quotes-none font-['Cormorant_Garamond',serif] italic text-3xl sm:text-4xl leading-snug block max-w-[20ch] mx-auto text-[#38452F]">
            You don't find yourself. You build yourself out of what you choose to keep.
          </q>
          <div className="flex gap-2.5 justify-center mt-8">
            <i className="w-1.5 h-1.5 rounded-full bg-[#C9A9BA]" />
            <i className="w-1.5 h-1.5 rounded-full bg-[#A88F6C]" />
            <i className="w-1.5 h-1.5 rounded-full bg-[#8E9D7B]" />
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-[#38452F]/15 py-11 px-6 text-center text-[#5F6A54] text-xs">
        <p className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-1">Guftagu by Saarzya</p>
        <p className="text-[11px] tracking-wider mb-2">Issue 02 · Who am I, really?</p>
        <p className="mb-3">
          <a href="mailto:saarzya@gmail.com" className="text-[#8E6B81] no-underline hover:underline">saarzya@gmail.com</a>
        </p>
        <p className="max-w-[54ch] mx-auto leading-relaxed text-[#5F6A54]/80">
          Guftagu is written for education and reflection. It is not therapy, diagnosis, or individual advice.
        </p>
      </footer>
    </div>
  );
}

export default GuftaguIssue02Page;
