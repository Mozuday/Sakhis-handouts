"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.replace("/admin");
    } else {
      alert("Invalid email or password");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
      <div className="w-full max-w-md rounded-[32px] border bg-white p-8">
        <h1 className="mb-6 text-3xl">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border p-4"
        />

        <button
          onClick={login}
          disabled={loading}
          className="mt-5 w-full rounded-full bg-black py-4 text-white"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </div>
    </div>
  );
}
