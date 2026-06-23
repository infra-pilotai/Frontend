import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE_NAME, homeSectionHref, SITE_LOCATION, SITE_PHONE, COMPANY_NAME, COMPANY_FOUNDED, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { SiteLogo } from "@/components/layout/SiteLogo";

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.33 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.11 20.45H3.55V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.63 7.584H.48l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.04L6.486 3.24H4.298l13.31 17.404z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <SiteLogo variant="footer" />
          <p className="mt-4 text-sm text-muted-foreground">
            {COMPANY_NAME} — Autonomous Infrastructure Intelligence Engine. Predictive AIOps for cloud, Kubernetes, and GPU-intensive enterprise environments. Founded {COMPANY_FOUNDED}.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL.replace(/^https?:\/\//, "")}</a>
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground/60">
            <a href="#" aria-label="Facebook" className="transition hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="transition hover:text-primary"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="X (Twitter)" className="transition hover:text-primary"><XIcon className="h-5 w-5" /></a>
            <a href="#" aria-label="Pinterest" className="transition hover:text-primary"><PinterestIcon className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary"><LinkedInIcon className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg tracking-wider">EXPLORE</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/product" className="hover:text-primary">Product</Link></li>
            {["Solutions", "Pricing", "FAQ"].map(l => (
              <li key={l}><a href={homeSectionHref(l.toLowerCase())} className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg tracking-wider">CONTACT</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {SITE_LOCATION}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {SITE_PHONE}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {SUPPORT_EMAIL}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Terms and Conditions
          </Link>
          {" · "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
