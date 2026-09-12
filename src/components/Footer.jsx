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
                href="https://chat.whatsapp.com/Ll7GsKRozMA8TMlDD8lQyF"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Community"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
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
