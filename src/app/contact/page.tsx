import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
            Contact Us
          </p>

          <h1 className="text-5xl font-medium md:text-7xl">
            We'd Love To
            <br />
            Hear From You
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-black/60">
            Have a custom idea or need assistance with your order?
            Get in touch and we'll be happy to help.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {/* Contact Info */}

          <div className="space-y-6">
            <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-8">
              <Phone className="mb-4 text-[#c79a4a]" />

              <h3 className="text-xl font-medium">
                Phone / WhatsApp
              </h3>

              <p className="mt-2 text-black/60">
                +91 72062 75809
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-8">
              <Mail className="mb-4 text-[#c79a4a]" />

              <h3 className="text-xl font-medium">
                Email
              </h3>

              <p className="mt-2 text-black/60">
                sakhishandout@gmail.com
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-8">
              <MapPin className="mb-4 text-[#c79a4a]" />

              <h3 className="text-xl font-medium">
                Location
              </h3>

              <p className="mt-2 text-black/60">
                Shiv Nagar, Panipat, Haryana 132103
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}