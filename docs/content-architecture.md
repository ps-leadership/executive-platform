# Content Architecture & Intellectual Property Model

## 1. Purpose

The platform uses a controlled publishing model.

The objective is to demonstrate original thinking and executive capability publicly while protecting detailed frameworks, methodologies, operating models and proprietary work.

The website should communicate capability without unnecessarily exposing intellectual property.

---

# 2. Three-Level Content Model

```text
                 CONTENT DISCLOSURE MODEL

                         PUBLIC
                           │
                           ▼
                 ┌───────────────────┐
                 │ Level 1           │
                 │ Discovery         │
                 │                   │
                 │ Title             │
                 │ Category          │
                 │ Short excerpt     │
                 │ Why it matters    │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │ Level 2           │
                 │ Controlled Article│
                 │                   │
                 │ Argument          │
                 │ Context           │
                 │ Perspective       │
                 │ Selected insights │
                 │ Limited framework │
                 │ exposure          │
                 └─────────┬─────────┘
                           │
                           ▼
                       PRIVATE
                 ┌───────────────────┐
                 │ Level 3           │
                 │ Protected Work    │
                 │                   │
                 │ Full frameworks   │
                 │ Detailed models  │
                 │ Templates         │
                 │ Playbooks         │
                 │ Implementation    │
                 │ Sensitive examples│
                 └───────────────────┘


3. Public Website

The public site may expose:

Executive positioning
Leadership themes
High-level organizational capabilities
Selected professional impact
Public-safe experience
Articles
Research perspectives
Education
Selected credentials
Contact / booking

The public site should avoid exposing:

Internal organizational designs
Customer-specific information
Internal metrics
Confidential processes
Detailed operating models
Proprietary templates
Detailed implementation playbooks
Non-public company information

4. Article Publishing Model

Each article should contain only the amount of detail appropriate for public thought leadership.

Recommended public article structure:
Title
│
├── Context
│
├── Problem / Observation
│
├── Author's Perspective
│
├── Selected Insights
│
├── Practical Implication
│
└── Closing Perspective

The article does not need to disclose the complete underlying methodology.

5. Framework Protection

A framework may exist privately even when the public website references the topic.

Example:
PUBLIC
Customer Value & Health
        │
        ▼
Article discussing customer health,
adoption and value realization
        │
        ▼
PRIVATE
Customer Health Intelligence Model
        │
        ├── Full architecture
        ├── Dimensions
        ├── Scoring
        ├── Operating model
        ├── Implementation
        └── TemplatesPUBLIC
Customer Value & Health
        │
        ▼
Article discussing customer health,
adoption and value realization
        │
        ▼
PRIVATE
Customer Health Intelligence Model
        │
        ├── Full architecture
        ├── Dimensions
        ├── Scoring
        ├── Operating model
        ├── Implementation
        └── Templates

The public article demonstrates the author's thinking.

The private framework represents deeper intellectual capital.

6. Example: Operating Model Work

Public:

Operating Model & Transformation

Possible public description:

Designing practical operating models that turn complex organizational challenges into repeatable execution.

Private:

Detailed operating model
Governance mechanisms
Staffing model
Coverage model
Metrics
Processes
Tooling
Internal organizational details

The public site should not expose internal company terminology or proprietary implementation details.

7. Article Data Model

Article metadata is maintained in:

data/articles.ts

Example:
{
  slug: "example-article",
  title: "Example Article",
  excerpt: "Short public description.",
  date: "2026",
  category: "Leadership",
  readingTime: "4 min read",
  sourceUrl: "https://example.com",
  contentFile: "example-article.md",
}

The Markdown file contains the controlled public article.

8. Content Governance

Before publishing new material, check:

Public-safe
Is the information already publicly shareable?
Does it describe capability rather than confidential implementation?
Does it avoid customer-identifiable information?
Does it avoid internal metrics?
Does it avoid proprietary process details?
Intellectual property
Does the content reveal a complete framework?
Does it expose a reusable implementation method?
Does it include proprietary diagrams or templates?
Could another person reproduce the underlying work from the article alone?

If the answer is yes, move the detailed material into the private layer.

9. Long-Term Publishing Strategy

The platform should evolve from:

Articles
   ↓
Perspectives
   ↓
Demonstrated expertise
   ↓
Professional conversation
   ↓
Private deeper work

The objective is not maximum information disclosure.

The objective is maximum credibility with controlled disclosure.