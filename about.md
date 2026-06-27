# Portfolio Site — Product Requirements Document (PRD)

**Owner:** [You]
**Stack:** Existing fullstack Next.js repo (App Router)
**Status:** v1 draft
**Last updated:** 2026-06-21

---

## 0. The One Job of This Site

This site has exactly **one job**: convert a warm visitor — someone you've already reached out to, or who got a referral — into a freelance inquiry.

It is **not** a place to be discovered by strangers. It is **not** a blog. It is **not** a design showcase for other developers. It is a closing tool. Every decision below is measured against: *does this make a potential client more likely to contact you and trust you with money?*

If a feature doesn't serve that, it's out of scope for v1. No exceptions.

---

## 1. Why This Exists (Goal Anchor)

Freelance web dev is the most immediately actionable income lever in your financial plan. The portfolio is the **credibility asset you point prospects to** after you reach out to them. It is not the lead-generation engine — outreach is. This site removes the "is this person legit?" objection so outreach converts faster.

**This site is necessary but not sufficient. Ship it fast, then go message people.**

---

## 2. Success Metrics

The site is "working" only if it produces inquiries. Track these from day one:

| Metric | Target (first 90 days) | How to measure |
|---|---|---|
| Contact form submissions | ≥ 3 qualified inquiries | Form → email + simple log |
| Visitor → contact conversion | ≥ 5% of visitors who reach Contact | Analytics event |
| Lighthouse Performance | ≥ 90 mobile | Lighthouse CI / PageSpeed |
| Time to ship v1 | ≤ 7 evenings of work | Self-tracked |

If after sending the site to 20 outreach contacts you get zero replies, the problem is the *outreach or the offer*, not the site. Don't redesign the site in that case — fix the message.

---

## 3. Target Audience (DECIDE THIS — it changes everything)

You must pick a primary audience before building. The copy, projects, and positioning all hinge on it. Choose one as primary:

- **A. Indonesian SMEs / local businesses** — need a website, online presence, simple web app. Communicate in Bahasa, price in IDR, emphasize reliability and "I'll handle it for you."
- **B. Startups / product teams** — need a developer who ships features fast. Emphasize technical depth, Next.js/fullstack, speed.
- **C. International clients (Upwork/Contra/cold outreach)** — emphasize English, timezone, portfolio of polished work, USD pricing.

> **INPUT REQUIRED:** Which is primary? You can serve a secondary audience, but the homepage headline speaks to ONE. Defaulting to (A) or (C) given your USD savings goal — decide explicitly.

---

## 4. Information Architecture (v1)

Keep it to a **tight 4-page site** (or a single long scroll with anchor nav — your call, single-scroll is faster to ship):

1. **Home** — hook, what you do, proof, CTA
2. **Work** — 3–5 case studies (the most important page)
3. **Services** — what you sell, how engagement works
4. **Contact** — form + direct email + response-time promise

That's it. About can be a section on Home. No separate blog. No "resources." No newsletter.

---

## 5. Page Requirements

### 5.1 Home
- **Hero:** One-sentence value prop targeting your chosen audience (e.g., "I build fast, reliable web apps for [audience] — usually shipped in [timeframe]."). Primary CTA button → Contact.
- **Proof strip:** Logos or names of past clients/projects (even small ones), or "X projects shipped."
- **Selected work:** 3 case study cards linking to Work.
- **Services summary:** 3 short blocks.
- **About snippet:** 2–3 sentences + photo. Human, credible, not a life story.
- **Final CTA:** Repeat contact prompt at the bottom.

### 5.2 Work (most important page)
Each case study follows **Problem → Approach → Result**, not a tech brag:
- Client / project name (anonymize if needed: "An Indonesian logistics SME")
- The problem they had
- What you built and key decisions
- **The outcome** — ideally a number (faster load, more signups, revenue, hours saved). If you have no metrics, use a concrete qualitative result.
- 1–2 screenshots
- Tech stack (small, secondary)
- Link to live site if available

> **INPUT REQUIRED:** Pick your 3–5 strongest projects. For each, write down the problem and the result *before* you build the page. If a project has no story, drop it.

### 5.3 Services
- 2–4 clearly named offerings (e.g., "Landing page + CMS," "Fullstack web app," "Maintenance retainer").
- For each: what's included, rough timeline, and a price signal ("from IDR X" / "from $X"). Price signals filter out tire-kickers and save you time.
- How working together goes: brief → build → review → launch.

