export default function ShippingPolicyPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
          Shipping & Delivery
        </p>

        <h1 className="mb-12 text-5xl font-medium">
          Shipping Policy
        </h1>

        <div className="space-y-10 leading-8 text-black/70">
          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Order Processing
            </h2>

            <p>
              Every order is customized specifically for you.
              Orders are usually processed within 2–5 business days
              after payment confirmation and receipt of all
              customization details.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Delivery Timeline
            </h2>

            <p>
              Delivery times vary depending on your location.
              Most orders are delivered within 3–10 business days
              after dispatch.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Shipping Charges
            </h2>

            <p>
              Shipping charges, if applicable, will be displayed
              during checkout or communicated before order
              confirmation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Tracking Information
            </h2>

            <p>
              Once your order is shipped, tracking details will be
              shared through WhatsApp, email, or SMS whenever
              available.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Delays
            </h2>

            <p>
              Delivery timelines may occasionally be affected by
              courier delays, weather conditions, holidays, or
              other circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-medium text-black">
              Damaged Packages
            </h2>

            <p>
              If your order arrives damaged, please contact us
              within 48 hours of delivery with photos of the
              package and product so we can assist you.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}