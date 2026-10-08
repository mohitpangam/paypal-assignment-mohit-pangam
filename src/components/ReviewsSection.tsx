type Review = {
  initials: string
  name: string
  location: string
  category: string
  quote: string
}

const reviews: Review[] = [
  { initials: 'MM', name: 'Manish', location: 'Mumbai', category: 'Gaming console', quote: 'I like the way sharepal work and really enjoyed the ps4 will order again. Thanks sharepal' },
  { initials: 'RS', name: 'Rakesh', location: 'Mumbai', category: 'Trekking Gear', quote: 'Ordered 2 pair of shoes & 3 trekking poles. Shoes were in mint condition, very well cleaned and sanitized and so does the trekking poles. Delivery and pick-up was smooth.' },
  { initials: 'SJ', name: 'Shruti', location: 'Mumbai', category: 'Winter Wear', quote: 'Right from the time I saw their website, till i got my refund the entire experience with SharePal was brilliant. The product listing, prices, delivery, communication was excellent.' },
  { initials: 'AK', name: 'Amit', location: 'Delhi', category: 'Riding Gear', quote: 'Awesome experience. Please be the way you are. Received excellent clothes and shoes in washed and clean state. They looked like new ones.' },
  { initials: 'SB', name: 'S B', location: 'Kolkata', category: 'Camping Gear', quote: 'I would recommend anybody to use SharePal. The products were delivered on time and the service was very easy to use.' },
]

function ReviewCard({ review }: { review: Review }) {
  return <article className="review-card"><div className="review-rating"><b>G</b><span aria-label="5 out of 5 stars">★★★★★</span></div><p className="review-quote">&quot; {review.quote} &quot;</p><div className="review-author"><span className="review-avatar">{review.initials}</span><div><strong>{review.name}</strong><small>{review.location} • {review.category}</small></div></div></article>
}

export function ReviewsSection() {
  const repeatedReviews = [...reviews, ...reviews]
  return <section className="reviews-section" aria-labelledby="reviews-title">
    <div className="reviews-heading"><h2 id="reviews-title">Served more than <span>1 Lakh Orders</span></h2></div>
    <div className="review-marquee" aria-label="Customer reviews">
      <div className="reviews-track">{repeatedReviews.map((review, index) => <ReviewCard review={review} key={`${review.name}-${index}`} />)}</div>
    </div>
    <div className="stats-row"><div className="stat"><strong>250Cr<span>+</span></strong><small>Saved Together</small></div><div className="stat"><strong>4.5M Kg</strong><small>CO₂e Emissions Saved</small></div><div className="stat"><strong>100K<span>+</span></strong><small>Products In Circulation</small></div></div>
  </section>
}
