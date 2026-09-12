import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-moss/15 bg-white/70 py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="m-0 font-heading text-3xl text-moss">Saarzya</h3>
            <p className="mb-0 mt-3 max-w-md text-sm leading-7 text-slate/80">
              Psychology, Assessment and Wellness support for individuals seeking understanding,
              healing, and meaningful growth.
            </p>
          </div>

          <div className="max-w-sm text-sm leading-7 text-slate/80">
            <p className="m-0 font-semibold text-slate">Disclaimer</p>
            <p className="m-0 mt-2">
              This platform is not intended for emergency crisis support. If you are in immediate danger,
              contact local emergency services.
            </p>
          </div>

          <div>
            <p className="m-0 text-sm font-semibold text-slate">Stay connected</p>
            <form className="mt-3 flex w-full max-w-sm items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-subscription" className="sr-only">Email address</label>
              <input
                id="email-subscription"
                type="email"
                placeholder="Your email"
                className="h-11 w-full rounded-full border border-moss/20 bg-white px-4 text-sm outline-none placeholder:text-slate/50 focus:border-moss"
              />
              <button className="rounded-full bg-moss px-4 py-2.5 text-sm font-semibold text-white" type="submit">
                Join
              </button>
            </form>

            <div className="mt-4 flex items-center gap-2">
              <a
                className="rounded-full border border-moss/20 p-2 text-moss transition hover:border-moss hover:bg-moss/10"
                href="https://www.instagram.com/saarzya?igsi=MXB6eThvdGtkNXZlaA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                className="rounded-full border border-moss/20 p-2 text-moss transition hover:border-moss hover:bg-moss/10"
                href="https://www.linkedin.com/in/saarzya-undefined-735324431?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                className="rounded-full border border-moss/20 p-2 text-moss transition hover:border-moss hover:bg-moss/10"
                href="https://www.facebook.com/share/1JAAnU7oVV/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                className="rounded-full border border-moss/20 p-2 text-moss transition hover:border-moss hover:bg-moss/10"
                href="https://x.com/Saarzya"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                className="rounded-full border border-moss/20 p-2 text-moss transition hover:border-moss hover:bg-moss/10"
                href="mailto:hello@saarzya.com"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-moss/15 pt-5 text-xs uppercase tracking-[0.12em] text-slate/60">
          © {new Date().getFullYear()} Saarzya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
