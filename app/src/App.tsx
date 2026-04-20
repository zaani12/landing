import { useEffect, useCallback } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  Bell,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import styles from "./App.module.css";

/* ── Hooks ── */

function useAnimObserver() {
  useEffect(() => {
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
            if (t.classList.contains(styles.anim))
              t.classList.add(styles.visible);
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

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
}

/* ── Component ── */

export default function App() {
  useAnimObserver();
  const smoothScroll = useSmoothScroll();

  return (
    <>
      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#">
            Ops<span>Pilot</span>
          </a>
          <nav className={styles.nav}>
            <a href="#features" onClick={smoothScroll}>Features</a>
            <a href="#screenshots" onClick={smoothScroll}>Screenshots</a>
            <a href="#why" onClick={smoothScroll}>Why OpsPilot</a>
            <a href="#faq" onClick={smoothScroll}>FAQ</a>
          </nav>
          <div className={styles.headerActions}>
            <a className={styles.btnGhost} href="#">Log in</a>
            <a className={styles.btnPrimary} href="#">Install App</a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              Shopify Automation &amp; Task Management
            </div>
            <h1 className={`${styles.heroTitle} ${styles.anim}`} data-anim>
              Run your store with calm,{" "}
              <em>green-light clarity</em>
            </h1>
            <p className={`${styles.heroSub} ${styles.anim}`} data-anim>
              OpsPilot helps merchants automate daily operations with workflows,
              alerts, and task management. Track orders, inventory, abandoned
              checkouts, and customer activity in one command center.
            </p>
            <div className={`${styles.heroActions} ${styles.anim}`} data-anim>
              <a className={`${styles.btnPrimary} ${styles.btnHero}`} href="#">
                Install OpsPilot{" "}
                <ArrowRight style={{ width: 18, height: 18 }} />
              </a>
              <a
                className={styles.btnSecondary}
                href="#features"
                onClick={smoothScroll}
              >
                Explore features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero floating preview card ── */}
      <div className={`${styles.heroPreviewWrap} ${styles.anim}`} data-anim>
        <div className={styles.heroPreview}>
          <div className={styles.previewBar}>
            <span className={`${styles.dot} ${styles.dotR}`} />
            <span className={`${styles.dot} ${styles.dotY}`} />
            <span className={`${styles.dot} ${styles.dotG}`} />
            <span className={styles.previewBarTitle}>
              OpsPilot — Live Operations
            </span>
          </div>
          <div className={styles.previewBody}>
            {/* Dashboard pane */}
            <div className={styles.previewPane}>
              <h4>
                <Activity style={{ width: 14, height: 14, color: "var(--g500)" }} />{" "}
                Dashboard
              </h4>
              <div className={styles.metricGrid}>
                <div className={styles.metricBox}><span>Queue</span><strong>6</strong></div>
                <div className={styles.metricBox}><span>Active</span><strong>14</strong></div>
                <div className={styles.metricBox}><span>Revenue</span><strong>$2.4k</strong></div>
                <div className={styles.metricBox}><span>Tasks</span><strong>8</strong></div>
              </div>
              <div className={styles.miniChart}>
                <span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>

            {/* Workflows pane */}
            <div className={styles.previewPane}>
              <h4>
                <Workflow style={{ width: 14, height: 14, color: "var(--g500)" }} />{" "}
                Workflows
              </h4>
              <div className={styles.flowList}>
                <div className={`${styles.flowItem} ${styles.flowItemActive}`}>
                  <span className={styles.flowDot} /> Order received
                </div>
                <div className={`${styles.flowItem} ${styles.flowItemActive}`}>
                  <span className={styles.flowDot} /> Check inventory
                </div>
                <div className={styles.flowItem}>
                  <span className={styles.flowDot} /> Notify via Slack
                </div>
                <div className={styles.flowItem}>
                  <span className={styles.flowDot} /> Log to Sheets
                </div>
              </div>
              <div className={styles.pillGroup} style={{ marginTop: "0.75rem" }}>
                <span className={styles.pill}>Slack</span>
                <span className={styles.pill}>Email</span>
                <span className={styles.pill}>Sheets</span>
              </div>
            </div>

            {/* Tasks pane */}
            <div className={styles.previewPane}>
              <h4>
                <CheckSquare style={{ width: 14, height: 14, color: "var(--g500)" }} />{" "}
                Tasks
              </h4>
              <div className={styles.flowList}>
                <div className={`${styles.flowItem} ${styles.flowItemActive}`}>
                  <span className={styles.flowDot} /> VIP order flagged
                </div>
                <div className={`${styles.flowItem} ${styles.flowItemActive}`}>
                  <span className={styles.flowDot} /> Low stock alert
                </div>
                <div className={styles.flowItem}>
                  <span className={styles.flowDot} /> Checkout follow-up
                </div>
                <div className={styles.flowItem}>
                  <span className={styles.flowDot} /> Inventory restock
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCT SHOWCASE ── */}
      <div
        className={`${styles.heroPreviewWrap} ${styles.anim}`}
        data-anim
        style={{ marginTop: "2.5rem" }}
      >
        <div className={styles.heroPreview} style={{ boxShadow: "var(--shadow-xl)" }}>
          <div className={styles.previewBar}>
            <span className={`${styles.dot} ${styles.dotR}`} />
            <span className={`${styles.dot} ${styles.dotY}`} />
            <span className={`${styles.dot} ${styles.dotG}`} />
            <span className={styles.previewBarTitle}>
              OpsPilot — Your Store on Autopilot
            </span>
          </div>
          <img
            src="/asets/1@2x.png"
            alt="OpsPilot — Your Store on Autopilot. Under Your Control."
            loading="eager"
            decoding="async"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>

      <div className={styles.container}>
        {/* ── FEATURES ── */}
        <section id="features" className={styles.section} style={{ paddingTop: "clamp(5rem,8vw,7rem)" }}>
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`} data-anim>Core Platform</p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`} data-anim>Everything you need to run your store</h2>
            <p className={`${styles.sectionSub} ${styles.anim}`} data-anim>Powerful tools designed for Shopify merchants.</p>
          </div>
          <div className={`${styles.featureGrid} ${styles.stagger}`} data-anim>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><Activity style={{ width: 24, height: 24 }} /></div>
              <h3>Real-Time Dashboard</h3>
              <p>Complete overview of store health. Identify issues and opportunities at a glance.</p>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> High-value orders</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Abandoned checkouts</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Inventory risks</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Pending payments</li>
              </ul>
            </article>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><Workflow style={{ width: 24, height: 24 }} /></div>
              <h3>Workflow Automation</h3>
              <p>Build flexible workflows for repetitive operational processes.</p>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> Order, customer, product triggers</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Abandoned checkout triggers</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Condition &amp; action logic</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Ready-to-use templates</li>
              </ul>
            </article>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><CheckSquare style={{ width: 24, height: 24 }} /></div>
              <h3>Task Management</h3>
              <p>Convert important events into actionable tasks for your team.</p>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> Tasks from events</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Assign ownership</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Kanban or table views</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Custom statuses</li>
              </ul>
            </article>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><Bell style={{ width: 24, height: 24 }} /></div>
              <h3>Alerts &amp; Notifications</h3>
              <p>Stay informed when important events occur.</p>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> Email notifications</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Slack messages</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Google Sheets logging</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Activity history</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ── SCREENSHOTS ── */}
        <section id="screenshots" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`} data-anim>Product Surfaces</p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`} data-anim>See OpsPilot in Action</h2>
            <p className={`${styles.sectionSub} ${styles.anim}`} data-anim>Clean, intuitive interface designed for speed and clarity.</p>
          </div>
          <div className={`${styles.screenshotGrid} ${styles.stagger}`} data-anim>
            <article className={`${styles.screenshotCard} ${styles.anim}`}>
              <img src="/asets/2@2x.png" alt="OpsPilot Real-Time Operational Health Dashboard" loading="lazy" decoding="async" style={{ width: "100%", display: "block" }} />
              <div className={styles.screenshotContent}><h4>Real-Time Operational Health</h4><p>Prioritize risks and monitor store activity at a glance. Catch critical issues before they cost you.</p></div>
            </article>
            <article className={`${styles.screenshotCard} ${styles.anim}`}>
              <img src="/asets/3@2x.png" alt="OpsPilot Automation Engine" loading="lazy" decoding="async" style={{ width: "100%", display: "block" }} />
              <div className={styles.screenshotContent}><h4>The Automation Engine</h4><p>Build powerful, logic-based workflows that run your store 24/7 with 35+ predefined templates.</p></div>
            </article>
            <article className={`${styles.screenshotCard} ${styles.anim}`}>
              <img src="/asets/7@2x.png" alt="OpsPilot Turn Alerts into Action — Kanban" loading="lazy" decoding="async" style={{ width: "100%", display: "block" }} />
              <div className={styles.screenshotContent}><h4>Turn Alerts into Action</h4><p>A built-in Kanban workspace for your team's daily operations with one-click resolution.</p></div>
            </article>
          </div>
        </section>

        {/* ── SPOTLIGHT ── */}
        <section className={styles.spotlightSection}>
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`} data-anim>Platform Deep Dive</p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`} data-anim>Everything Connected, Nothing Missed</h2>
            <p className={`${styles.sectionSub} ${styles.anim}`} data-anim>From integrations to branding to intelligent automation — OpsPilot covers every layer.</p>
          </div>
          <div className={styles.spotlightGrid}>
            <div className={`${styles.spotlightRow} ${styles.anim}`} data-anim>
              <div className={styles.spotlightImg}><img src="/asets/4@2x.png" alt="Stay Informed, Everywhere — Slack, Email, Google Sheets" loading="lazy" decoding="async" /></div>
              <div className={styles.spotlightText}>
                <p className={styles.sectionEyebrow}>Integrations</p>
                <h3>Stay Informed, Everywhere.</h3>
                <p>Connect your store to Slack, Google Sheets, and Email. Get instant team alerts anywhere, automated historical data logs, and professionally branded notifications delivered on cue.</p>
              </div>
            </div>
            <div className={`${styles.spotlightRow} ${styles.spotlightReverse} ${styles.anim}`} data-anim>
              <div className={styles.spotlightImg}><img src="/asets/5@2x.png" alt="Tailored to Your Brand — White-label tools" loading="lazy" decoding="async" /></div>
              <div className={styles.spotlightText}>
                <p className={styles.sectionEyebrow}>White-Label</p>
                <h3>Tailored to Your Brand.</h3>
                <p>Advanced governance and white-label tools for high-volume stores. Custom Slack and Sheet branding, personalized sender emails, DNS verification, and 100% email delivery reached.</p>
              </div>
            </div>
            <div className={`${styles.spotlightRow} ${styles.anim}`} data-anim>
              <div className={styles.spotlightImg}><img src="/asets/6@2x.png" alt="Turn Store Data into Action — Use cases" loading="lazy" decoding="async" /></div>
              <div className={styles.spotlightText}>
                <p className={styles.sectionEyebrow}>Use Cases</p>
                <h3>Turn Store Data into Action.</h3>
                <p>Automatically alert staff on unfulfilled orders, flag high-risk orders before shipping, and auto-tag VIP customers to trigger personalized follow-up — all without manual effort.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section id="why" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`} data-anim>Why Teams Choose It</p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`} data-anim>Built for operators, not just dashboards</h2>
            <p className={`${styles.sectionSub} ${styles.anim}`} data-anim>Connected monitoring, automation, and follow-up.</p>
          </div>
          <div className={`${styles.featureGrid} ${styles.stagger}`} data-anim>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><Users style={{ width: 24, height: 24 }} /></div>
              <h3>Team Collaboration</h3>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> Task assignments</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Notes &amp; attachments</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Activity logs</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Role-based settings</li>
              </ul>
            </article>
            <article className={`${styles.card} ${styles.anim}`}>
              <div className={styles.cardIcon}><Zap style={{ width: 24, height: 24 }} /></div>
              <h3>Integrations &amp; Templates</h3>
              <ul className={styles.cardList}>
                <li><CheckCircle2 className={styles.checkIcon} /> Slack notifications</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Google Sheets</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Email alerts</li>
                <li><CheckCircle2 className={styles.checkIcon} /> Workflow templates</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionEyebrow} ${styles.anim}`} data-anim>Common Questions</p>
            <h2 className={`${styles.sectionTitle} ${styles.anim}`} data-anim>FAQ</h2>
          </div>
          <div className={`${styles.faqGrid} ${styles.stagger}`} data-anim>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>What does OpsPilot automate?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>Operational follow-up across orders, customers, products, inventory, checkouts, and scheduled workflows.</p>
            </details>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>Do I need technical knowledge?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>No. Use templates or the visual builder — no code needed.</p>
            </details>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>Can it alert outside Shopify?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>Yes. Slack, email, and Google Sheets integrations.</p>
            </details>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>Useful for teams?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>Yes — task assignments, notes, activity history, shared workflows.</p>
            </details>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>Can I test workflows?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>Yes. Run manually or test with latest payloads.</p>
            </details>
            <details className={`${styles.faqItem} ${styles.anim}`}>
              <summary className={styles.faqQ}><span>Templates available?</span><span className={styles.faqMarker}>+</span></summary>
              <p className={styles.faqA}>Yes. Built-in templates you can customize anytime.</p>
            </details>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.cta}>
          <h2 className={styles.anim} data-anim>Ready to automate your store?</h2>
          <p className={styles.anim} data-anim>Join merchants saving hours every week with OpsPilot.</p>
          <a className={`${styles.btnPrimary} ${styles.anim}`} data-anim href="#">
            Start with OpsPilot{" "}
            <ArrowRight style={{ width: 18, height: 18 }} />
          </a>
          <p className={`${styles.supportText} ${styles.anim}`} data-anim>
            Questions?{" "}
            <a href="mailto:support@opspilotflow.com">support@opspilotflow.com</a>{" "}
            &middot; <a href="#">Privacy</a>
          </p>
          <img
            src="/asets/8@2x.png"
            alt="Install OpsPilot on Shopify — Available now on the Shopify App Store"
            loading="lazy"
            decoding="async"
            className={styles.anim}
            data-anim
            style={{
              maxWidth: "38rem",
              width: "90%",
              margin: "2.5rem auto 0",
              display: "block",
              borderRadius: "var(--r-xl)",
              opacity: 0.9,
            }}
          />
        </section>

        <footer className={styles.footer}>
          <p>
            &copy; 2025 OpsPilot &middot; Built for Shopify merchants &middot;{" "}
            <a href="mailto:support@opspilotflow.com">support@opspilotflow.com</a>
          </p>
        </footer>
      </div>
    </>
  );
}
