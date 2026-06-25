import { useState } from "react";

const defaultFormState = { name: "", email: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(defaultFormState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:jakshita770@gmail.com?subject=${encodeURIComponent(
      "Portfolio Contact"
    )}&body=${encodeURIComponent(`Hi Akshita,\n\n${message}\n\nBest,\n${name}\n${email}`)}`;
    window.location.href = mailto;
    setStatus("Opening email client...");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500" type="submit">
        Submit
      </button>
      {status && <p className="text-sm text-secondary mt-2">{status}</p>}
    </form>
  );
};