> **INPUT REQUIRED:** Your actual service list and starting prices. Vague "I do web stuff" loses to a competitor who names a price.

### 5.4 Contact
- Form: name, email, project type (dropdown), budget range (dropdown), message.
- Submission → email to you (via your email integration) + a confirmation state.
- Direct email shown as fallback.
- **Response promise:** "I reply within 24 hours." Then actually do it.

---

## 6. Core Features

| Feature | Priority | Notes |
|---|---|---|
| Responsive (mobile-first) | P0 | Most prospects open links on phones |
| Working contact form → email | P0 | This IS the conversion. Use Resend/Nodemailer or a form service |
| Case study pages (MDX) | P0 | MDX so content lives in repo, no CMS overhead |
| SEO meta + Open Graph | P0 | OG image matters when you paste the link in chat/email |
| Analytics | P1 | Vercel Analytics or Plausible — track contact conversion |
| Fast load (Lighthouse ≥90) | P1 | Optimize images, avoid heavy animation libs |
| Light/dark toggle, fancy animations | P2 / cut | Do not let this eat your week |

---

## 7. Tech Stack (you already have the repo)

- **Framework:** Next.js App Router (existing repo)
- **Styling:** Tailwind CSS (fastest to ship clean UI)
- **Content:** MDX for case studies — no database, no CMS for v1
- **Forms/email:** Resend or Nodemailer for form-to-email; or a hosted form endpoint
- **Deploy:** Vercel (free tier, instant)
- **Analytics:** Vercel Analytics (zero-config) or Plausible
- **Domain:** Buy a real domain (`yourname.dev` / `.com`). A `.vercel.app` URL undercuts the credibility this site exists to build.

> **INPUT REQUIRED:** Domain name. Buy it before launch.

---

## 8. Non-Functional Requirements
- **Performance:** Lighthouse mobile ≥ 90 (Performance, SEO, Accessibility).
- **Accessibility:** Semantic HTML, alt text, keyboard-navigable, sufficient contrast.
- **SEO:** Per-page title/description, OG image, sitemap, robots.txt.
- **Reliability:** Form must never silently fail — test the email path before launch.

---

## 9. Explicitly OUT OF SCOPE for v1
Cutting these is the whole point. Add later only if a real client asks:
- Blog / articles / "resources"
- Newsletter signup
- CMS / admin dashboard
- Multi-language toggle (pick ONE language for v1 based on audience)
- Elaborate animations, 3D, custom cursors, page-transition libraries
- Testimonial carousel (a static quote is fine)
- Dark/light theme toggle

---

## 10. Content Inputs You Owe Yourself (do this first, before code)
Open a notes file and fill these in **before** writing any component. Missing content is the #1 reason portfolio sites never ship:

- [ ] Primary audience chosen (Section 3)
- [ ] 3–5 projects, each with Problem / Approach / Result written out
- [ ] 1–2 screenshots per project
- [ ] Services list with starting prices
- [ ] Hero headline (one sentence)
- [ ] About snippet (2–3 sentences) + a usable photo
- [ ] At least 1 testimonial/quote if you can get one (ask a past client today)
- [ ] Domain name purchased
- [ ] Your contact email for the form

If you can't fill a slot, that section gets cut, not faked.

---

## 11. Milestones (target: 7 evenings)

| Day | Deliverable |
|---|---|
| 1 | Content inputs (Section 10) fully written. No code. |
| 2 | Layout, nav, Home hero + sections scaffolded in existing repo |
| 3 | Work page + MDX case study template, 1 case study done |
| 4 | Remaining case studies + Services page |
| 5 | Contact form + email integration, tested end-to-end |
| 6 | SEO, OG image, analytics, mobile/Lighthouse pass |
| 7 | Buy domain, deploy to Vercel, ship |

**Day 8 is not "polish day." Day 8 is "send the link to 10 past contacts" day.**

---

## 12. Definition of Done (v1)
The site ships when:
- All 4 pages/sections are live on a real domain
- Contact form successfully delivers a test email to your inbox
- Lighthouse mobile ≥ 90
- Renders correctly on a phone
- You have a list of ≥ 10 people to send the link to

Not when it's "perfect." It will never be perfect. It needs to be *sent*.

---