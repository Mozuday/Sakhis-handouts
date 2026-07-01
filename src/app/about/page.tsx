import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
            About Us
          </p>

          <h1 className="text-5xl font-medium md:text-7xl">
            Crafted With Love,
            <br />
            Made For Memories
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Sakhi's Handouts specializes in personalized gifts,
            photo frames and handcrafted keepsakes that turn
            cherished moments into lifelong memories.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-10">
            <h2 className="mb-6 text-3xl font-medium">
              Our Story
            </h2>

            <p className="leading-8 text-black/60">
              Every gift tells a story. At Sakhi's Handouts,
              we create meaningful personalized gifts that
              celebrate love, friendship, family and special
              milestones. From custom photo frames to unique
              gift hampers, each piece is designed with care
              and attention to detail.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#f5f0e8] p-10">
            <h2 className="mb-6 text-3xl font-medium">
              Our Mission
            </h2>

            <p className="leading-8 text-black/60">
              To help people express emotions through thoughtful,
              beautiful and personalized gifts that leave lasting
              impressions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e8] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8">
              <h3 className="mb-3 text-xl font-medium">
                Personalized
              </h3>
              <p className="text-black/60">
                Every product is uniquely crafted for you.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8">
              <h3 className="mb-3 text-xl font-medium">
                Premium Quality
              </h3>
              <p className="text-black/60">
                Beautiful materials and attention to detail.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8">
              <h3 className="mb-3 text-xl font-medium">
                Memorable Gifts
              </h3>
              <p className="text-black/60">
                Gifts that create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-black p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl">
            Let's Create Something Special
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Explore our collection of personalized gifts and
            create memories that last forever.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-black"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </main>
  );
}