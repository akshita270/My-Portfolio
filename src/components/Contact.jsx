import { useState } from "react";

const defaultFormState = { name: "", email: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(defaultFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:jakshita770@gmail.com?subject=${encodeURIComponent(
      "Portfolio Contact from " + name
    )}&body=${encodeURIComponent(`Hi Akshita,\n\n${message}\n\nBest,\n${name}\n${email}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ✓
        </div>
        <div>
          <p className="text-base font-semibold text-neutral-900 mb-1">Email client opened!</p>
          <p className="text-sm text-neutral-500">Your message draft is ready — just hit send.</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(defaultFormState); }}
          className="mt-2 text-xs text-neutral-400 hover:text-neutral-600 underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input flex-1"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          className="contact-input flex-1"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        rows={8}
        className="contact-input resize-none"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        Send Message →
      </button>
    </form>
  );
};
