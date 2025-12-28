# Stacks Vault & Escrow

> A conceptual and philosophical foundation before code

---

## 1. Background — How This Started

This project began from an exploration of the **Stacks blockchain**:  
Its relationship to Bitcoin, its security posture, and its unique position as a smart contract layer anchored to Bitcoin finality.

The initial question was simple but fundamental:

> _What are the strengths of Stacks compared to other blockchains, and what kind of simple but meaningful dApps could be built that truly reflect those strengths?_

From that exploration, two ideas emerged as both **technically aligned** with Stacks and **philosophically aligned** with Prof. NOTA’s worldview:

1. A **Proof Vault** — for recording immutable proof-of-existence.
2. A **Micro Escrow** — for small-value agreements using Bitcoin-derived assets.

From there, the conversation deliberately moved away from hype and features, and toward **honesty, permanence, responsibility, and explicit human intervention where it truly matters**.

---

## 2. Purpose — Why This Is Being Built

This project is not merely about shipping smart contracts.

Its purpose is to:

- Build tools that **acknowledge permanence** instead of pretending data can be erased.
- Separate **truth (on-chain facts)** from **presentation (what is shown or hidden)**.
- Allow humans to choose **when to be public and when to be private**.
- Accept that some systems **must include human judgment** (disputes, emergencies).
- Remain usable even if off-chain infrastructure temporarily disappears.

In short:

> _What has happened cannot be deleted.
> It can only be hidden, denied (unpublished),
> or shown, acknowledged (published)._

This principle underpins both applications.

---

## 3. What Will Be Built — The Two Applications

### 3.1 Stacks Proof Vault

**Stacks Proof Vault** is a personal-first proof-of-existence system.

- Users create cryptographic proofs of files.
- Proofs are **private by default**.
- Proofs are immutable once recorded.
- Receipt images are stored with **permanent, one-time-paid storage**.
- Users may **publish** a proof to a public directory.
- Users may later **unpublish** it.

Unpublishing removes the proof from public discovery,
but never deletes the fact that the proof exists.

The Vault is designed as:

> **A private vault with optional public exhibition — never a public wall by default.**

---

### 3.2 Stacks sBTC Micro-Escrow

**Stacks Micro-Escrow** is a lightweight escrow system for small-value agreements using sBTC.

- Escrows can be created, funded, and completed automatically.
- Funds are locked and released by smart contracts.
- Normal transactions require no human intervention.
- **Disputes are a premium feature**, intentionally limited in volume.
- Disputes require human arbitration.
- A dual-mode emergency admin system exists.

The Escrow acknowledges that:

> Some conflicts cannot be solved by code alone,
> but humans should not interfere unless necessary.

---

## 4. How This Project Will Be Built — High-Level Steps

This project follows a **deliberate, layered approach**, not a code-first one.

### 4.1 Priority 0 — Product Posture Constitution

Define unchangeable principles:

- Permanence vs presentation
- Private-by-default behavior
- Honest publish / unpublish semantics
- Explicit human intervention

✅ Completed

---

### 4.2 Priority 1 — Conceptual Architecture

Define the system layers and their responsibilities:

- On-chain protocol layer (immutable truth)
- Off-chain service layer (replaceable convenience)
- Human and governance layer (explicit authority)

Define failure tolerance and dependency boundaries.

✅ Completed

---

### 4.3 Priority 2 — Use-Case Flows

Describe the system from a human point of view:

- Creating, verifying, sharing, publishing, and unpublishing proofs
- Creating, funding, settling, disputing, and rescuing escrows

No UI or code assumptions are made at this stage.

✅ Completed

---

### 4.4 Priority 3 — Trust & Power Boundaries

Who can do what — and what can never be done

After defining posture, architecture, and user flows, **Priority 3 locks the trust model of the system**.

This step exists to prevent silent centralization, accidental overreach, and false assumptions of “trustlessness.”

The system follows four non-negotiable principles:

1. **Power exists, but it is bounded**
2. **Human intervention is explicit, not implicit**
3. **No role can rewrite on-chain truth**
4. **Speed and legitimacy are separated**

