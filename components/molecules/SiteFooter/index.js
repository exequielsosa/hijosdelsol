import Image from "next/image";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
} from "@/data/site";

const LINKS = [
  {
    href: YOUTUBE_URL,
    label: "YouTube",
    title: "HIJOS DEL SOL on YouTube",
    external: true,
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    title: "HIJOS DEL SOL on Instagram",
    external: true,
  },
  {
    href: FACEBOOK_URL,
    label: "Facebook",
    title: "HIJOS DEL SOL on Facebook",
    external: true,
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    label: "Contact",
    title: "Email HIJOS DEL SOL",
    external: false,
  },
];

export default function SiteFooter() {
  return (
    <footer className="hds-footer">
      <div className="hds-footer-row" data-reveal>
        <Image
          src="/logo-white.png"
          alt="HIJOS DEL SOL"
          width={1771}
          height={249}
          sizes="250px"
          className="hds-footer-logo"
        />
        <div className="hds-footer-links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={link.title}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="hds-copy">© 1998–2026 Hijos del Sol</span>
      </div>
    </footer>
  );
}
