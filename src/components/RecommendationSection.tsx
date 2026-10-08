export function RecommendationSection() {
  return <section className="recommendation-section" aria-labelledby="recommendation-title">
    <h2 id="recommendation-title">Can&apos;t find what you&apos;re looking for?</h2>
    <form className="recommendation-form" onSubmit={(event) => event.preventDefault()}>
      <label>
        <span>Tell us what gear we should launch next</span>
        <input type="text" placeholder="Enter product name" />
      </label>
      <label>
        <span>What will you use this for?</span>
        <input type="text" placeholder="e.g. trekking trip, weekend gaming, party" />
      </label>
      <button type="submit">Submit Recommendation</button>
    </form>
  </section>
}