#### Roles in the system

- **User**: controls visibility of their own proofs and normal escrow actions
- **Public Viewer**: observes published data only
- **Arbiter**: resolves disputes within a strictly limited scope
- **Admin (dual mode)**:

  - Fast emergency admin for immediate damage control
  - Slow multisig admin for governance and legitimacy

#### Core boundaries

- No role can delete or alter on-chain facts
- Users control discovery, not truth
- Arbiters control disputed funds only
- Emergency admin can pause or rescue, not redesign or confiscate
- Governance is slow, visible, and accountable

> The system recognizes a simple truth:
> machines handle certainty, humans handle exceptions.

✅ Completed

---

### 4.5 Priority 4 — Infrastructure Posture & Failure Modes

What must survive, what may fail, and how the system degrades

Priority 4 defines how infrastructure supports the protocol **without becoming its authority**.

The system follows four infrastructure principles:

1. **Truth outlives infrastructure**
2. **Convenience is replaceable**
3. **Permanence is intentional**
4. **Graceful degradation is preferred to downtime**

#### Data Classification

The system separates data into three categories:

- **On-chain immutable data**
  Proof hashes, timestamps, ownership, and escrow states.
  These must survive any off-chain failure.

- **Permanent off-chain data**
  Receipt images stored with one-time-paid, permanent storage.
  Gateways may fail; the data itself remains referenced.

- **Mutable off-chain services**
  Indexing, discovery, search, cache layers, and dispute interfaces.
  These are replaceable conveniences.

#### Indexing Strategy

- The system relies on **public indexing infrastructure plus local caching**.
- Only **published proofs** are indexed for discovery.
- Private proofs remain accessible only by the owner or a direct link/ID.

This choice minimizes operational burden while preserving product clarity.

#### Failure Scenarios (Expected Behavior)

- **Indexer unavailable**
  Proof creation and verification continue; discovery temporarily disappears.

- **Receipt gateway unavailable**
  Images may not display; proof validity remains unaffected.

- **Admin unavailable**
  Normal escrow flows continue; disputes queue; emergencies cannot be handled.

- **Network congestion**
  Transactions slow down transparently without semantic changes.

In all cases:

> Infrastructure failure reduces convenience, not truth.

#### Infrastructure Hard Limits

Infrastructure will never:

- Delete proofs
- Rewrite history
- Override on-chain rules
- Silently decide disputes

Infrastructure serves the protocol — it does not govern it.

✅ Completed

---

### 4.6 Priority 5 — Operational Risks & Burdens

What costs human attention, and how the system remains sustainable

Priority 5 defines the **human cost** of running the system.
This step exists to ensure the project remains operable **without exhausting its operators** and without creating invisible obligations.

The system accepts a fundamental truth:

> Human attention is finite.
> A good system protects it.

#### Operational Principles

The system follows four operational principles:

1. **Human attention is scarce**
2. **No invisible obligations exist**
3. **Queues are preferred over urgency**
4. **All human responsibility is bounded**

If an operation requires continuous human presence, it is considered a design failure.

#### Moderation — Proof Vault & Receipt Images

Because receipt images are stored permanently, moderation is handled **only at the presentation layer**.

**What the system does:**

- Removes problematic items from public discovery
- Allows reporting of publicly published content
- Prevents re-promotion of flagged items

**What the system does not do:**

- Delete on-chain facts
- Retract permanent data
- Actively moderate private vault content

Moderation controls visibility, **not history**.

#### Dispute Operations — Premium by Design

Disputes are intentionally rare and valuable.

- Only premium escrows can enter a dispute
- Disputes are asynchronous and queue-based
- Arbitrators are not bound by real-time SLAs
- Decisions are final within their defined scope

Slow resolution is treated as an intentional design choice, not a failure.

#### Emergency Operations — Rare and Explicit

Emergency authority exists solely to prevent systemic damage.

- Fast admin may pause or contain issues
- Multisig governance handles legitimacy and correction
- All emergency actions are visible and traceable

Emergency powers are safeguards, not managerial tools.

#### Monitoring — Minimum Viable Awareness

