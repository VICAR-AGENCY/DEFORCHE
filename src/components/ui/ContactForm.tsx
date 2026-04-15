"use client";

import { useState } from "react";

const Bliksem = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor" />
  </svg>
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voornaam: data.get("voornaam"),
          achternaam: data.get("achternaam"),
          email: data.get("email"),
          telefoon: data.get("telefoon"),
          bericht: data.get("bericht"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-(--color-dark)">Voornaam</label>
          <input
            type="text"
            name="voornaam"
            placeholder="Voornaam"
            required
            className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-(--color-dark)">Achternaam</label>
          <input
            type="text"
            name="achternaam"
            placeholder="Achternaam"
            required
            className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-(--color-dark)">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@bedrijf.be"
            required
            className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-(--color-dark)">Telefoonnummer</label>
          <input
            type="tel"
            name="telefoon"
            placeholder="+32 ..."
            className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-(--color-dark)">Bericht</label>
        <textarea
          name="bericht"
          rows={5}
          placeholder="Hoe kunnen wij u helpen?"
          required
          className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors resize-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="akkoord" required className="mt-0.5 accent-(--color-primary)" />
          <span className="text-sm text-(--color-gray-text)">
            Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring van Deforche Schakeltechniek.
          </span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-6 py-3 hover:bg-(--color-primary-hover) transition-colors disabled:opacity-60"
        >
          <Bliksem />
          {status === "sending" ? "Versturen…" : "Verstuur bericht"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-sm font-semibold text-green-700">
          Bedankt! Uw bericht is verzonden. We nemen zo snel mogelijk contact op.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Er is iets misgegaan. Probeer opnieuw of stuur een e-mail naar info@deforche.be.
        </p>
      )}
    </form>
  );
}
