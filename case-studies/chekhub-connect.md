## Chekhub Connect — Vendor Portal

### Expanding a mission-critical operations platform into a multi-organization vendor system

0→1 product connecting dispatch, compliance, execution, and invoicing across organizations.

Designed end-to-end as the sole product designer in close partnership with engineering.

*In active development.*

`[VISUAL: Hero composite — client dashboard + vendor portal connected by a shared work order]`

---

### Overview

#### Role

Sole product designer responsible for:

- Product direction
- System design
- IA and workflows
- Discovery synthesis
- Front-end requirements
- Design QA

#### Scope

- Two-sided enterprise workflow platform
- 7 core vendor-facing surfaces
- Full work-order-to-invoice lifecycle
- Multi-org permissions and compliance workflows

---

### Approach

### How I worked

- **System-first design:** Defined the bidirectional architecture before moving to screens. Early decisions focused on permissions, lifecycle ownership, and cross-organization workflows.
- **Tight design–engineering collaboration:**  Co-led discovery with lead dev. Discovery and implementation progressed in parallel. Flows and interaction models were validated directly against backend and operational constraints.
- **Cross-functional alignment:** Regular design presentations with our client's accounting, finance, and operations teams.
- **AI-augmented and code-aware.** Claude AI, Claude Code, and Figma MCP for early rapid ideation, prototyping directly in our codebase, and including front end code in handoff.

---

### Challenge

Chekhub is a B2B SaaS platform for mission-critical operations teams managing data center infrastructure and field service workflows.

As enterprise clients expanded usage, vendor coordination became the operational gap.

External vendors were still managed through:

- email
- spreadsheets
- phone calls
- disconnected legacy systems

Clients attempted to coordinate vendor dispatch inside their own Chekhub environments, but the platform lacked a true cross-organization workflow model.

This created several operational problems:

- fragmented dispatch coordination
- limited visibility across organizations
- difficult-to-scale compliance management
- disconnected billing and operational records

**I led product design to expand Chekhub from a client-side operations platform into a shared vendor management system.** 

The challenge was not simply building a vendor portal, but designing a shared operational system that allowed clients and vendors to collaborate on the same work while maintaining:

- scoped permissions
- operational flexibility
- multi-client vendor support
- consistent lifecycle tracking

`[VISUAL: Before/after architecture diagram — isolated orgs → connected orgs sharing tickets, billing, documents]`

---

### Process & Product Definition

Multiple enterprise clients were consolidating workflows from multiple legacy systems into Chekhub, including:

- dispatch coordination
- SLA tracking
- onboarding
- compliance
- invoicing
- vendor billing

Most workflows were directionally aligned, but diverged in critical operational details—particularly around international compliance and billing requirements.

I co-led weekly discovery sessions with the lead developer and client stakeholders to:

- map current operational workflows
- identify system conflicts and edge cases
- define ownership boundaries
- determine which workflows should standardize vs remain configurable

Clients regularly walked us through their existing systems and operational processes.

**My role was to translate those fragmented workflows into a scalable product model that could support multiple organizations without favoring a single client's existing workflow.**

Key artifacts included:

- workflow diagrams
- lifecycle mapping
- onboarding and permissions models
- functional requirements
- interactive prototypes

**The product direction and front-end system behavior were primarily defined through this process.**

`[VISUAL: Whiteboard/workflow synthesis artifacts → system architecture evolution]`

---

### System Design Decisions

### 1. Per-connection configurability

The core architectural decision was treating each client–vendor relationship as its own configurable connection.

This allowed the system to support:

- different onboarding requirements
- domestic vs international workflows
- client-specific billing rules
- varying compliance requirements
- shared vendors across multiple organizations

Rather than enforcing a single operational model, the platform standardized the framework while allowing flexibility at the relationship layer.

`[VISUAL: Same vendor → multiple configurable client relationships]`

### 2. Shared work-order model

The work order became the shared operational boundary between organizations.

It centralized:

- dispatch
- SLA tracking
- compliance
- documentation
- billing
- permissions

This created a single operational record across both sides of the workflow.

### 3. Distinct operational surfaces

Both sides operated against the same system state, but required different operational experiences.

- **Client side** → operational oversight and configuration
- **Vendor side** → execution, dispatch, and multi-client coordination

`[VISUAL: Client view vs vendor view]`

### 4. Parallel onboarding

Onboarding requirements existed on both sides of the relationship.

The onboarding system:

- allowed both sides to contribute requirements
- shared progress across organizations
- gated activation on mutual completion

This significantly reduced fragmented onboarding coordination.

### 5. Multi-client vendor workflows

To avoid portal fragmentation for vendors:

- work orders consolidated into a unified queue
- compliance documents could be reused across clients
- global defaults supported connection-level overrides

These workflows received particularly strong validation during client reviews.

`[VISUAL: Unified vendor queue across organizations]`

---

### Product Outcome

The final product expanded Chekhub from a client-only operations platform into a shared vendor operations system.

The MVP included:

- configurable client–vendor connections
- dedicated vendor operations portal
- shared dispatch-to-invoice workflows
- parallel onboarding and compliance tracking
- consolidated vendor document management

#### Vendor portal surfaces

- Tickets
- Calendar
- Documents
- Billing
- Teams
- Connections
- Settings

I also produced a detailed functional overview and customer-facing system specification used to align stakeholders across product, engineering, operations, and client teams.

`[VISUAL: Vendor portal navigation + lifecycle architecture]`

---

### Impact

### Current state

- Defined the operational foundation for Chekhub's vendor workflow expansion
- Consolidated fragmented operational workflows into a unified system model
- Established a scalable configuration framework supporting domestic and international operations
- Aligned product direction, backend architecture, and client workflows ahead of rollout
- Design, engineering, and testing progressed in parallel across all sprint phases

### Next milestone

Initial production rollout scheduled for June 2026.

---

### Reflection

### What worked

The per-connection configuration model prevented the system from becoming client-specific while still supporting operational variability.

That decision became the foundation for scalability across organizations.

### What I'd improve

Vendor-side decisions were informed primarily through client and internal operational inputs rather than direct vendor interviews.

While the underlying system model likely remains correct, additional vendor conversations may have improved interface-level decisions and operational prioritization.

### Key takeaway

"Mostly compatible" workflows are often more dangerous than completely different ones.

The complexity emerges at the operational edges, where rigid standardization quietly breaks real-world processes.
