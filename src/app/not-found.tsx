import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c79a4a]">
          Error 404
        </p>

        <h1 className="text-5xl md:text-7xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-black/60">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-white"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}