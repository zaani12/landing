import { useEffect, useRef, useCallback } from "react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CheckSquare,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import styles from "./index.module.css";

export const meta: MetaFunction = () => [
  { title: "OpsPilot — Shopify Automation, Alerts & Task Management" },
];

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
  },
];

/* ── Data ── */

const NAV_LINKS = [
  { href: "#major-features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#why-opspilot", label: "Why OpsPilot" },
  { href: "#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

const KEYWORDS = [
  "Shopify automation",
  "Workflow automation",
  "Order alerts",
  "Inventory alerts",
  "Task management",
  "Operations dashboard",
];

const FEATURES = [
  {
    Icon: Activity,
    title: "Real-Time Operations Dashboard",
    desc: "Get a complete overview of store health and quickly identify issues and opportunities.",
    items: [
      "High-value orders",
      "Abandoned checkouts",
      "Inventory risks",
      "Pending payments",
    ],
  },
  {
    Icon: Workflow,
    title: "Shopify Workflow Automation",
    desc: "Build flexible workflow automation for repetitive operational processes.",
    items: [
      "Order, customer, product triggers",
      "Abandoned checkout triggers",
      "Condition and action logic",
      "Ready-to-use templates",
    ],
  },
  {
    Icon: CheckSquare,
    title: "Automated Task Management",
    desc: "Convert important events into actionable tasks for your team.",
    items: [
      "Create tasks from events",
      "Assign ownership",
      "Kanban or table views",
      "Custom statuses and notes",
    ],
  },
  {
    Icon: Bell,
    title: "Alerts and Notifications",
    desc: "Stay informed when important events occur in your Shopify store.",
    items: [
      "Email notifications",
      "Slack messages",
      "Google Sheets logging",
      "Activity history",
    ],
  },
];

const SCREENSHOTS = [
  {
    src: "asets/1@2x.png",
    alt: "OpsPilot — Your Store on Autopilot",
    title: "Product Showcase",
    desc: "Your store on autopilot — the complete OpsPilot command center overview.",
  },
  {
    src: "asets/2@2x.png",
    alt: "OpsPilot Real-Time Operational Health Dashboard",
    title: "Operations Dashboard",
    desc: "Real-time operations dashboard for Shopify automation, store monitoring, and order alerts.",
  },
  {
    src: "asets/3@2x.png",
    alt: "OpsPilot Workflow Automation Builder",
    title: "Workflow Builder",
    desc: "Shopify workflows and workflow automation for inventory alerts and customer activity tracking.",
  },
  {
    src: "asets/4@2x.png",
    alt: "OpsPilot Integrations — Slack, Email, Google Sheets",
    title: "Integrations",
    desc: "Connect your store to Slack, Google Sheets, and Email for instant team alerts and automated logs.",
  },
  {
    src: "asets/5@2x.png",
    alt: "OpsPilot White-Label Branding Tools",
    title: "White-Label Branding",
    desc: "Custom branding for Slack, Sheets, and email — personalized sender, DNS verification, and full delivery.",
  },
  {
    src: "asets/6@2x.png",
    alt: "OpsPilot Use Cases — Turn Store Data into Action",
    title: "Use Cases",
    desc: "Auto-alert on unfulfilled orders, flag high-risk orders, and auto-tag VIP customers for follow-up.",
  },
  {
    src: "asets/7@2x.png",
    alt: "OpsPilot Task Board — Kanban View",
    title: "Task Board",
    desc: "Shopify task management with Kanban and table views for operational follow-up.",
  },
  {
    src: "asets/8@2x.png",
    alt: "Install OpsPilot on the Shopify App Store",
    title: "Shopify App Store",
    desc: "Install OpsPilot directly from the Shopify App Store — available now for all merchants.",
  },
];

const SPOTLIGHTS = [
  {
    src: "asets/4@2x.png",
    alt: "Stay Informed, Everywhere — Slack, Email, Google Sheets",
    eyebrow: "Integrations",
    title: "Stay Informed, Everywhere.",
    desc: "Connect your store to Slack, Google Sheets, and Email. Get instant team alerts anywhere, automated historical data logs, and professionally branded notifications delivered on cue.",
    reverse: false,
  },
  {
    src: "asets/5@2x.png",
    alt: "Tailored to Your Brand — White-label tools",
    eyebrow: "White-Label",
    title: "Tailored to Your Brand.",
    desc: "Advanced governance and white-label tools for high-volume stores. Custom Slack and Sheet branding, personalized sender emails, DNS verification, and 100% email delivery reached.",
    reverse: true,
  },
  {
    src: "asets/6@2x.png",
    alt: "Turn Store Data into Action — Use cases",
    eyebrow: "Use Cases",
    title: "Turn Store Data into Action.",
    desc: "Automatically alert staff on unfulfilled orders, flag high-risk orders before shipping, and auto-tag VIP customers to trigger personalized follow-up — all without manual effort.",
    reverse: false,
  },
];

const WHY_CARDS = [
  {
    Icon: Users,
    title: "Team Collaboration",
    items: [
      "Task assignments and ownership",
      "Notes and attachments",
      "Activity logs",
      "Role-based admin settings",
    ],
  },
  {
    Icon: Zap,
    title: "Integrations and Templates",
    items: [
      "Slack notifications",
      "Google Sheets automation",
      "Email alerts",
      "Ready-to-use workflow templates",
    ],
  },
];

const FAQS = [
  {
    q: "What does OpsPilot automate?",
    a: "OpsPilot automates operational follow-up across orders, customers, products, inventory, abandoned checkouts, and scheduled review workflows.",
  },
  {
    q: "Do I need technical knowledge to build workflows?",
    a: "No. You can start from templates or use the visual builder to configure triggers, conditions, and actions without writing code.",
  },
  {
    q: "Can OpsPilot alert my team outside Shopify?",
    a: "Yes. OpsPilot supports Slack alerts, workflow emails, and Google Sheets logging so teams can stay aligned across tools.",
  },
  {
    q: "Is OpsPilot useful for teams, not just solo merchants?",
    a: "Yes. It includes task assignment, notes, activity history, and shared workflow-driven follow-up so multiple operators can work from one system.",
  },
  {
    q: "Can I test workflows before relying on them?",
    a: "Yes. The app includes test actions such as running scheduled workflows manually or testing with the latest order, product, customer, checkout, or inventory payload.",
  },
  {
    q: "Can I start with templates and customize later?",
    a: "Yes. You can use built-in templates as a starting point, then adjust the trigger, conditions, actions, integrations, and activation status at any time.",
  },
];

/* ── Hook: IntersectionObserver for scroll animations ── */

function useAnimObserver() {
  const observed = useRef(false);

  useEffect(() => {
    if (observed.current) return;
    observed.current = true;

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(`.${styles.anim}`)
        .forEach((el) => el.classList.add(styles.visible));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target;
            if (t.classList.contains(styles.anim)) t.classList.add(styles.visible);
            t.querySelectorAll(`.${styles.anim}`).forEach((c) =>
              c.classList.add(styles.visible)
            );
            obs.unobserve(t);
          }
        });
      },
      { rootMargin: "-8% 0px" }
    );

    document.querySelectorAll("[data-anim]").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}