The system monitors only what is necessary:

- Public index availability
- Critical escrow errors
- Unusual transaction activity

It explicitly avoids behavioral surveillance or always-on human monitoring.

#### Expectation Management

Users are informed upfront that:

- Disputes are not instant
- Infrastructure may temporarily degrade
- Humans intervene only during exceptions

The system does not promise:

- Perfect uptime
- Instant arbitration
- Absolute trustlessness without human roles

Honest expectations are part of system safety.

#### Burnout Prevention

The system is designed so that:

- No role requires 24/7 availability
- No emergency is handled silently
- No single operator carries all responsibility

If the system requires constant vigilance, it has failed by design.

#### One-Line Operational Test

If asked:

> _“Can this system operate without consuming a human life?”_

The correct answer must be:

> **Yes — because humans enter the system only when exceptions arise.**

✅ Completed

---

### 4.7 Priority 6 — Enforcement Checklists

Translating posture into enforceable rules

Priority 6 converts infrastructure posture (Priority 4) and operational safeguards (Priority 5) into **explicit enforcement rules**.

This section exists to ensure that earlier decisions are not quietly violated during implementation, iteration, or scaling.

If a rule in this checklist is broken,
the system is considered **out of posture**, not merely “buggy.”

#### Global Enforcement Rules

- On-chain data is always the single source of truth
- Off-chain infrastructure may enhance usability, but never redefine facts
- All failures must degrade functionality, not validity
- No convenience feature may compromise permanence or trust boundaries

#### Proof Vault Enforcement

Proof Creation

- Proof hashes are generated client-side
- Only hashes and minimal metadata are recorded on-chain
- All proofs default to PRIVATE visibility

Receipt Images

- Receipt images are stored using one-time-paid permanent storage
- Receipt images are treated as representations, not truth
- No mechanism exists to retract or delete stored receipt images

Visibility & Discovery

- Private proofs never appear in public discovery
- Publishing explicitly opts a proof into indexing and explore
- Unpublishing removes a proof from discovery only
- Link/ID-based sharing remains possible regardless of publish state

Indexing

- Public indexing infrastructure is the default
- Local caching is used for resilience
- Indexer failure must not block proof creation or verification

#### Micro-Escrow Enforcement

Normal Flow

- Escrow creation and completion require no human intervention
- Fund locking and release are fully programmatic

Dispute Flow

- Disputes are restricted to premium escrows
- Entering dispute freezes automatic settlement
- Dispute resolution actions are auditable and final within scope

#### Admin & Governance Enforcement

Fast Admin

- May pause operations during emergencies
- May execute temporary fund rescue
- Must leave a visible action trail

Fast admin may never:

- Rewrite protocol rules
- Permanently seize user funds
- Decide disputes on merit

Multisig Governance

- Required for upgrades and role changes
- Required to ratify or reverse emergency actions
- Designed to be slow, visible, and accountable

#### Operational Enforcement

Moderation

- Moderation affects discovery, not on-chain records
- Private vault content is never moderated

Dispute Operations

- Disputes are asynchronous by design
- No real-time SLA is promised

Emergency Operations

- Emergency powers exist solely for systemic risk mitigation
- All emergency actions are public

#### Burnout Prevention Rules

- No role requires 24/7 availability
- No alerts without explicit escalation criteria
- No single actor controls all critical system paths

If enforcement of a feature requires permanent human vigilance,
the feature must be redesigned or removed.

#### Final Enforcement Test

Every implementation decision must pass this test:

> **“If all off-chain infrastructure disappears, is truth still verifiable?”**

- If yes → the decision is valid
- If no → the decision violates system posture

---

## 7. Repository Structure (Planned)

```text
stacks-vault-and-escrow/
├── README.md        # This document
├── vault/           # Stacks Proof Vault project
└── escrow/          # Stacks Micro-Escrow project
```

Deployment plan:

- **Stacks Vault**

  - Root directory: `vault/`
  - Deployed as a dedicated Vercel project

- **Stacks Escrow**

  - Root directory: `escrow/`
  - Deployed as a dedicated Vercel project

---
