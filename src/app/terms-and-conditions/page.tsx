export default function TermsPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
          Legal
        </p>

        <h1 className="mb-12 text-5xl font-medium">
          Terms & Conditions
        </h1>

        <div className="space-y-10 leading-8 text-black/70">
          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Orders
            </h2>

            <p>
              By placing an order with Sakhi's Handouts, you agree
              to provide accurate information required for product
              customization and delivery.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Personalized Products
            </h2>

            <p>
              Our products are customized according to the details,
              photos, and messages provided by the customer. Please
              review all submitted information carefully before
              completing your purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Pricing & Payments
            </h2>

            <p>
              All prices are listed in Indian Rupees (INR). Payment
              must be completed before production of customized
              products begins.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Cancellations & Refunds
            </h2>

            <p>
              Due to the personalized nature of our products,
              cancellations or refunds may not be available once
              production has started. Refund requests will be
              evaluated on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Delivery
            </h2>

            <p>
              Delivery timelines are estimates and may vary based
              on customization requirements, courier services, and
              location.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Limitation of Liability
            </h2>

            <p>
              Sakhi's Handouts shall not be liable for delays,
              damages, or losses caused by circumstances beyond our
              reasonable control, including shipping carrier delays
              and force majeure events.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Changes to Terms
            </h2>

            <p>
              We reserve the right to modify these Terms &
              Conditions at any time. Updated terms will be posted
              on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}