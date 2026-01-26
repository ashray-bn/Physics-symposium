import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "Who can attend?", a: "Any student interested in physics." },
    { q: "Is it free?", a: "Yes, the event is completely free." },
    { q: "Do I need prior knowledge?", a: "Basic interest is enough." },
    { q: "Will certificates be given?", a: "Yes, to all participants." },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="mb-4">
            <button
              className="w-full text-left font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
            </button>
            {open === i && <p className="mt-2 text-gray-700">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
