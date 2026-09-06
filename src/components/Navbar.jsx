import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Founders", href: "#founders" },
  { label: "Services", href: "#services" },
  { label: "Magazines & Blogs", href: "#magazines" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoFallback = (event) => {
    const attemptedSrc = event.currentTarget.getAttribute("src");

    if (attemptedSrc === "/assets/logo.jpg") {
      event.currentTarget.src = "/assets/logo.png";
      return;
    }

    event.currentTarget.src = "/assets/logo.svg";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-cream/80 backdrop-blur-xl">
      <nav className="section-shell flex h-[5.5rem] items-center justify-between py-2" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-4">
          <img
            src="/assets/logo.jpg"
            alt="Saarzya logo"
            className="h-14 w-14 rounded-2xl border border-[#d8cfc2] bg-[#f7f1e7] p-1 object-contain shadow-[0_10px_28px_-18px_rgba(45,55,72,0.5)] sm:h-16 sm:w-16"
            onError={handleLogoFallback}
          />
          <div className="hidden sm:block">
            <p className="m-0 text-[10px] font-medium uppercase tracking-[0.16em] text-slate/65">
              Psychology • Counselling • Wellness
            </p>
          </div>
          <span className="sr-only">Saarzya</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate/85 transition hover:text-moss"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/20 text-slate md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex h-full w-full flex-col overflow-y-auto bg-[#f9f6f0] p-6 shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-moss/20 pb-5">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.jpg"
                  alt="Saarzya logo"
                  className="h-12 w-12 rounded-xl border border-moss/20 bg-white p-0.5 object-contain shadow-sm"
                />
                <div>
                  <h2 className="m-0 font-heading text-2xl text-moss">Saarzya</h2>
                  <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate/60">
                    Psychology • Counselling • Wellness
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-moss/25 bg-white text-slate shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <div className="my-auto py-8">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-moss/15 bg-white px-6 py-4 text-lg font-bold text-slate shadow-sm transition hover:border-moss hover:bg-moss hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-moss transition group-hover:text-white">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-moss/20 pt-6 text-center text-xs font-semibold uppercase tracking-widest text-slate/60">
              © {new Date().getFullYear()} Saarzya. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
