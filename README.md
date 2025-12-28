# Stacks Vault & Escrow

> A conceptual and philosophical foundation before code

---

## 1. Background — How This Started

This project began from an exploration of the **Stacks blockchain**:
its relationship to Bitcoin, its security posture, and its unique position as a smart contract layer anchored to Bitcoin finality.

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

### Priority 0 — Product Posture Constitution

Define unchangeable principles:

- Permanence vs presentation
- Private-by-default behavior
- Honest publish / unpublish semantics
- Explicit human intervention

✅ Completed

---

### Priority 1 — Conceptual Architecture

Define the system layers and their responsibilities:

- On-chain protocol layer (immutable truth)
- Off-chain service layer (replaceable convenience)
- Human and governance layer (explicit authority)

Define failure tolerance and dependency boundaries.

✅ Completed

---

### Priority 2 — Use-Case Flows

Describe the system from a human point of view:

- Creating, verifying, sharing, publishing, and unpublishing proofs
- Creating, funding, settling, disputing, and rescuing escrows

No UI or code assumptions are made at this stage.

✅ Completed

---

### Priority 3 — Trust & Power Boundaries

> Who can do what — and what can never be done

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

### Priority 4+ — Next Steps (Upcoming)

- Infrastructure posture and failure modes
- Operational risks and human burden
- Technical architecture and contract design
- UI skeletons and deployment strategy

⏳ Upcoming

---

## 5. Repository Structure (Planned)

```txt
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

