import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Magazines & Blogs", href: "#magazines" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLogoFallback = (event) => {
    const attemptedSrc = event.currentTarget.getAttribute("src");

    if (attemptedSrc === "/assets/logo.jpg") {
      event.currentTarget.src = "/assets/logo.png";
      return;
    }

    event.currentTarget.src = "/assets/logo.svg";
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/50 bg-cream/80 backdrop-blur-xl">
        <nav className="section-shell flex h-[5.5rem] items-center justify-between py-2" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3 sm:gap-4">
            <img
              src="/assets/logo.jpg"
              alt="Saarzya logo"
              className="h-12 w-12 rounded-2xl border border-[#d8cfc2] bg-[#f7f1e7] p-1 object-contain shadow-[0_10px_28px_-18px_rgba(45,55,72,0.5)] sm:h-16 sm:w-16"
              onError={handleLogoFallback}
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-moss sm:text-2xl">
                Saarzya
              </span>
              <p className="m-0 text-[9px] font-medium uppercase tracking-[0.14em] text-slate/70 sm:text-[10px] sm:tracking-[0.16em]">
                Psychology • Counselling • Wellness
              </p>
            </div>
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/20 bg-white/60 text-slate transition active:scale-95 md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Render Mobile Menu Overlay at document.body via Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu-portal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-0 z-[999999] flex h-screen w-screen flex-col overflow-y-auto bg-[#F7F4EE] px-6 py-6 text-slate shadow-2xl md:hidden"
              >
                {/* Top Bar inside Overlay */}
                <div className="flex items-center justify-between border-b border-moss/15 pb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/logo.jpg"
                      alt="Saarzya logo"
                      className="h-11 w-11 rounded-xl border border-moss/20 bg-white p-0.5 object-contain"
                      onError={handleLogoFallback}
                    />
                    <div>
                      <h2 className="m-0 font-serif text-2xl font-bold text-moss">Saarzya</h2>
                      <p className="m-0 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate/60">
                        Psychology • Counselling • Wellness
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-moss/25 bg-white text-slate shadow-md transition active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Menu Options */}
                <div className="flex-1 py-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate/50">
                    Navigation Menu
                  </p>
                  <ul className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="group flex items-center justify-between rounded-2xl border border-moss/15 bg-white px-6 py-4 text-lg font-bold text-slate shadow-sm transition hover:border-moss hover:bg-moss hover:text-white active:scale-[0.98]"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-5 w-5 text-moss transition-transform group-hover:translate-x-1 group-hover:text-white" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer section of overlay */}
                <div className="mt-auto border-t border-moss/15 pt-6 text-center">
                  <a
                    href="#contact"
                    className="mb-4 inline-flex w-full items-center justify-center rounded-full bg-moss px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Consultation
                  </a>
                  <p className="m-0 text-xs font-medium text-slate/50">
                    © {new Date().getFullYear()} Saarzya. All rights reserved.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default Navbar;

