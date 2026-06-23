import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureIcon } from "@/components/FeatureIcon";
import { SITE_NAME, SITE_URL, homeSectionHref } from "@/lib/site";
import {
  programs,
  features,
  coreFeatures,
  quickPrograms,
  plans,
  productProblems,
  targetUsers,
} from "@/lib/content";
import heroBg from "@/assets/hero-bg.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: `Product — ${SITE_NAME} AIOps Platform` },
      { name: "description", content: "Explore Infra-PilotAI's autonomous infrastructure intelligence engine — predictive analytics, Kubernetes optimization, GPU workload management, and automated remediation." },
      { property: "og:title", content: `Product — ${SITE_NAME}` },
      { property: "og:description", content: "End-to-end AIOps platform for monitoring, predicting, and automating enterprise cloud and infrastructure operations." },
      { property: "og:url", content: `${SITE_URL}/product` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/product` }],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <ProductHero />
      <ProductOverview />
      <ProductModules />
      <ProductArchitecture />
      <ProductWorkflow />
      <ProductAudience />
      <ProductPricing />
      <ProductCta />
      <SiteFooter />
    </div>
  );
}

function ProductHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="font-display text-sm tracking-[0.3em] text-primary">PRODUCT OVERVIEW</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
          AUTONOMOUS<br />
          <span className="text-primary">INFRASTRUCTURE</span> INTELLIGENCE ENGINE
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {SITE_NAME} is an intelligent AIOps platform providing end-to-end visibility, predictive analytics, and automation for enterprise cloud and infrastructure systems, acting as an autonomous operations layer for your entire IT ecosystem.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={homeSectionHref("pricing")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            View Pricing <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href={homeSectionHref("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              headingId="product-challenge"
              eyebrow="THE PROBLEM"
              title="WHY TRADITIONAL OPS FAILS"
              description="Modern infrastructure environments are complex, distributed, and highly dynamic. Organizations struggle with downtime, inefficient resource allocation, and reactive incident management."
              align="left"
              descriptionClassName="mt-4 max-w-lg text-muted-foreground"
            />
            <ul className="mt-8 space-y-3">
              {productProblems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive">
                    <span className="text-xs font-bold">!</span>
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              headingId="product-solution"
              eyebrow="THE SOLUTION"
              title={`WHAT ${SITE_NAME.toUpperCase()} DELIVERS`}
              description="Predictive infrastructure analytics, automated incident response, GPU optimization, Kubernetes monitoring, and self-healing infrastructure capabilities — in one unified platform."
              align="left"
              descriptionClassName="mt-4 max-w-lg text-muted-foreground"
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-card/50 p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center">
                    <FeatureIcon src={f.iconUrl} className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-lg tracking-wider">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductModules() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="product-modules"
          eyebrow="PLATFORM MODULES"
          title="Core Product Capabilities"
          description="Six integrated modules that transform traditional infrastructure management into intelligent, autonomous operations."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60 hover:shadow-glow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={768} height={576} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wider">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductArchitecture() {
  return (
    <section className="bg-ember py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="product-architecture"
          eyebrow="PLATFORM ARCHITECTURE"
          title="Scalable Intelligent Infrastructure"
          description="A unified intelligent architecture built for prediction, automation, and resilience across enterprise-scale environments."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((f) => (
            <li key={f} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductWorkflow() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="product-workflow"
          eyebrow="OPERATIONS WORKFLOW"
          title="How the Platform Works"
          description="Five integrated stages from telemetry ingestion to autonomous remediation."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {quickPrograms.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center">
                <FeatureIcon src={p.iconUrl} className="h-12 w-12" />
              </div>
              <p className="font-display text-xs tracking-widest text-primary">STEP {i + 1}</p>
              <h3 className="mt-2 font-display text-lg tracking-wider">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductAudience() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="product-audience"
          eyebrow="BUILT FOR"
          title="Target Users"
          description="Designed for teams running mission-critical infrastructure at enterprise scale."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {targetUsers.map((user) => (
            <span
              key={user}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {user}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPricing() {
  return (
    <section className="bg-ember py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="product-pricing"
          eyebrow="SUBSCRIPTION & LICENSING"
          title="Choose Your Plan"
          description="Subscription-based SaaS with usage-based scaling, enterprise AIOps licensing, and premium GPU optimization modules."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 transition ${
                p.featured
                  ? "scale-105 border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="font-display text-2xl tracking-wider">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                {"customPrice" in p && p.customPrice ? (
                  <span className="font-display text-4xl sm:text-5xl">Custom Pricing</span>
                ) : (
                  <>
                    <span className="font-display text-6xl">${p.price}</span>
                    <span className={p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>/month</span>
                  </>
                )}
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${p.featured ? "" : "text-primary"}`} /> {f}
                  </li>
                ))}
              </ul>
              {"paymentUrl" in p && p.paymentUrl ? (
                <a
                  href={p.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold tracking-widest transition ${
                    p.featured
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  SUBSCRIBE MONTHLY
                </a>
              ) : (
                <a
                  href={homeSectionHref("contact")}
                  className={`mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold tracking-widest transition ${
                    p.featured
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  GET STARTED
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCta() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader
          headingId="product-cta"
          eyebrow="READY TO DEPLOY?"
          title={<>START WITH <span className="text-primary">{SITE_NAME.toUpperCase()}</span></>}
          description="Deploy the autonomous infrastructure intelligence engine trusted by cloud engineering, DevOps, and SRE teams worldwide."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={homeSectionHref("contact")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Book a Demo <ChevronRight className="h-4 w-4" />
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
