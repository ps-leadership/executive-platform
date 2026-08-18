# Priyanshu Shrivastava — Executive Platform Architecture

## 1. Purpose

The website is designed as an executive platform rather than a traditional resume website.

Its purpose is to present:

- Executive positioning
- Leadership experience
- Organizational and transformation capability
- Selected professional impact
- Thought leadership
- Articles and research
- Resume and credentials
- A controlled path for professional engagement

The architecture is intentionally simple so that the platform can evolve without requiring major restructuring.

---

# 2. Experience Architecture

```text
                    PUBLIC EXECUTIVE PLATFORM
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
   POSITIONING             EVIDENCE              THINKING
       │                      │                      │
       ├─ Hero                ├─ What I Build       ├─ Insights
       ├─ Executive Profile   ├─ Selected Impact    ├─ Articles
       └─ Experience          └─ Resume             └─ Research
                                                        │
                                                        ▼
                                               CONTROLLED CONTENT
                                                        │
                                      ┌─────────────────┴──────────────┐
                                      │                                │
                                Public article                    Protected IP
                                ─────────────                    ────────────
                                Context                          Full frameworks
                                Perspective                      Models
                                Selected insight                 Playbooks
                                                                 Implementation

# 3. Primary User Journey
Visitor
   │
   ▼
Homepage
   │
   ├── Who is Priyanshu?
   │
   ├── What does he build?
   │
   ├── What impact has he had?
   │
   ├── How does he think?
   │
   └── What has he done?
          │
          ├── Executive Profile
          ├── Resume
          ├── Insights
          └── Contact / Book Time


# 4. Technical Architecture

Next.js Application
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── HeroVisual.tsx
│   ├── FeaturedThinking.tsx
│   ├── FrameworkLibrary.tsx
│   └── Footer.tsx
│
├── data/
│   ├── articles.ts
│   └── articles/
│       └── *.md
│
├── public/
│   └── images/
│
└── docs/
    ├── site-architecture.md
    └── content-architecture.md


    5. Shared Application Layer
    Root Layout
│
├── Navbar
│
├── Page Content
│
└── Footer

6. Article Architecture

data/articles.ts
       │
       ├── slug
       ├── title
       ├── excerpt
       ├── date
       ├── category
       ├── readingTime
       ├── sourceUrl
       └── contentFile
              │
              ▼
      data/articles/*.md
              │
              ▼
      /insights/[slug]


      7. Design Principles
Separation of content and presentation

Article content is stored separately from React components.

Reusable components

Visual patterns should be implemented as reusable components rather than duplicated page code.

Data-driven content

Where possible, lists should be generated from structured data rather than manually duplicated in multiple components.

Public-safe by default

Internal company information, customer information and proprietary operating models should not be exposed through the public platform.

Progressive disclosure

The homepage provides enough information to establish credibility without exposing every detail.

8. Future Extensions

The architecture is intentionally prepared for:

Executive Resume
Credentials
Certificate verification
Booking
Private analytics
Additional article categories
Controlled framework publishing
Private portfolio material
Social/profile integrations