/* ── Smooth scroll helper ── */

function useSmoothScroll() {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );
  return handleClick;
}

/* ── Component ── */

export default function LandingPage() {
  useAnimObserver();
  const smoothScroll = useSmoothScroll();

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} />
      <div className={styles.container}>
        {/* ── HEADER ── */}
        <header className={`${styles.header} ${styles.anim}`} data-anim>
          <a className={styles.brand} href="/" aria-label="OpsPilot home">
            Ops<span className={styles.brandHighlight}>Pilot</span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                className={styles.navLink}
                href={l.href}
                onClick={l.href.startsWith("#") ? smoothScroll : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a className={styles.loginLink} href="/auth/login">
              Log in
            </a>
            <a className={styles.installButton} href="/auth/login">
              Install App
            </a>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroShell} data-anim>
            <div className={styles.heroContent}>
              <div className={`${styles.badge} ${styles.anim}`}>
                <span className={styles.badgeDot} />
                Shopify Automation, Alerts and Task Management
              </div>

              <h1 className={`${styles.heroTitle} ${styles.anim}`}>
                Run your Shopify operations with calm,{" "}
                <span className={styles.heroTitleHighlight}>
                  green-light clarity
                </span>
              </h1>

              <p className={`${styles.heroText} ${styles.anim}`}>
                OpsPilot helps merchants automate daily operations with
                workflows, alerts, and task management. Track orders, inventory,
                abandoned checkouts, and customer activity in one operational
                command center.
              </p>

              <div className={`${styles.heroActions} ${styles.anim}`}>
                <a className={styles.primaryButton} href="/auth/login">
                  Install OpsPilot{" "}
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </a>
                <a
                  className={styles.secondaryButton}
                  href="#major-features"
                  onClick={smoothScroll}
                >
                  Explore features
                </a>
              </div>

              <div
                className={`${styles.heroHighlights} ${styles.anim}`}
                aria-label="OpsPilot advantages"
              >
                <article className={styles.heroHighlight}>
                  <span>Always-on monitoring</span>
                  <strong>
                    Orders, stock, payments, and customer flows
                  </strong>
                </article>
                <article className={styles.heroHighlight}>
                  <span>Flexible automation</span>
                  <strong>
                    Trigger, condition, and action workflows
                  </strong>
                </article>
                <article className={styles.heroHighlight}>
                  <span>Team execution</span>
                  <strong>
                    Tasks, alerts, and follow-up in one place
                  </strong>
                </article>
              </div>

              <ul
                className={`${styles.keywordTags} ${styles.anim}`}
                aria-label="Shopify app store keywords"
              >
                {KEYWORDS.map((kw) => (
                  <li key={kw} className={styles.keywordTag}>
                    {kw}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero Preview Aside */}
            <aside
              className={`${styles.heroPreview} ${styles.anim}`}
              aria-label="OpsPilot preview"
            >
              <div className={styles.previewHeader}>
                <span className={styles.previewBadge}>
                  Live operations view
                </span>
                <span className={styles.previewStatus}>
                  <span className={styles.statusDot} /> Healthy
                </span>
              </div>

              <div className={styles.previewStack}>
                <article className={styles.previewCard}>
                  <div className={styles.previewCardHeader}>
                    <BarChart3
                      className={styles.iconAccent}
                      style={{ width: 18, height: 18 }}
                    />
                    Dashboard pulse
                  </div>
                  <div className={styles.previewMetricRow}>
                    <div className={styles.previewMetric}>
                      <span>Priority queue</span>
                      <strong>6 items need attention</strong>
                    </div>
                    <div className={styles.previewMetric}>
                      <span>Automations active</span>
                      <strong>14 workflows running</strong>
                    </div>
                  </div>
                </article>

                <article className={styles.previewCard}>
                  <div className={styles.previewCardHeader}>
                    <Workflow
                      className={styles.iconAccent}
                      style={{ width: 18, height: 18 }}
                    />
                    Workflow chain
                  </div>
                  <div className={styles.previewFlow}>
                    <span className={styles.previewFlowStep}>
                      When order is created
                    </span>
                    <span className={styles.previewFlowStep}>
                      If total is above threshold
                    </span>
                    <span className={styles.previewFlowStep}>
                      Then create task and send alert
                    </span>
                  </div>
                </article>

                <article className={styles.previewCard}>
                  <div className={styles.previewCardHeader}>
                    <Bell
                      className={styles.iconAccent}
                      style={{ width: 18, height: 18 }}
                    />
                    Connected outputs
                  </div>
                  <div className={styles.previewPills}>
                    <span className={styles.previewPill}>Slack alerts</span>
                    <span className={styles.previewPill}>Email follow-up</span>
                    <span className={styles.previewPill}>
                      Google Sheets log
                    </span>
                  </div>
                </article>
              </div>
            </aside>
          </div>
        </section>

        {/* ── PRODUCT SHOWCASE ── */}
        <div className={`${styles.showcaseWrap} ${styles.anim}`} data-anim>
          <div className={styles.showcaseFrame}>
            <div className={styles.showcaseBar}>
              <span className={styles.showcaseDot} style={{ background: "#ff5f57" }} />
              <span className={styles.showcaseDot} style={{ background: "#ffbd2e" }} />
              <span className={styles.showcaseDot} style={{ background: "#28c840" }} />
              <span className={styles.showcaseBarTitle}>
                OpsPilot — Your Store on Autopilot
              </span>
            </div>
            <img
              src="asets/1@2x.png"
              alt="OpsPilot — Your Store on Autopilot. Under Your Control."
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section
          id="major-features"
          className={`${styles.section} ${styles.sectionScrollTarget}`}
        >
          <div className={styles.sectionHeader} data-anim>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`}>
              Core Platform
            </p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`}>
              Everything you need to run your store
            </h2>
            <p className={`${styles.sectionSubtitle} ${styles.anim}`}>
              Powerful tools designed specifically for Shopify merchants to
              streamline daily operations.
            </p>
          </div>

          <div className={styles.featureGrid} data-anim>
            {FEATURES.map((f) => (
              <article key={f.title} className={`${styles.card} ${styles.anim}`}>
                <div className={styles.cardIcon}>
                  <f.Icon style={{ width: 24, height: 24 }} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className={styles.cardList}>
                  {f.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <CheckCircle2 className={styles.checkIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── SCREENSHOTS ── */}
        <section
          id="screenshots"
          className={`${styles.section} ${styles.sectionScrollTarget}`}
        >
          <div className={styles.sectionHeader} data-anim>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`}>
              Product Surfaces
            </p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`}>
              See OpsPilot in Action
            </h2>
            <p className={`${styles.sectionSubtitle} ${styles.anim}`}>
              A clean, intuitive interface designed for speed and clarity.
            </p>
          </div>

          <div className={styles.screenshotGrid} data-anim>
            {SCREENSHOTS.map((s) => (
              <article
                key={s.src}
                className={`${styles.screenshotCard} ${styles.anim}`}
              >
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                <div className={styles.screenshotCardContent}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── SPOTLIGHT ── */}
        <section className={styles.section}>
          <div className={styles.sectionHeader} data-anim>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`}>
              Platform Deep Dive
            </p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`}>
              Everything Connected, Nothing Missed
            </h2>
            <p className={`${styles.sectionSubtitle} ${styles.anim}`}>
              From integrations to branding to intelligent automation — OpsPilot
              covers every layer.
            </p>
          </div>

          <div className={styles.spotlightGrid}>
            {SPOTLIGHTS.map((s) => (
              <div
                key={s.title}
                className={`${s.reverse ? styles.spotlightRowReverse : styles.spotlightRow} ${styles.anim}`}
                data-anim
              >
                <div className={styles.spotlightImg}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.spotlightText}>
                  <p className={styles.sectionEyebrow}>{s.eyebrow}</p>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY OPSPILOT ── */}
        <section
          id="why-opspilot"
          className={`${styles.section} ${styles.sectionScrollTarget}`}
        >
          <div className={styles.sectionHeader} data-anim>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`}>
              Why Teams Choose It
            </p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`}>
              Built for operators, not just dashboards
            </h2>
            <p className={`${styles.sectionSubtitle} ${styles.anim}`}>
              OpsPilot keeps monitoring, automation, and follow-up connected so
              nothing important slips through.
            </p>
          </div>

          <div className={styles.split} data-anim>
            {WHY_CARDS.map((c) => (
              <article key={c.title} className={`${styles.card} ${styles.anim}`}>
                <div className={styles.cardIcon}>
                  <c.Icon style={{ width: 24, height: 24 }} />
                </div>
                <h3>{c.title}</h3>
                <ul className={styles.cardList}>
                  {c.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <CheckCircle2 className={styles.checkIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className={`${styles.section} ${styles.sectionScrollTarget}`}
        >
          <div className={styles.sectionHeader} data-anim>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`}>
              Common Questions
            </p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`}>FAQ</h2>
            <p className={`${styles.sectionSubtitle} ${styles.anim}`}>
              Quick answers for merchants evaluating OpsPilot for daily store
              operations and workflow automation.
            </p>
          </div>

          <div className={styles.faqGrid} data-anim>
            {FAQS.map((f) => (
              <details key={f.q} className={`${styles.faqItem} ${styles.anim}`}>
                <summary className={styles.faqQuestion}>
                  <span>{f.q}</span>
                  <span className={styles.faqMarker} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className={styles.faqAnswer}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className={`${styles.ctaSection} ${styles.anim}`}
          data-anim
        >
          <h2>Ready to automate your store?</h2>
          <p>
            Join merchants who use OpsPilot to automate operations, reduce
            errors, and save hours every week.
          </p>
          <a className={styles.ctaPrimaryButton} href="/auth/login">
            Start with OpsPilot{" "}
            <ArrowRight style={{ width: 18, height: 18 }} />
          </a>
          <p className={styles.supportText}>
            Questions? Contact us at{" "}
            <a href="mailto:support@opspilotflow.com">
              support@opspilotflow.com
            </a>{" "}
            | <a href="/privacy">Privacy Policy</a>
          </p>
          <img
            className={styles.ctaImage}
            src="asets/8@2x.png"
            alt="Install OpsPilot on Shopify — Available now on the Shopify App Store"
            loading="lazy"
            decoding="async"
          />
        </section>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <p>
            &copy; 2025 OpsPilot &middot; Built for Shopify merchants &middot;{" "}
            <a href="mailto:support@opspilotflow.com">
              support@opspilotflow.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
