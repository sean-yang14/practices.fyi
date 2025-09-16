"use client";
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus("sent");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to send message", error);
      setStatus("error");
    }
  };

  return (
    <main className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      {status === "sent" ? (
        <p className="bg-green-100 text-green-800 p-4 rounded">Thank you! Your message has been sent.</p>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
      )}
    </main>
  );
}