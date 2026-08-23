import Image from "next/image";
import Link from "next/link";
import useCopy from "@/hooks/useCopy";
import { CONTACT_EMAIL, FACEBOOK_URL, YOUTUBE_URL } from "@/data/site";

export default function SiteFooter() {
  const { copy } = useCopy();

  const links = [
    {
      href: "/history",
      label: copy.nav.history,
      title: copy.history.metaTitle,
      internal: true,
    },
    {
      href: YOUTUBE_URL,
      label: "YouTube",
      title: copy.footer.onNetwork("YouTube"),
      external: true,
    },
    {
      href: FACEBOOK_URL,
      label: "Facebook",
      title: copy.footer.onNetwork("Facebook"),
      external: true,
    },
    {
      href: `mailto:${CONTACT_EMAIL}`,
      label: copy.footer.contact,
      title: copy.footer.contactAria,
      external: false,
    },
  ];

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
          {links.map((link) =>
            link.internal ? (
              <Link key={link.label} href={link.href} aria-label={link.title}>
                {link.label}
              </Link>
            ) : (
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
            )
          )}
        </div>
        <span className="hds-copy">{copy.footer.copyright}</span>
      </div>
    </footer>
  );
}
