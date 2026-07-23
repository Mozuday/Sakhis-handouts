import { Suspense } from "react";
import ThankYouClient from "./thank-you-client";

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
          <p>Loading...</p>
        </main>
      }
    >
      <ThankYouClient />
    </Suspense>
  );
}
