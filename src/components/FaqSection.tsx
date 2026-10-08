import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How can I rent from SharePal?',
    answer: 'Renting from SharePal is quick and easy. You can browse the products, select your dates and add them to cart and checkout. You can choose to pay online or upon delivery.',
  },
  {
    question: 'If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?',
    answer: 'No, partial extension is not possible, all the products that are rented in that particular order have to be extended.',
  },
  {
    question: 'When does the rental start?',
    answer: 'The rental starts from the following day of the delivery day and ends a day prior to the return date. So for example, if you select the delivery date as 5th June and return date as 8th June. The rental is charged for 2 days.',
  },
  {
    question: 'What will be the condition of the products at the time of delivery?',
    answer: 'At SharePal.in, we make sure that the products you receive are in great condition upon delivery. We thoroughly inspect and clean each item before sending it your way. If you ever face any issues, our friendly customer support team is here to help. Your satisfaction matters to us the most!',
  },
  {
    question: 'Why is verification required?',
    answer: 'Profile verification is a crucial step at SharePal.in to ensure the safety and security of our platform and users. It helps us confirm the identity of our users, prevent fraud, and maintain a secure environment for everyone involved.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return <section className="faq-section" aria-labelledby="faq-title">
    <h2 id="faq-title">Frequently Asked Questions (FAQs)</h2>
    <div className="faq-list">
      {faqs.map((faq, index) => <div className={`faq-item ${openIndex === index ? 'is-open' : ''}`} key={faq.question}>
        <button className="faq-question" type="button" aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
          <span>{faq.question}</span><ChevronDown size={22} />
        </button>
        {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
      </div>)}
    </div>
    <button className="faq-more-button" type="button">View more FAQ&apos;s</button>
  </section>
}
