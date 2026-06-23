import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SUPPORT_EMAIL, navLinks, homeSectionHref, SITE_LOCATION_SHORT, SITE_PHONE } from "@/lib/site";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHome) return;

    const updateActiveSection = () => {
      const offset = 100;
      let current = "home";
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="hidden border-b border-border/60 bg-surface/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> {SITE_LOCATION_SHORT}</span>
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> {SITE_PHONE}</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> {SUPPORT_EMAIL}</span>
          </div>
          <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" /> 24/7 Autonomous Operations</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <SiteLogo variant="nav" />
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map(({ label, id }) => {
            const isActive = isHome ? activeSection === id : false;
            return (
              <a
                key={id}
                href={homeSectionHref(id)}
                className={`relative pb-0.5 transition hover:text-primary ${
                  isActive ? "font-semibold text-primary" : "text-foreground/80"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </nav>
        <Link
          to="/product"
          className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
