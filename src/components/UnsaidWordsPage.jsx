import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { navigateTo } from "../utils/router";

function UnsaidWordsPage() {
  const tallyUrl = "https://tally.so/r/68gVyJ";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleBackToWebsite = (e) => {
    e.preventDefault();
    navigateTo("/");
  };

  return (
    <div className="min-h-screen bg-[#f7ede3] text-[#3a2e2a] font-sans selection:bg-[#cf9fa8]/30">
      {/* ---------- NAV ---------- */}
      <nav className="sticky top-0 z-50 bg-[#f7ede3]/90 backdrop-blur-md border-b border-[#e6d3c8]">
        <div className="max-w-[920px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToWebsite}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6b5c54] transition hover:text-[#8c4a5b]"
            >
              <ArrowLeft size={15} />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-[1px] bg-[#e6d3c8]" />
            <a
              href="/"
              onClick={handleBackToWebsite}
              className="font-serif text-xl font-medium text-[#3a2e2a]"
            >
              saarzya
            </a>
          </div>

          <a
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8c4a5b] hover:bg-[#7a3f4e] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Share your words</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="relative pt-20 pb-20 px-6 text-center overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(207,159,168,0.18)_0%,transparent_45%),radial-gradient(circle_at_85%_75%,rgba(161,90,99,0.14)_0%,transparent_50%)]">
        <div className="max-w-[920px] mx-auto">
          <div className="text-[11px] font-semibold tracking-[3px] text-[#6b5c54] uppercase mb-5">
            HEAR · UNDERSTAND · GROW
          </div>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl lg:text-6xl text-[#3a2e2a] leading-tight max-w-[720px] mx-auto mb-6">
            Saarzya: The <em className="italic font-serif">Unsaid</em> Words
          </h1>
          <p className="max-w-[520px] mx-auto mb-9 text-[#6b5c54] text-lg sm:text-xl italic font-serif leading-relaxed">
            There are things we carry quietly — thoughts, stories, fears, and feelings that never found the right words. This is your space to say them.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={tallyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8c4a5b] hover:bg-[#7a3f4e] text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_12px_30px_rgba(140,74,91,0.28)] transition active:scale-95"
            >
              <span>Share anonymously</span>
              <span>→</span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-[#e6d3c8] text-[#3a2e2a] hover:bg-[#f3e4dd] px-7 py-3.5 rounded-full font-bold text-sm transition"
            >
              How it works
            </a>
          </div>

          <div className="text-[#8c4a5b] text-xl mt-9 mb-1.5 flex justify-center">
            <Heart size={20} fill="#8c4a5b" className="opacity-80" />
          </div>
          <div className="text-xs tracking-wider text-[#6b5c54] font-medium">
            #TheUnsaidBySaarzya
          </div>
        </div>
      </header>

      {/* ---------- WHY SECTION ---------- */}
      <section id="why" className="py-20 px-6">
        <div className="max-w-[920px] mx-auto">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl text-center text-[#3a2e2a] max-w-[600px] mx-auto mb-1">
            A place for what you've never been able to say
          </h2>
          <div className="w-9 h-[2px] bg-[#cf9fa8] mx-auto mt-2 mb-6" />
          <p className="text-center text-[#6b5c54] max-w-[560px] mx-auto mb-12 text-base">
            No names. No judgment. Just a space to put words to things that have been sitting quietly, unspoken.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-[840px] mx-auto">
            <div className="bg-[#fdf8f2] border border-[#e6d3c8] rounded-xl p-8 text-left shadow-sm">
              <div className="font-serif italic text-[#8c4a5b] text-lg font-medium mb-3">i.</div>
              <h3 className="text-base font-bold text-[#3a2e2a] mb-2">Completely anonymous</h3>
              <p className="text-[#6b5c54] text-sm leading-relaxed">
                You never share your name, contact details, or any identifying information. What you write stays untraceable to you.
              </p>
            </div>

            <div className="bg-[#fdf8f2] border border-[#e6d3c8] rounded-xl p-8 text-left shadow-sm">
              <div className="font-serif italic text-[#8c4a5b] text-lg font-medium mb-3">ii.</div>
              <h3 className="text-base font-bold text-[#3a2e2a] mb-2">No perfect way to write it</h3>
              <p className="text-[#6b5c54] text-sm leading-relaxed">
                A sentence, a story, a letter you never sent — write as much or as little as feels right. There's no format to get right.
              </p>
            </div>

            <div className="bg-[#fdf8f2] border border-[#e6d3c8] rounded-xl p-8 text-left shadow-sm">
              <div className="font-serif italic text-[#8c4a5b] text-lg font-medium mb-3">iii.</div>
              <h3 className="text-base font-bold text-[#3a2e2a] mb-2">Support, if you want it</h3>
              <p className="text-[#6b5c54] text-sm leading-relaxed">
                Choose whether you'd like an educational or supportive response, or simply want your words to exist somewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" className="py-20 px-6 bg-[#fbf4ec] border-t border-b border-[#e6d3c8]">
        <div className="max-w-[920px] mx-auto">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl text-center text-[#3a2e2a] max-w-[600px] mx-auto mb-1">
            How it works
          </h2>
          <div className="w-9 h-[2px] bg-[#cf9fa8] mx-auto mt-2 mb-6" />
          <p className="text-center text-[#6b5c54] max-w-[560px] mx-auto mb-12 text-base">
            Four short steps. Take your time with each one.
          </p>

          <div className="max-w-[640px] mx-auto divide-y divide-[#e6d3c8]">
            <div className="flex gap-6 py-6 items-start">
              <div className="font-serif italic text-2xl text-[#cf9fa8] min-w-[38px]">01</div>
              <div>
                <h3 className="text-base font-bold text-[#3a2e2a] mb-1">Tell us what brings you here</h3>
                <p className="text-[#6b5c54] text-sm leading-relaxed">
                  Pick whichever feels closest — a stressful experience, a relationship, grief, or something you've never told anyone.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-6 items-start">
              <div className="font-serif italic text-2xl text-[#cf9fa8] min-w-[38px]">02</div>
              <div>
                <h3 className="text-base font-bold text-[#3a2e2a] mb-1">Write what you've been carrying</h3>
                <p className="text-[#6b5c54] text-sm leading-relaxed">
                  Your story, your thoughts, your feelings — in your own words, at your own pace.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-6 items-start">
              <div className="font-serif italic text-2xl text-[#cf9fa8] min-w-[38px]">03</div>
              <div>
                <h3 className="text-base font-bold text-[#3a2e2a] mb-1">Go a little deeper, if you'd like</h3>
                <p className="text-[#6b5c54] text-sm leading-relaxed">
                  What would you say to the person involved? What do you wish someone had understood?
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-6 items-start">
              <div className="font-serif italic text-2xl text-[#cf9fa8] min-w-[38px]">04</div>
              <div>
                <h3 className="text-base font-bold text-[#3a2e2a] mb-1">Decide if you want a response</h3>
                <p className="text-[#6b5c54] text-sm leading-relaxed">
                  Only wanted to express it? That's enough. Want a supportive reply or resources? You can ask for that too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROMISE / SAFETY ---------- */}
      <section id="safety" className="py-20 px-6">
        <div className="max-w-[920px] mx-auto">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl text-center text-[#3a2e2a] max-w-[600px] mx-auto mb-1">
            Our promise to you
          </h2>
          <div className="w-9 h-[2px] bg-[#cf9fa8] mx-auto mt-2 mb-8" />

          <div className="max-w-[640px] mx-auto bg-[#f3e4dd] rounded-2xl p-8 sm:p-10 shadow-sm">
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm sm:text-base text-[#3a2e2a] leading-relaxed">
                <span className="text-[#8c4a5b] font-bold">♡</span>
                <span>Every submission is reviewed for safety and moderation before anything else happens.</span>
              </li>
              <li className="flex gap-3 text-sm sm:text-base text-[#3a2e2a] leading-relaxed">
                <span className="text-[#8c4a5b] font-bold">♡</span>
                <span>This is an expression space, not a therapy or crisis service — and we're upfront about that.</span>
              </li>
              <li className="flex gap-3 text-sm sm:text-base text-[#3a2e2a] leading-relaxed">
                <span className="text-[#8c4a5b] font-bold">♡</span>
                <span>If you or someone else is in immediate danger, please contact local emergency services or a mental health professional directly.</span>
              </li>
              <li className="flex gap-3 text-sm sm:text-base text-[#3a2e2a] leading-relaxed">
                <span className="text-[#8c4a5b] font-bold">♡</span>
                <span>Your words are never used to identify you.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section id="share" className="py-24 px-6 text-center bg-[radial-gradient(circle_at_50%_0%,rgba(207,159,168,0.2)_0%,transparent_55%)]">
        <div className="max-w-[920px] mx-auto">
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#3a2e2a] max-w-[560px] mx-auto mb-9 leading-relaxed">
            “Your words matter. Even the ones you never thought anyone would hear.”
          </blockquote>
          <a
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8c4a5b] hover:bg-[#7a3f4e] text-white px-9 py-4 rounded-full font-bold text-base shadow-[0_12px_30px_rgba(140,74,91,0.28)] transition active:scale-95"
          >
            <span>Start writing</span>
            <span>→</span>
          </a>
          <div className="text-[#8c4a5b] text-xl mt-9 mb-1.5 flex justify-center">
            <Heart size={20} fill="#8c4a5b" className="opacity-80" />
          </div>
          <div className="text-xs tracking-wider text-[#6b5c54] font-medium">
            #TheUnsaidBySaarzya
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="py-10 px-6 text-center text-[#6b5c54] text-xs border-t border-[#e6d3c8]">
        <div className="font-serif text-lg font-medium text-[#3a2e2a] mb-1">saarzya</div>
        <div className="text-[10px] tracking-[2px] mb-4">HEAR · UNDERSTAND · GROW</div>
        <div className="flex justify-center gap-6 text-xs font-semibold">
          <a href="#why" className="hover:text-[#8c4a5b] transition">About</a>
          <a href="#how" className="hover:text-[#8c4a5b] transition">How it works</a>
          <a href="#safety" className="hover:text-[#8c4a5b] transition">Safety</a>
          <a href="/" onClick={handleBackToWebsite} className="hover:text-[#8c4a5b] transition">Official Website</a>
        </div>
      </footer>
    </div>
  );
}

export default UnsaidWordsPage;
