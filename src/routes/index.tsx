import { useState, useRef, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin, Phone, Mail, Check, Star,
  ChevronRight, Clock, Send, CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FeatureIcon } from "@/components/FeatureIcon";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import ReCAPTCHA from "react-google-recaptcha";
import { RecaptchaField } from "@/components/RecaptchaField";
import { verifyRecaptcha } from "@/lib/api/contact.functions";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL, SITE_LOCATION, SITE_PHONE, FORMSPREE_URL, homeSectionHref, HERO_SIDE_IMAGE_URL, WHY_SECTION_IMAGE_URL, TESTIMONIAL_IMAGE_URLS } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { programs, features, coreFeatures, architectureImages, quickPrograms, plans, faqItems } from "@/lib/content";
import ctaSide from "@/assets/cta-side.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} — AI Infrastructure Operations (AIOps) Platform` },
      { name: "description", content: "Enterprise-grade AIOps platform that monitors, predicts, and automates infrastructure operations across cloud, Kubernetes, and GPU-intensive environments." },
      { property: "og:title", content: `${SITE_NAME} — Autonomous Infrastructure Intelligence Engine` },
      { property: "og:description", content: "Predict outages, optimize resources, and self-heal cloud systems with an AI-driven operations layer for enterprise infrastructure teams." },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: `${SITE_URL}${HERO_SIDE_IMAGE_URL}` },
      { name: "twitter:image", content: `${SITE_URL}${HERO_SIDE_IMAGE_URL}` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const trainers = [
  { name: "Alex Thompson", role: "Head of SRE", tag: "Incident Remediation & MTTR", img: TESTIMONIAL_IMAGE_URLS[0], rating: 5 },
  { name: "John Smith", role: "ML Infrastructure Lead", tag: "GPU Workload Optimization", img: TESTIMONIAL_IMAGE_URLS[1], rating: 5 },
  { name: "Mike Chen", role: "Platform Architect", tag: "Cloud & Kubernetes at Scale", img: TESTIMONIAL_IMAGE_URLS[2], rating: 4 },
  { name: "Sarah Martinez", role: "AIOps Engineer", tag: "Predictive Analytics Engine", img: TESTIMONIAL_IMAGE_URLS[3], rating: 5 },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactSubjects = [
  "Platform demo request",
  "Enterprise AIOps licensing",
  "GPU optimization module",
  "Custom enterprise deployment",
  "API & integration support",
  "General question",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <OurPrograms />
      <TrainingPrograms />
      <WhyChooseUs />
      <FeatureStrip />
      <Membership />
      <Trainers />
      <Faq />
      <Contact />
      <Cta />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-[#0a0a0a] min-h-[calc(100svh-4.5rem)] md:min-h-[calc(100svh-7.5rem)]">
      <img
        src={HERO_SIDE_IMAGE_URL}
        alt=""
        width={1920}
        height={1080}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_right] lg:object-right"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent lg:hidden" />
      <div className="relative z-10 flex min-h-[calc(100svh-4.5rem)] w-full items-center px-6 py-12 md:min-h-[calc(100svh-7.5rem)] lg:px-12 lg:py-16">
        <div className="w-full -translate-y-4 text-left sm:-translate-y-6 lg:w-1/2 lg:max-w-[50vw] lg:pr-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="font-display text-lg tracking-[0.3em] text-primary">AUTONOMOUS INFRASTRUCTURE INTELLIGENCE</p>
            <span className="rounded-full bg-primary px-4 py-1.5 font-display text-xs tracking-widest text-primary-foreground">
              PREDICT · AUTOMATE · OPTIMIZE
            </span>
          </div>
          <h1 id="hero-heading" className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            INTELLIGENT INFRASTRUCTURE<br />OPERATIONS <span className="text-primary">AT SCALE</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:max-w-none">
            The enterprise AIOps platform that monitors, predicts, and automates infrastructure operations across cloud, Kubernetes, and GPU-intensive environments — transforming reactive ops into an intelligent, autonomous operations layer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
              Explore Platform <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
              View Pricing
            </a>
          </div>
          <div className="mt-12 grid w-full max-w-xl grid-cols-3 gap-6 text-left lg:max-w-none">
            {[
              { v: "85%", l: "MTTR Reduction" },
              { v: "40%", l: "Cost Savings" },
              { v: "99.9%", l: "Uptime SLA" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl leading-none text-primary">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionHeader
            headingId="about-heading"
            eyebrow="THE CHALLENGE"
            title={`WHY ${SITE_NAME.toUpperCase()}?`}
            description="Late outages, unpredictable costs, slow incident response. Infra-PilotAI predicts failures, optimizes resources, and self-heals cloud systems with intelligent agents."
            align="left"
            descriptionClassName="mt-4 max-w-lg text-muted-foreground"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(f => (
              <div key={f.title} className="rounded-2xl border border-border bg-card/50 p-6 transition hover:border-primary/60 hover:bg-card">
                <div className="mb-4 grid h-12 w-12 place-items-center">
                  <FeatureIcon src={f.iconUrl} className="h-12 w-12" />
                </div>
                <h3 className="font-display text-xl tracking-wider">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-glow">
            <img
              src={WHY_SECTION_IMAGE_URL}
              alt="Professional team collaborating on infrastructure operations and technology strategy"
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingPrograms() {
  const [selectedCapability, setSelectedCapability] = useState<(typeof programs)[number] | null>(null);

  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="solutions-heading"
          eyebrow="CORE CAPABILITIES"
          title="AIOps Platform Modules"
          description="End-to-end infrastructure intelligence — from predictive analytics and Kubernetes optimization to GPU workload management and autonomous incident remediation."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(p => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60 hover:shadow-glow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={768} height={576} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wider">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <button
                  type="button"
                  onClick={() => setSelectedCapability(p)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={selectedCapability !== null} onOpenChange={(open) => !open && setSelectedCapability(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-border bg-card p-0 sm:rounded-2xl">
          {selectedCapability && (
            <>
              <div className="relative aspect-[21/9] overflow-hidden sm:rounded-t-2xl">
                <img
                  src={selectedCapability.img}
                  alt=""
                  width={768}
                  height={576}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <DialogHeader className="space-y-3 text-left">
                  <p className="font-display text-sm tracking-[0.3em] text-primary">CAPABILITY</p>
                  <DialogTitle className="font-display text-3xl uppercase tracking-wider text-foreground">
                    {selectedCapability.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                    {selectedCapability.overview}
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <h4 className="font-display text-lg uppercase tracking-wider">Key Features</h4>
                  <ul className="mt-4 space-y-3">
                    {selectedCapability.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/product"
                    onClick={() => setSelectedCapability(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
                  >
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#contact"
                    onClick={() => setSelectedCapability(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section id="features" aria-labelledby="features-heading" className="relative overflow-hidden bg-ember py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {architectureImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              width={768}
              height={576}
              loading="lazy"
              className={`aspect-square w-full rounded-2xl object-cover ${i % 2 === 1 ? "mt-10" : ""}`}
            />
          ))}
        </div>
        <div>
          <SectionHeader
            headingId="features-heading"
            eyebrow="PLATFORM ARCHITECTURE"
            title={<>SCALABLE INTELLIGENT<br />INFRASTRUCTURE</>}
            description="Everything your cloud engineering, DevOps, SRE, and platform teams need, predictive intelligence, automated remediation, and continuous cost optimization in one scalable intelligent architecture."
            align="left"
            descriptionClassName="mt-4 max-w-lg text-muted-foreground"
          />
          <ul className="mt-8 space-y-4">
            {coreFeatures.map(f => (
              <li key={f} className="flex items-center gap-3 text-base font-medium">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OurPrograms() {
  const [selectedStep, setSelectedStep] = useState<(typeof quickPrograms)[number] | null>(null);

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="how-it-works-heading"
          eyebrow="OPERATIONS WORKFLOW"
          title="How It Works"
          description="Five integrated stages from telemetry ingestion to autonomous remediation. See how Infra-PilotAI keeps your cloud, Kubernetes, and GPU infrastructure monitored, optimized, and self-healing."
          descriptionClassName="mx-auto mt-3 max-w-xl text-muted-foreground"
        />
        <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {quickPrograms.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:shadow-glow lg:col-span-2 lg:self-start ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <div className="mx-auto mb-5 grid h-14 w-14 shrink-0 place-items-center">
                <FeatureIcon src={p.iconUrl} className="h-14 w-14" />
              </div>
              <h3 className="flex min-h-[4.5rem] items-start justify-center font-display text-2xl tracking-wider">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <button
                type="button"
                onClick={() => setSelectedStep(p)}
                className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
              >
                Learn More <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedStep !== null} onOpenChange={(open) => !open && setSelectedStep(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-border bg-card sm:rounded-2xl">
          {selectedStep && (
            <div className="space-y-6 p-6 sm:p-8">
              <DialogHeader className="space-y-4 text-left">
                <div className="grid h-14 w-14 place-items-center">
                  <FeatureIcon src={selectedStep.iconUrl} className="h-14 w-14" />
                </div>
                <p className="font-display text-sm tracking-[0.3em] text-primary">OPERATIONS WORKFLOW</p>
                <DialogTitle className="font-display text-3xl uppercase tracking-wider text-foreground">
                  {selectedStep.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                  {selectedStep.overview}
                </DialogDescription>
              </DialogHeader>
              <div>
                <h4 className="font-display text-lg uppercase tracking-wider">What You Get</h4>
                <ul className="mt-4 space-y-3">
                  {selectedStep.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="mt-3 flex justify-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/25"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Trainers() {
  return (
    <section id="team" aria-labelledby="team-heading" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="team-heading"
          eyebrow="ENGINEERING TEAM"
          title="Built by Infrastructure Experts"
          description="Cloud engineers, SREs, and AIOps specialists who understand the complexity of enterprise-scale infrastructure."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map(t => (
            <div key={t.name} className="text-center">
              <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-card shadow-glow">
                <img src={t.img} alt={t.name} width={640} height={640} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-wider">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">{t.tag}</p>
              <StarRating rating={t.rating} />
              <button className="mt-4 rounded-full bg-gradient-primary px-5 py-2 text-xs font-semibold tracking-widest text-primary-foreground transition hover:opacity-90">
                VIEW PROFILE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-ember py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="pricing-heading"
          eyebrow="SUBSCRIPTION & LICENSING"
          title="Pricing Plans"
          description="Flexible SaaS tiers with usage-based scaling. From starter monitoring to enterprise AIOps licensing with premium GPU optimization modules and custom deployment."
          descriptionClassName="mx-auto mt-3 max-w-xl text-muted-foreground"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(p => (
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
                {p.features.map(f => (
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

function Cta() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="relative overflow-hidden bg-ember py-24 lg:min-h-[32rem]">
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] xl:w-[40%] lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ember via-ember/50 to-transparent" />
        <img
          src={ctaSide}
          alt=""
          width={900}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-95 [mask-image:linear-gradient(to_left,black_40%,transparent_92%)]"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl text-center lg:text-left">
          <SectionHeader
            headingId="cta-heading"
            eyebrow="READY TO TRANSFORM?"
            title={<>AUTONOMOUS <span className="text-primary">INFRASTRUCTURE</span> OPS</>}
            titleClassName="lg:text-6xl"
            description={`Join enterprises modernizing cloud, Kubernetes, and GPU operations with ${SITE_NAME}. Start a free trial or book a demo to see predictive analytics and self-healing automation in action.`}
            align="left"
            descriptionClassName="mt-6 text-lg text-muted-foreground"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link to="/product" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
              Start Free Trial <ChevronRight className="h-4 w-4" />
            </Link>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
              Book a Demo
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
            {["14-day free trial", "No credit card required", "Dedicated onboarding"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          headingId="faq-heading"
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          description="Everything you need to know about Infra-PilotAI's intelligent AIOps platform."
        />
        <Accordion type="single" collapsible className="mt-12 rounded-2xl border border-border bg-card px-6">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`} className="border-border last:border-b-0">
              <AccordionTrigger className="font-display text-base tracking-wider hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href="#contact" className="font-semibold text-primary transition hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </section>
  );
}


function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    setRecaptchaError(null);

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      try {
        await verifyRecaptcha({ data: { token: recaptchaToken } });
      } catch {
        // Static deployments may not have server functions; Formspree still receives the token.
      }

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: `Infra-PilotAI Contact: ${data.subject}`,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error ?? "Unable to send message. Please try again.");
      }

      setSubmitted(true);
      reset();
      recaptchaRef.current?.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      recaptchaRef.current?.reset();
      setSubmitError(error instanceof Error ? error.message : "Unable to send message. Please try again.");
    }
  };

  const fieldClass =
    "h-11 rounded-xl border-border bg-background/50 px-4 focus-visible:ring-primary";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="contact-heading"
          eyebrow="GET IN TOUCH"
          title="Contact Us"
          description="Questions about AIOps capabilities, enterprise licensing, GPU optimization, or custom deployment? Send us a message and we'll respond within 24 hours."
        />
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl tracking-wider">HEADQUARTERS</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{SITE_LOCATION}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span>{SITE_PHONE}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span>{SUPPORT_EMAIL}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <span>24/7 Autonomous Operations</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl tracking-wider">HOW WE CAN HELP</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {["Free platform demo & proof of concept", "Custom enterprise deployment services", "API access for automation & monitoring"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-wider">MESSAGE SENT</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out! Our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <h3 className="font-display text-2xl tracking-wider">Send a Message</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className={fieldClass} {...register("name")} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className={fieldClass} {...register("email")} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className={fieldClass} {...register("phone")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      className={`flex w-full ${fieldClass} text-sm text-foreground`}
                      {...register("subject")}
                    >
                      <option value="" disabled>Select a topic</option>
                      {contactSubjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your cloud, Kubernetes, or GPU infrastructure needs..."
                    rows={5}
                    className="min-h-[140px] resize-none rounded-xl border-border bg-background/50 px-4 py-3 focus-visible:ring-primary"
                    {...register("message")}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>
                {submitError && (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {submitError}
                  </p>
                )}
                <RecaptchaField
                  recaptchaRef={recaptchaRef}
                  onChange={() => setRecaptchaError(null)}
                />
                {recaptchaError && (
                  <p className="text-xs text-destructive">{recaptchaError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
