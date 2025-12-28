# Stacks Vault & Escrow

*A conceptual and philosophical foundation before code*

---

## 1. Background — How This Started

This project began from an exploration of the **Stacks blockchain**:  
Its relationship to Bitcoin, its security posture, and its unique position as a smart contract layer anchored to Bitcoin finality.

The initial question was simple but fundamental:

> *What are the strengths of Stacks compared to other blockchains, and what kind of simple but meaningful dApps could be built that truly reflect those strengths?*

From that exploration, two ideas emerged as both **technically aligned** with Stacks and **philosophically aligned** with Prof. NOTA’s worldview:

1. A **Proof Vault** — for recording immutable proof-of-existence.
2. A **Micro Escrow** — for small-value agreements using Bitcoin-derived assets.

From there, the conversation shifted away from hype or features, and toward **honesty, permanence, responsibility, and human intervention where it truly matters**.

---

## 2. Purpose — Why This Is Being Built

This project is not merely about shipping smart contracts.

Its purpose is to:

* Build tools that **acknowledge permanence** instead of pretending data can be erased.
* Separate **truth (on-chain facts)** from **presentation (what is shown or hidden)**.
* Allow humans to choose **when to be public and when to be private**.
* Accept that some systems **must include human judgment** (disputes, emergencies).
* Remain usable even if off-chain infrastructure temporarily disappears.

In short:

> *What has happened cannot be deleted.
> It can only be hidden, denied (unpublished),
> or shown, acknowledged (published).*

This principle underpins both applications.

---

## 3. What We Built — The Two Applications

### 3.1 Stacks Proof Vault

**Stacks Proof Vault** is a personal-first proof-of-existence system.

* Users create cryptographic proofs of files (documents, media, data).
* Proofs are **private by default**.
* Proofs are immutable once recorded.
* Receipt images are stored with **permanent, one-time-paid storage** (Arweave-like).
* Users may **publish** a proof to a public directory.
* Users may later **unpublish** it:

  * Unpublish removes the proof from public discovery.
  * The proof itself is never deleted and remains verifiable.

The Vault is designed as:

> **A private vault with optional public exhibition — never a public wall by default.**

---

### 3.2 Stacks sBTC Micro-Escrow

**Stacks Micro-Escrow** is a lightweight escrow system designed for trust-minimized transactions using sBTC.

* Escrows can be created, funded, and completed without human intervention.
* Funds are locked by smart contracts.
* Normal transactions settle automatically.
* **Disputes are a premium feature**, intentionally limited in volume.
* Disputes require human arbitration.
* An **emergency admin system** exists:

  * Fast single-admin actions for urgent containment.
  * Slow, role-based multisig for governance and ratification.

The Escrow acknowledges that:

> Some conflicts cannot be solved by code alone —
> but humans should not interfere unless necessary.

---

## 4. Product & System Posture (Locked Decisions)

Before writing any code, the following foundational decisions were locked.

### 4.1 Default Privacy Model

* All proofs are **private by default**.
* Users only see their own proofs unless they choose otherwise.
* Public access requires a conscious action (publish).

### 4.2 Publish / Unpublish Semantics

* Publish = include in public discovery (explore/search).
* Unpublish = remove from discovery.
* On-chain facts are never erased.

### 4.3 Storage Philosophy

* Receipt images use **permanent storage** (one-time payment).
* Indexing and discovery are **mutable and replaceable**.

### 4.4 Indexing Strategy

* Rely on **public indexing infrastructure + local cache** for as long as possible.
* Only published items are indexed for discovery.
* Private items remain accessible by owner or by direct link/ID.

### 4.5 Human Intervention

* Disputes are premium and human-driven.
* Emergency control exists but is bounded and accountable.
* Governance favors restraint over omnipotence.

---

## 5. How This Project We Built — High-Level Steps

This project follows a **deliberate, layered approach**, not a “code-first” one.

### Priority 0 — Product Posture Constitution

Define unchangeable principles:

* Permanence vs presentation
* Private by default
* Honest publish/unpublish semantics
* Human intervention boundaries

✅ Completed

---

### Priority 1 — Conceptual Architecture

Define the three layers:

* On-chain protocol layer
* Off-chain service layer
* Human/governance layer

Define responsibilities and failure tolerance.

✅ Completed

---

### Priority 2 — Use-Case Flows

Describe system behavior from a user’s point of view:

* Proof creation, verification, sharing, publishing, unpublishing
* Escrow creation, funding, completion, dispute, emergency handling

✅ Completed

---

### Priority 3+ — Next Steps (To Be Implemented)

* Trust & power boundaries
* Risk & operational burden analysis
* Technical architecture
* Contract design
* UI skeletons
* Deployment & upgrade strategy

⏳ Upcoming

---

## 6. Repository Structure (Planned)

The GitHub repository:

```
stacks-vault-and-escrow/
├── README.md        # This document
├── vault/           # Stacks Proof Vault project (back and front)
└── escrow/          # Stacks Micro-Escrow project (back and front)
```

Deployment plan:

* **Stacks Vault**

  * Repo: `stacks-vault-and-escrow`
  * Root directory: `/vault`
  * Deployed as a separate Vercel project

* **Stacks Escrow**

  * Repo: `stacks-vault-and-escrow`
  * Root directory: `/escrow`
  * Deployed as a separate Vercel project

---

