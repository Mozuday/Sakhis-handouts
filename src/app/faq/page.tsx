import Link from "next/link";

const faqs = [
  {
    question: "How long does customization take?",
    answer:
      "Most personalized orders are prepared within 2–5 business days depending on the complexity of the design.",
  },
  {
    question: "Can I upload multiple photos?",
    answer:
      "Yes. You can upload multiple photos during checkout. We will use them according to the selected product design.",
  },
  {
    question: "Do you offer custom designs?",
    answer:
      "Absolutely. If you have a specific idea or theme in mind, contact us and we'll work with you to create something unique.",
  },
  {
    question: "Can I place a bulk order?",
    answer:
      "Yes. We accept bulk and corporate gifting orders. Please contact us directly for pricing and timelines.",
  },
  {
    question: "Will I see a preview before production?",
    answer:
      "For certain products, design previews may be shared before final production. This depends on the product and customization requested.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure online payments through our payment partners. Available options may vary over time.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Because products are personalized, cancellations may not be possible once production has started.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us through WhatsApp, Instagram, email, or the Contact page.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
            Support
          </p>

          <h1 className="text-5xl font-medium md:text-7xl">
            Frequently Asked
            <br />
            Questions
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-black/60">
            Everything you need to know about ordering,
            customization, delivery, and support.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[32px] border border-[#e8dfd2] bg-white p-8"
            >
              <h2 className="text-xl font-medium">
                {faq.question}
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-black p-12 text-center text-white">
          <h2 className="text-4xl font-medium">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-white/70">
            We're always happy to help with custom orders,
            personalization requests, and product inquiries.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-black"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}