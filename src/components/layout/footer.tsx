import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8dfd2] bg-[#f8f3ec]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-medium">
              Sakhi's Handouts
            </h2>

            <p className="mt-4 leading-7 text-black/60">
              Personalized gifts, handcrafted photo frames,
              custom hampers, and memorable keepsakes made
              with love for every special occasion.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-lg font-medium">
              Navigation
            </h3>

            <ul className="space-y-3 text-black/60">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-black"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="transition hover:text-black"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-black"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h3 className="mb-5 text-lg font-medium">
              Legal
            </h3>

            <ul className="space-y-3 text-black/60">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="transition hover:text-black"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping-policy"
                  className="transition hover:text-black"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-black"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-medium">
  Contact
</h3>

<div className="space-y-4 text-black/60">
  <a
    href="tel:+917206275809"
    className="flex items-center gap-3 transition hover:text-black"
  >
    <Phone size={18} />
    <span>Call me</span>
  </a>

  <a
    href="mailto:sakhishandout@gmail.com"
    className="flex items-center gap-3 transition hover:text-black"
  >
    <Mail size={18} />
    <span>Gmail</span>
  </a>

 <a
  href="https://instagram.com/sakhi.s.handout"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 transition hover:text-black"
>
  <FaInstagram size={18} />
  <span>Instagram</span>
</a>

<a
  href="https://pinterest.com/sakhishandout"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 transition hover:text-black"
>
  <FaPinterest size={18} />
  <span>Pinterest</span>
</a>

<a
  href="https://wa.me/917206275809"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 transition hover:text-black"
>
  <FaWhatsapp size={18} />
  <span>WhatsApp</span>
</a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-[#e8dfd2] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-black/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} Sakhi's Handouts.
              All rights reserved.
            </p>

            <p>
              Crafted with care for memories that last
              forever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
