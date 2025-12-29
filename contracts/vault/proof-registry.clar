;; Proof Registry (MVP)
;; - Private by default
;; - Publish/unpublish controls discovery only
;; - Stores file hash + receipt URI (permanent storage reference)
;; - Immutable facts (hash/created-at) never change

(define-constant ERR_NOT_FOUND u404)
(define-constant ERR_NOT_OWNER u401)
(define-constant ERR_INVALID_ID u400)

(define-data-var next-id uint u1)

(define-map proofs
  { id: uint }
  {
    owner: principal,
    file-hash: (buff 32),
    receipt-uri: (string-ascii 256),
    created-at: uint,
    published: bool
  }
)

(define-private (is-valid-id (id uint))
  (>= id u1)
)

(define-read-only (get-next-id)
  (var-get next-id)
)

(define-read-only (get-proof (id uint))
  (map-get? proofs { id: id })
)

(define-read-only (is-owner (id uint) (who principal))
  (match (map-get? proofs { id: id })
    proof (is-eq who (get owner proof))
    false
  )
)

(define-public (create-proof (file-hash (buff 32)) (receipt-uri (string-ascii 256)))
  (let ((id (var-get next-id))
        (now block-height))
    (begin
      (var-set next-id (+ id u1))
      (map-set proofs
        { id: id }
        {
          owner: tx-sender,
          file-hash: file-hash,
          receipt-uri: receipt-uri,
          created-at: now,
          published: false
        }
      )
      (print { event: "proof_created", id: id, owner: tx-sender, created-at: now })
      (ok id)
    )
  )
)

(define-public (publish (id uint))
  (begin
    (asserts! (is-valid-id id) (err ERR_INVALID_ID))
    (match (map-get? proofs { id: id })
      proof
        (begin
          (asserts! (is-eq tx-sender (get owner proof)) (err ERR_NOT_OWNER))
          (map-set proofs
            { id: id }
            (merge proof { published: true })
          )
          (print { event: "proof_published", id: id, owner: tx-sender })
          (ok true)
        )
      (err ERR_NOT_FOUND)
    )
  )
)

(define-public (unpublish (id uint))
  (begin
    (asserts! (is-valid-id id) (err ERR_INVALID_ID))
    (match (map-get? proofs { id: id })
      proof
        (begin
          (asserts! (is-eq tx-sender (get owner proof)) (err ERR_NOT_OWNER))
          (map-set proofs
            { id: id }
            (merge proof { published: false })
          )
          (print { event: "proof_unpublished", id: id, owner: tx-sender })
          (ok true)
        )
      (err ERR_NOT_FOUND)
    )
  )
)
