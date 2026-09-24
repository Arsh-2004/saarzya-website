import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { navigateTo } from "../utils/router";

function GuftaguArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("cover-story");
  const [journalText, setJournalText] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  const STORAGE_KEY = "guftagu-issue02-map";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

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
        "ask",
        "try",
        "corner",
        "voices",
        "help",
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
    } catch (err) {}
    setSaveStatus("Cleared");
  };

  const handleBackToGuftagu = (e) => {
    e.preventDefault();
    navigateTo("/guftagu");
  };

  const mailtoJournalUrl = `mailto:Saarzya@gmail.com?subject=${encodeURIComponent(
    "Try This — My attachment map"
  )}&body=${encodeURIComponent(journalText)}`;

  return (
    <div className="min-h-screen bg-[#FAF2EA] text-[#38452F] font-['Jost',sans-serif] font-light text-[17px] leading-[1.82] selection:bg-[#C9A9BA] selection:text-[#38452F]">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#8E6B81] z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-[#FAF2EA]/90 backdrop-blur-md border-b border-[#38452F]/15">
        <div className="max-w-[1120px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToGuftagu}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#5F6A54] uppercase hover:text-[#8E6B81] transition"
            >
              <ArrowLeft size={14} />
              <span>Back to Guftagu</span>
            </button>
            <div className="h-4 w-[1px] bg-[#38452F]/20" />
            <a href="/guftagu" onClick={handleBackToGuftagu} className="flex items-center gap-3 text-inherit no-underline">
              <img
                src="/assets/logo.jpg"
                alt="Saarzya Logo"
                className="w-10 h-10 rounded-full object-cover object-center border border-[#38452F]/15"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo.png";
                }}
              />
              <span className="font-['Cormorant_Garamond',serif] text-xl font-normal leading-none">
                Guftagu<small className="block font-['Jost',sans-serif] text-[9px] tracking-[0.32em] text-[#5F6A54] mt-1 uppercase">BY SAARZYA</small>
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-5">
            <a href="#cover-story" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">Read</a>
            <a href="#unsaid" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">The Unsaid</a>
            <a href="#help" className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#5F6A54] hover:text-[#8E6B81] no-underline">Get help</a>
            <a href="mailto:Saarzya@gmail.com?subject=Guftagu%20—%20Why%20do%20we%20attach%3F" className="border border-[#C9A9BA] rounded-sm px-3.5 py-1.5 text-[11px] tracking-[0.2em] uppercase text-[#8E6B81] hover:bg-[#8E6B81] hover:text-white transition no-underline">Write to us</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <div className="max-w-[1120px] mx-auto px-6 pt-16 pb-11 border-b border-[#38452F]/15">
          <div className="max-w-[680px]">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] border border-[#C9A9BA] rounded-xs px-2.5 py-1 font-semibold">Issue 01</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#5F6A54] border border-[#38452F]/15 rounded-xs px-2.5 py-1 font-semibold">Attachment</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#5F6A54] border border-[#38452F]/15 rounded-xs px-2.5 py-1 font-semibold">Relationships</span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] font-light text-4xl sm:text-6xl lg:text-7xl leading-[1.02] my-2">
              Why do we <em>attach?</em>
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic text-[#5F6A54] text-xl sm:text-2xl leading-snug max-w-[32ch] mb-6">
              Understanding love, attachment, and the people we keep returning to.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs tracking-wider text-[#5F6A54]">
              <span>By <b className="font-normal text-[#38452F]">Team Saarzya</b></span>
              <span className="w-1 h-1 rounded-full bg-[#A88F6C]" />
              <span>14 min read</span>
              <span className="w-1 h-1 rounded-full bg-[#A88F6C]" />
              <span>Psychology &amp; Wellness</span>
            </div>
          </div>
        </div>

        {/* ---------- MAIN BODY GRID ---------- */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid lg:grid-cols-[200px_minmax(0,680px)] gap-0 lg:gap-14 items-start">
            
            {/* LEFT SIDEBAR RAIL */}
            <aside className="hidden lg:block sticky top-[96px] pt-16">
              <p className="text-[9px] tracking-[0.28em] uppercase text-[#A88F6C] mb-3 font-semibold">On this page</p>
              <nav className="flex flex-col text-xs space-y-1">
                {[
                  { id: "cover-story", label: "The cover story" },
                  { id: "psychology", label: "The psychology behind it" },
                  { id: "real-life", label: "In real life" },
                  { id: "unsaid", label: "The unsaid 💌" },
                  { id: "myth", label: "Myth vs fact" },
                  { id: "ask", label: "Ask Saarzya" },
                  { id: "try", label: "Try this 🌱" },
                  { id: "corner", label: "The psychology corner" },
                  { id: "voices", label: "Voices" },
                  { id: "help", label: "When to seek help" },
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
            <article className="py-14">
              
              {/* COVER STORY */}
              <section id="cover-story" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  The cover story
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  The reason it hurts more than it “should”
                </h2>

                <p className="first-letter:font-['Cormorant_Garamond',serif] first-letter:float-left first-letter:text-6xl first-letter:leading-[0.82] first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-[#8E6B81] mb-5">
                  There is a particular ache that has no good name in any language. It arrives when someone you barely knew six months ago stops replying, and your body reacts as though something structural has been removed from it. You are not being dramatic. You are being human in the most literal, biological sense.
                </p>

                <p className="mb-5">
                  Human infants are born unfinished. We cannot cling, walk or feed ourselves; we arrive with almost nothing except an exquisite ability to summon a caregiver and to read their face. In the middle of the last century, the British psychiatrist John Bowlby argued that this was not merely helplessness but design: children are born with a behavioural system that keeps a protective adult close, because for most of human history, proximity was survival. Crying, reaching, following, clinging: not manipulation, but a distress signal with a purpose.
                </p>

                <p className="mb-5">
                  What Bowlby noticed next is the part that still shapes adult life. A child does not only need the caregiver to be present. The child is constantly, unconsciously asking one question: <em>if I need you, will you come?</em> The answer, repeated across thousands of ordinary Tuesdays, hardens into expectation. Not a memory you can recall, but a template. Bowlby called these internal working models: a private map of what closeness costs, what it delivers, and how much of yourself you must hide to keep it.
                </p>

                <blockquote className="my-9 pl-5 border-l-2 border-l-[#C9A9BA] font-['Cormorant_Garamond',serif] italic text-2xl sm:text-3xl leading-snug text-[#38452F]">
                  Attachment is not about how much we love. It is about what we learned to do with the fear of losing love.
                </blockquote>

                <p className="mb-5">
                  This is why attachment can feel so disproportionate. When someone becomes significant, they are quietly promoted, from acquaintance to <em>attachment figure</em>. They become the person you want to tell things to first, the one whose silence changes the temperature of your day. Their availability begins to regulate your nervous system the way a caregiver once did. Losing them doesn't just make you sad. It sets off an alarm designed for a child alone in the dark.
                </p>

                <p className="mb-5">
                  So we attach for three reasons at once. Because proximity once meant survival. Because another person's calm can physically steady us: slower breath, lower heart rate, a body borrowing regulation it cannot yet generate alone. And because attaching is how we learn who we are: a child who is responded to concludes <em>I am worth responding to</em>, and carries that conclusion into every room they will ever enter.
                </p>

                <p className="mb-5">
                  None of this is a sentence. The templates were built by experience, which means experience can renovate them. People who arrive in adulthood braced for abandonment can, through a long relationship with someone steady (a partner, a friend, or a therapist), slowly gather evidence for a different expectation. Researchers call it earned security. It is one of the more hopeful findings in the field, and one of the slowest, because templates are updated by repetition rather than insight. You cannot think your way into feeling safe. You can only accumulate enough experiences of being met that your body stops flinching.
                </p>

                <p className="mb-0">
                  When you ask yourself why you couldn't just let it go, why you checked the phone again, why you left before they could, notice these aren't character defects. They're strategies. Each one worked, once, for a smaller version of you who needed love to stay. Guftagu this month is an attempt to look at them without shame, and to ask something gentler than <em>what is wrong with me</em>: <em>what was this protecting me from, and do I still need it?</em>
                </p>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* PSYCHOLOGY BEHIND IT */}
              <section id="psychology" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  The psychology behind it
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  What the research actually says
                </h2>

                <p className="mb-6">
                  Attachment theory began with Bowlby in the 1950s and became measurable through Mary Ainsworth. In her Strange Situation procedure, one-year-olds were briefly separated from their mother in an unfamiliar room. The meaningful data turned out to be in the reunion: what the child did when the caregiver came back.
                </p>

                <div className="space-y-4 my-6">
                  <div className="border-l-3 border-l-[#8E9D7B] pl-4 py-1">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F]">Secure</b>
                    <span className="text-sm text-[#5F6A54] leading-relaxed block">Protests the separation, is comforted on return, goes back to playing. The caregiver works as a safe base: somewhere to return to, and therefore somewhere to leave from.</span>
                  </div>
                  <div className="border-l-3 border-l-[#8E6B81] pl-4 py-1">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F]">Anxious / ambivalent</b>
                    <span className="text-sm text-[#5F6A54] leading-relaxed block">Highly distressed, then hard to settle, reaching to be held and arching away at once. Care has been inconsistent, so the child cannot afford to relax into it.</span>
                  </div>
                  <div className="border-l-3 border-l-[#A88F6C] pl-4 py-1">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F]">Avoidant</b>
                    <span className="text-sm text-[#5F6A54] leading-relaxed block">Appears unbothered, keeps playing, ignores the return. Physiological measures tell another story: the stress is there, the expression of it has been switched off, because expressing it didn't work.</span>
                  </div>
                  <div className="border-l-3 border-l-[#C9A9BA] pl-4 py-1">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F]">Disorganised</b>
                    <span className="text-sm text-[#5F6A54] leading-relaxed block">Identified later by Mary Main and Judith Solomon. The child freezes, approaches then stalls, behaves contradictorily, typical where the caregiver is both the source of comfort and the source of fear.</span>
                  </div>
                </div>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mt-8 mb-3">From the nursery to adult love</h3>
                <p className="mb-6">
                  In 1987, Cindy Hazan and Phillip Shaver proposed that adult romantic love is itself an attachment process, and found that adults' descriptions of their relationships clustered into patterns recognisably similar to Ainsworth's. Decades of work since, much of it by Mario Mikulincer and Phillip Shaver, has refined this into two dimensions rather than neat boxes: <em>attachment anxiety</em> (how much you fear being abandoned or not mattering enough) and <em>attachment avoidance</em> (how uncomfortable you are with closeness and dependence). Most people sit on a gradient, not in a category.
                </p>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mt-8 mb-4">Four findings worth carrying around</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F] mb-1">Strategies are predictable, not random</b>
                    <p className="text-sm text-[#5F6A54] leading-relaxed m-0">Anxiety produces hyperactivating strategies: turning up the volume of the signal through protest, pursuit, monitoring. Avoidance produces deactivating strategies: suppressing the need, changing the subject, creating distance. Both manage the same fear.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F] mb-1">Comfort is physiological</b>
                    <p className="text-sm text-[#5F6A54] leading-relaxed m-0">Contact with a trusted person measurably alters the stress response. Studies of hand-holding during anticipated discomfort show reduced threat-related activation, strongest in the most satisfying relationships. “I feel calmer around you” describes the body, not a mood.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F] mb-1">Early patterns matter, but don't decide</b>
                    <p className="text-sm text-[#5F6A54] leading-relaxed m-0">Longitudinal research by R. Chris Fraley and others finds moderate stability from infancy into adulthood, real, but far from destiny. Style shifts with major relational events: a long secure partnership, a loss, parenthood, therapy.</p>
                  </div>
                  <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-xs">
                    <b className="font-['Cormorant_Garamond',serif] font-medium text-xl block text-[#38452F] mb-1">It is not only about mothers</b>
                    <p className="text-sm text-[#5F6A54] leading-relaxed m-0">Children form a hierarchy of attachments: fathers, grandparents, siblings, teachers, whoever shows up. In joint families and caregiving networks this matters enormously: one responsive figure can offset an unavailable one. Much of the founding research used small, Western samples that looked nothing like the households many of us grew up in.</p>
                  </div>
                </div>

                <p className="text-sm text-[#5F6A54] mt-6 mb-0">
                  One caution: attachment style is a research construct, not a diagnosis. Online quizzes that hand you a permanent label are entertainment. The useful question isn't “which type am I” but “what do I reliably do when I'm scared of losing someone”.
                </p>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* IN REAL LIFE */}
              <section id="real-life" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  In real life
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
                  The 11.42 pm text
                </h2>
                <p className="text-sm text-[#5F6A54] mb-6">
                  A fictional scenario, built from patterns we see often. Any resemblance to your own Tuesday is entirely the point.
                </p>

                <div className="font-['Cormorant_Garamond',serif] text-xl leading-[1.75] bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-6 sm:p-7 space-y-4">
                  <p>Ira is twenty-four and has read enough psychology to narrate her own behaviour while doing it anyway. It is 11.42 pm. Veer's last message was at 6.15. It said “call you later”, and later has not happened.</p>
                  <p>She has drafted four versions. The casual one. The funny one. The one that says <em>are we okay?</em> The one she actually sends at 11.51, which is three messages long and ends with “sorry, ignore me, I'm being weird.”</p>
                  <p>Across the city, Veer has seen all of them. He has also had an eleven-hour day and a conversation with his manager he is still chewing on. What he feels when the phone lights up isn't indifference — it's pressure. A familiar tightening, the sense that someone needs something from him that he does not currently have. So he does what he has always done: puts the phone face down and tells himself he'll reply properly in the morning, when he can do it well.</p>
                  <p className="mb-0">By morning, Ira has concluded something about herself. Veer has concluded something about relationships. Neither of them said a single untrue word.</p>
                </div>

                <div className="text-[10px] tracking-[0.28em] uppercase text-[#A88F6C] mt-8 mb-2 font-semibold">What's actually happening</div>
                <p className="mb-5">This is the pursue-withdraw cycle, the most documented pattern in couples research and the central target of Emotionally Focused Therapy. Ira's protest is a hyperactivating strategy: when the signal goes unanswered, she raises the volume. Veer's silence is deactivating: when flooded, he reduces contact to regain control. Each person's solution is the other person's trigger, and the loop tightens every time it runs.</p>

                <div className="text-[10px] tracking-[0.28em] uppercase text-[#A88F6C] mt-8 mb-2 font-semibold">What neither of them can see</div>
                <p className="mb-5">Ira reads the delay as evidence about her worth. Veer reads her messages as evidence that he is failing. The content of the argument — response times, tone, who started it — is almost irrelevant. Underneath, both are asking the same thing: <em>am I too much, or not enough, for you?</em></p>

                <div className="text-[10px] tracking-[0.28em] uppercase text-[#A88F6C] mt-8 mb-2 font-semibold">What would change it</div>
                <p className="mb-0">Not better self-control. Naming the cycle as a third thing in the room. “When I don't hear from you I start building a story. It isn't about your phone — I just need to know we're okay.” And from Veer: “When I'm overloaded I go quiet, and I know that reads as leaving. It isn't. Give me an hour and I'll come back.” The pattern loses most of its power the moment both people stop treating it as a character trial and start treating it as a loop they're caught in together.</p>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* UNSAID */}
              <section id="unsaid" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  The unsaid 💌
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
                  Things our readers have never said out loud
                </h2>
                <p className="text-sm text-[#5F6A54] mb-6">
                  Shared anonymously with the Saarzya community. Printed as received, minus anything that could identify someone.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">I stayed six months longer than I wanted to because leaving felt like admitting that all the time before it was wasted. It wasn't love by then. It was accounting.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">27, Delhi</span>
                  </div>

                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">My parents never fought in front of us and never touched each other either. I grew up thinking that was peace. Now I can't tell the difference between calm and distance.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">31, Kochi</span>
                  </div>

                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">I am very good at being needed. I have no idea how to be wanted. If someone stops asking me for things, I assume I've expired.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">23, Lucknow</span>
                  </div>

                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">She texts me every day and I still check, twice a day, whether she has blocked me. Nothing has ever happened to justify it. I just don't believe good things stay.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">29, Mumbai</span>
                  </div>

                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">When my grandmother died I didn't cry. I organised everything. Four years later I cried in a stranger's car because the air freshener smelled like her almirah.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">34, Prayagraj</span>
                  </div>

                  <div className="bg-[#F6EFE6] border border-[#38452F]/15 rounded-sm p-5 sm:p-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed mb-3 text-[#38452F]">I left first. Not because I stopped loving him. Because I could survive being the one who ended it, and I wasn't sure I could survive the other version.</p>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#8E6B81] font-semibold">26, Bengaluru</span>
                  </div>
                </div>

                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 my-8">
                  <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Say the unsaid</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">Something you've never told anyone about how you love, leave, or stay? Send it to us. We publish anonymously, we never print names, and we remove anything that could identify you or anyone else.</p>
                  <a href="mailto:Saarzya@gmail.com?subject=The%20Unsaid%20%3A%20Issue%2001&body=Age%20and%20city%20(optional)%3A%0A%0AWhat%20I've%20never%20said%20out%20loud%3A%0A" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] no-underline hover:underline">
                    Saarzya@gmail.com
                  </a>
                </div>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* MYTH VS FACT */}
              <section id="myth" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  Myth vs fact
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Six things we get wrong about attachment
                </h2>

                <div className="border-t border-[#38452F]/15 divide-y divide-[#38452F]/15">
                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      Your attachment style is fixed: you either got it right in childhood or you didn't.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Attachment shows moderate stability, not permanence. Styles shift with significant relational experience: a steady partnership, parenthood, loss, therapy. A substantial minority of people show measurable change across just a few years.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      Anxious attachment means you love more. Avoidant means you love less.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Both are strategies for the same fear. Avoidant individuals show physiological stress during separation even while reporting they're unaffected. The feeling is there; the expression was suppressed because expressing it once cost too much.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      Secure attachment means never feeling insecure.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Security isn't the absence of distress — it's having a reliable route back from it. Secure people get jealous, hurt and scared. What distinguishes them is that they can say so and expect the relationship to hold.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      Needing someone is weakness. Healthy adults are independent.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Research on the dependency paradox finds the opposite: people who can rely on a partner when distressed tend to function more autonomously, not less. A dependable base is what makes exploring possible — true at one, still true at forty.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      Intense chemistry means you've found the right person.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Intensity often tracks unpredictability. Warmth that arrives at random intervals is a powerful driver of preoccupation. Sometimes the pull isn't recognition of a soulmate but recognition of a familiar uncertainty.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#5F6A54] mb-0 before:content-['Myth'] before:block before:font-['Jost',sans-serif] before:not-italic before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E6B81] before:mb-1">
                      This is all your mother's fault.
                    </p>
                    <p className="text-sm leading-relaxed mt-3 mb-0 text-[#38452F] before:content-['Fact'] before:block before:text-[10px] before:tracking-[0.28em] before:uppercase before:text-[#8E9D7B] before:mb-1">
                      Attachment forms across a network of caregivers and is shaped by temperament, circumstance, migration, illness, money and later relationships. Most parents were working with what had been modelled for them. Understanding where a pattern came from is useful; assigning blame rarely is.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* ASK SAARZYA */}
              <section id="ask" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  Ask Saarzya
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Your questions, answered
                </h2>

                <div className="space-y-6 divide-y divide-[#38452F]/15">
                  <div className="pt-2">
                    <p className="font-['Cormorant_Garamond',serif] italic text-xl leading-snug text-[#38452F] mb-3">
                      I know my relationship isn't good for me. I've known for a year. Why can't I leave?
                      <span className="block not-italic font-['Jost',sans-serif] text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-2">Reader, 25</span>
                    </p>
                    <p className="mb-3">Because knowing and being able to act on knowing run on different systems. Your reasoning can conclude that this is bad for you while your attachment system continues to register that person as your safety. When the same person is both the source of the injury and the place you go for comfort, leaving means walking away from your own regulation, which the body reads as danger, not liberation.</p>
                    <p className="mb-0">It's also why leaving is rarely one decision. It's usually a slow assembly of other safe places: a friend who knows the whole story, a routine that doesn't involve them, a therapist, a plan. People don't leave when they finally understand. They leave when they have somewhere to land.</p>
                  </div>

                  <div className="pt-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-xl leading-snug text-[#38452F] mb-3">
                      I get very attached very fast, even to friends. Is something wrong with me?
                      <span className="block not-italic font-['Jost',sans-serif] text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-2">Reader, 21</span>
                    </p>
                    <p className="mb-3">Nothing is wrong with you. Fast attachment usually means your system is highly sensitive to signs of availability: someone is warm to you and the whole apparatus comes online at once. It's common in people who didn't get consistent attention early and learned to grab it when it appeared.</p>
                    <p className="mb-0">What helps isn't forcing yourself to care less. It's slowing the pace at which you hand over your sense of safety. Let the relationship earn the weight you're already ready to give it: watch how they behave when you're inconvenient, when you disagree, when you need something. Trust built on evidence takes longer and breaks less.</p>
                  </div>

                  <div className="pt-6">
                    <p className="font-['Cormorant_Garamond',serif] italic text-xl leading-snug text-[#38452F] mb-3">
                      My partner says I shut down during arguments. I don't do it on purpose: I go blank. How do I stop?
                      <span className="block not-italic font-['Jost',sans-serif] text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-2">Reader, 30</span>
                    </p>
                    <p className="mb-3">That sounds like flooding: arousal gets high enough that the thinking parts of the brain become hard to reach. It isn't a choice, and it isn't stonewalling in the sense of punishment. It's a shutdown.</p>
                    <p className="mb-0">The evidence-based move is to agree on a pause before you need one. Not walking out, that repeats abandonment for your partner, but a named, time-limited break: “I'm flooded, I need twenty minutes, I'll come back at 9.30 and we'll finish this.” Then actually return at 9.30. The returning is the part that heals it. If this has been running for years, couples work, particularly EFT, is designed almost exactly for it.</p>
                  </div>
                </div>

                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 my-8">
                  <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Ask us anything</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">Send your question and we'll answer one in the next Guftagu. Published anonymously, answered in general terms — never as individual diagnosis or therapy.</p>
                  <a href="mailto:Saarzya@gmail.com?subject=Ask%20Saarzya&body=My%20question%3A%0A%0AAge%20(optional)%3A%0A" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] no-underline hover:underline">
                    Saarzya@gmail.com
                  </a>
                </div>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* TRY THIS - JOURNAL */}
              <section id="try" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  Try this 🌱
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-2">
                  The attachment map
                </h2>
                <p className="text-sm text-[#5F6A54] mb-6">
                  Fifteen minutes, one honest page. Do it when you're calm — not mid-argument.
                </p>

                <ol className="space-y-5 list-none p-0 counter-reset-s my-6">
                  <li className="relative pl-12">
                    <span className="absolute left-0 -top-1 w-8 text-center font-['Cormorant_Garamond',serif] text-2xl text-[#8E6B81] border-b border-[#C9A9BA]">1</span>
                    <b className="font-normal font-['Cormorant_Garamond',serif] text-xl block text-[#38452F]">Pick one moment, not one relationship</b>
                    <span className="text-sm text-[#5F6A54]">Choose a single recent moment when the ground shifted with someone — an unanswered message, a tone you didn't like, a plan that changed. Specific beats general.</span>
                  </li>
                  <li className="relative pl-12">
                    <span className="absolute left-0 -top-1 w-8 text-center font-['Cormorant_Garamond',serif] text-2xl text-[#8E6B81] border-b border-[#C9A9BA]">2</span>
                    <b className="font-normal font-['Cormorant_Garamond',serif] text-xl block text-[#38452F]">Track the sequence</b>
                    <span className="text-sm text-[#5F6A54]">Write it as a chain: what happened → what I felt in my body → what I told myself it meant → what I did next. Most people can name the first and last and skip the two in the middle. Those two are the whole map.</span>
                  </li>
                  <li className="relative pl-12">
                    <span className="absolute left-0 -top-1 w-8 text-center font-['Cormorant_Garamond',serif] text-2xl text-[#8E6B81] border-b border-[#C9A9BA]">3</span>
                    <b className="font-normal font-['Cormorant_Garamond',serif] text-xl block text-[#38452F]">Find the old sentence</b>
                    <span className="text-sm text-[#5F6A54]">Look at what you told yourself it meant — “they're getting tired of me”, “I'm too much”, “I have to handle this alone”. How old is that sentence? Whose voice said it first? You're not hunting for a memory, only a recognition.</span>
                  </li>
                  <li className="relative pl-12">
                    <span className="absolute left-0 -top-1 w-8 text-center font-['Cormorant_Garamond',serif] text-2xl text-[#8E6B81] border-b border-[#C9A9BA]">4</span>
                    <b className="font-normal font-['Cormorant_Garamond',serif] text-xl block text-[#38452F]">Name the protection</b>
                    <span className="text-sm text-[#5F6A54]">What did your reaction protect you from? Withdrawing protects from rejection. Over-explaining protects from being misunderstood. Leaving first protects from being left. Write it down with respect — it worked once.</span>
                  </li>
                  <li className="relative pl-12">
                    <span className="absolute left-0 -top-1 w-8 text-center font-['Cormorant_Garamond',serif] text-2xl text-[#8E6B81] border-b border-[#C9A9BA]">5</span>
                    <b className="font-normal font-['Cormorant_Garamond',serif] text-xl block text-[#38452F]">Ask the present-day question</b>
                    <span className="text-sm text-[#5F6A54]">“Is that still true here, with this person, today?” Sometimes the answer is no, and something loosens. Sometimes it's yes — and that's important information about the relationship rather than about you.</span>
                  </li>
                </ol>

                <div className="bg-white border border-[#38452F]/15 rounded-sm p-6 shadow-xs mt-6">
                  <label htmlFor="j1" className="block text-[11px] tracking-[0.16em] uppercase text-[#5F6A54] mb-2 font-semibold">
                    Your page — saved only in this browser, on this device
                  </label>
                  <textarea
                    id="j1"
                    value={journalText}
                    onChange={handleJournalChange}
                    placeholder="What happened → what I felt → what I told myself it meant → what I did next…"
                    className="w-full min-h-[140px] resize-y bg-[#FAF2EA] text-[#38452F] border border-[#38452F]/15 rounded-sm p-4 font-['Cormorant_Garamond',serif] text-xl leading-relaxed outline-none focus:border-[#8E9D7B]"
                  />
                  <div className="flex flex-wrap gap-3 justify-between items-center mt-3">
                    <span className="text-xs text-[#8E9D7B] font-medium">{saveStatus}</span>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={handleClearJournal}
                        className="bg-none border border-[#38452F]/15 rounded-xs text-[#5F6A54] text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 hover:border-[#8E6B81] hover:text-[#8E6B81] transition cursor-pointer"
                      >
                        Clear page
                      </button>
                      <a
                        href={mailtoJournalUrl}
                        className="bg-[#8E6B81] border border-[#8E6B81] rounded-xs text-[#FBF5F8] text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 hover:opacity-90 transition no-underline cursor-pointer"
                      >
                        Mail us your answers
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-[#5F6A54] mt-3.5 mb-0">
                    Nothing is sent anywhere unless you choose to mail it. On a shared device, clear the page when you're done.
                  </p>
                </div>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* PSYCHOLOGY CORNER */}
              <section id="corner" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  The psychology corner
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  Co-regulation
                </h2>
                <p className="mb-5">A baby cannot calm itself. Its nervous system has the alarm installed but not yet the brakes. So it borrows: it's picked up, and the adult's slower heartbeat, steady breathing and low voice pull the baby's system down with it. That borrowing is co-regulation: one nervous system settling another.</p>
                <p className="mb-5">We never fully outgrow it. An adult who's had a terrible day and sits beside a calm friend will, measurably, settle faster than the same adult alone in a room. Which is why advice like “you shouldn't need anyone to feel okay” is biologically confused. Self-regulation is real, and it's largely built out of thousands of earlier experiences of being co-regulated. You internalise the calm you were lent.</p>
                <p className="mb-5">Two things follow. If you find it hard to soothe yourself, it may be less about willpower than about how much soothing was available to borrow. And co-regulation runs both ways: your agitation can raise someone else's, which is why one person's panic spreads through a house, and why a steady presence in a crisis is doing something genuinely physiological, not just being nice.</p>
                <p className="mb-0"><span className="font-['Cormorant_Garamond',serif] text-xl">In one line:</span> before you can hold yourself, someone has to have held you — and it is never too late to be held.</p>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* VOICES */}
              <section id="voices" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  Voices
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-6">
                  From our community
                </h2>

                <div className="font-['Cormorant_Garamond',serif] italic text-xl leading-loose whitespace-pre-line text-[#38452F] mb-2">
{`Inheritance

My mother learned love as labour —
hot rotis, cold hands, no sentence
beginning with I.

I learned it as vigilance:
the weather-report of a face at the door,
the grammar of a sigh.

Now someone asks me what I need
and I answer like a witness
under oath — carefully, in case
it is used against me.

I am trying. I am unlearning
the arithmetic of deserving.
Yesterday I said stay
and did not apologise after.`}
                </div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mb-8 font-semibold">— Anonymous, 22, M.A. Psychology</p>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-2">A student reflection</h3>
                <p className="mb-2">“I used to think I was bad at relationships. Then I noticed I'm the same in every one of them: I get close, I get scared, I get busy. Same three steps, different person. That was depressing for about a week and then it was actually a relief — because a pattern is something you can work with. A curse isn't.”</p>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mb-8 font-semibold">— Third-year undergraduate, Prayagraj</p>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-2">Untitled, ink on paper</h3>
                <div className="max-w-[320px] mx-auto my-4">
                  <svg viewBox="0 0 300 200" className="w-full" role="img" aria-label="Line drawn figures">
                    <path d="M60 180c0-52 8-84 26-102 14-14 30-18 30-32 0-10-8-16-8-26 0-12 10-20 22-20" stroke="#8E6B81" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                    <path d="M240 180c0-52-8-84-26-102-14-14-30-18-30-32 0-10 8-16 8-26 0-12-10-20-22-20" stroke="#8E9D7B" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                    <path d="M150 168c-22-16-40-30-40-46 0-12 9-20 20-20 8 0 15 5 20 12 5-7 12-12 20-12 11 0 20 8 20 20 0 16-18 30-40 46z" stroke="#A88F6C" strokeWidth="1.2" fill="none"/>
                    <circle cx="150" cy="16" r="2" fill="#C9A9BA"/>
                  </svg>
                </div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] text-center mb-8 font-semibold">Submitted by a reader, 19</p>

                <div className="bg-[#F6EFE6] border border-[#C9A9BA] rounded-sm p-6 my-8">
                  <h4 className="font-['Cormorant_Garamond',serif] font-normal text-2xl text-[#38452F] mb-2">Send us your voice</h4>
                  <p className="text-sm text-[#5F6A54] mb-4">Poetry, artwork, a paragraph of your own thinking, a student perspective: Guftagu is built out of what readers send. Attach your work or paste it into the mail.</p>
                  <a href="mailto:Saarzya@gmail.com?subject=Voices%20%3A%20Submission&body=Name%20or%20%22anonymous%22%3A%0AAge%2Fcity%20(optional)%3A%0A%0AMy%20submission%3A%0A" className="font-['Cormorant_Garamond',serif] text-xl text-[#8E6B81] border-b border-[#C9A9BA] no-underline hover:underline">
                    Saarzya@gmail.com
                  </a>
                </div>
              </section>

              <hr className="my-11 border-0 flex items-center justify-center gap-3.5 before:content-[''] before:h-[1px] before:w-16 before:bg-[#38452F]/15 after:content-[''] after:h-[1px] after:w-16 after:bg-[#38452F]/15" />

              {/* HELP SECTION */}
              <section id="help" className="py-9">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-1 flex items-center gap-2">
                  When to seek help
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-[#38452F] mb-4">
                  Signs this needs more than a blog post
                </h2>
                <p className="mb-4">Relationship difficulty is ordinary. Some of it, though, is better worked through with a trained person than alone or with advice from the internet. Consider reaching out to a psychologist or counsellor if several of these sound familiar:</p>

                <ul className="space-y-0 list-none p-0 my-4 divide-y divide-[#38452F]/15">
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    The same painful cycle has repeated across relationships and insight alone isn't shifting it.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    Fear of abandonment is affecting your sleep, appetite, work or studies for weeks at a time.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    You can't function when a relationship is uncertain — or you can't feel anything at all.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    You're staying somewhere you feel unsafe, controlled, financially trapped, or frightened of the other person's reaction.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    You're using alcohol, substances, food restriction or self-harm to manage relational distress.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    A loss — a breakup, a death, an estrangement — hasn't eased at all over many months.
                  </li>
                  <li className="relative pl-7 py-2.5 text-[0.97rem] before:content-[''] before:absolute before:left-0.5 before:top-[19px] before:w-2 before:h-2 before:rounded-full before:border before:border-[#8E6B81]">
                    You're having thoughts of ending your life, or feel people would be better off without you.
                  </li>
                </ul>

                <p className="mt-4 mb-6">Reaching out early isn't an overreaction. Therapy for attachment-related difficulty is well established: individual work, and for couples, Emotionally Focused Therapy has a strong evidence base.</p>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mt-6 mb-4">Free helplines in India</h3>
                <div className="space-y-3">
                  <div className="flex justify-between gap-4 items-baseline bg-white border border-[#38452F]/15 rounded-sm p-3.5 sm:px-4">
                    <div>
                      <b className="font-normal font-['Cormorant_Garamond',serif] text-lg block text-[#38452F]">Tele-MANAS</b>
                      <small className="block text-xs text-[#5F6A54]">Government of India · 24×7 · multiple languages</small>
                    </div>
                    <span className="text-xs font-semibold text-[#8E6B81] whitespace-nowrap">14416</span>
                  </div>

                  <div className="flex justify-between gap-4 items-baseline bg-white border border-[#38452F]/15 rounded-sm p-3.5 sm:px-4">
                    <div>
                      <b className="font-normal font-['Cormorant_Garamond',serif] text-lg block text-[#38452F]">KIRAN</b>
                      <small className="block text-xs text-[#5F6A54]">Ministry of Social Justice &amp; Empowerment · 24×7</small>
                    </div>
                    <span className="text-xs font-semibold text-[#8E6B81] whitespace-nowrap">1800-599-0019</span>
                  </div>

                  <div className="flex justify-between gap-4 items-baseline bg-white border border-[#38452F]/15 rounded-sm p-3.5 sm:px-4">
                    <div>
                      <b className="font-normal font-['Cormorant_Garamond',serif] text-lg block text-[#38452F]">Vandrevala Foundation</b>
                      <small className="block text-xs text-[#5F6A54]">24×7 counselling · call or WhatsApp</small>
                    </div>
                    <span className="text-xs font-semibold text-[#8E6B81] whitespace-nowrap">9999 666 555</span>
                  </div>

                  <div className="flex justify-between gap-4 items-baseline bg-white border border-[#38452F]/15 rounded-sm p-3.5 sm:px-4">
                    <div>
                      <b className="font-normal font-['Cormorant_Garamond',serif] text-lg block text-[#38452F]">iCall</b>
                      <small className="block text-xs text-[#5F6A54]">TISS · counselling by trained professionals</small>
                    </div>
                    <span className="text-xs font-semibold text-[#8E6B81] whitespace-nowrap">9152 987 821</span>
                  </div>

                  <div className="flex justify-between gap-4 items-baseline bg-white border border-[#38452F]/15 rounded-sm p-3.5 sm:px-4">
                    <div>
                      <b className="font-normal font-['Cormorant_Garamond',serif] text-lg block text-[#38452F]">AASRA</b>
                      <small className="block text-xs text-[#5F6A54]">24×7 crisis support</small>
                    </div>
                    <span className="text-xs font-semibold text-[#8E6B81] whitespace-nowrap">9820 466 726</span>
                  </div>
                </div>

                <p className="text-xs text-[#5F6A54] mt-5 mb-0">
                  If you or someone else is in immediate danger, contact local emergency services or go to the nearest hospital. Helpline numbers change occasionally — worth confirming the current one before you need it.
                </p>
              </section>

            </article>
          </div>
        </div>

        {/* ---------- LAST PAGE ---------- */}
        <section id="last" className="bg-[#F3E9DF] border-t border-[#38452F]/15 text-center py-20 px-6 mt-10">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E9D7B] mb-6 flex justify-center">The last page</div>
          <q className="quotes-none font-['Cormorant_Garamond',serif] italic text-3xl sm:text-4xl leading-snug block max-w-[20ch] mx-auto text-[#38452F]">
            We are only as needy as our unmet needs.
          </q>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#A88F6C] mt-4 font-semibold">John Bowlby</p>
          <div className="flex gap-2.5 justify-center mt-8">
            <i className="w-1.5 h-1.5 rounded-full bg-[#C9A9BA]" />
            <i className="w-1.5 h-1.5 rounded-full bg-[#A88F6C]" />
            <i className="w-1.5 h-1.5 rounded-full bg-[#8E9D7B]" />
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-[#38452F]/15 py-12 px-6 text-center text-[#5F6A54] text-xs">
        <p className="font-['Cormorant_Garamond',serif] text-2xl text-[#38452F] mb-1">Guftagu by Saarzya</p>
        <p className="text-xs text-[#5F6A54]">Issue 01 · Why do we attach?</p>
        <p><a href="mailto:Saarzya@gmail.com" className="text-[#8E6B81] no-underline">Saarzya@gmail.com</a></p>
        <p className="max-w-[54ch] mx-auto mt-5 leading-relaxed text-[11px]">
          Guftagu is written for education and reflection. It is not therapy, diagnosis, or individual advice.
        </p>
      </footer>
    </div>
  );
}

export default GuftaguArticlePage;
