"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Item {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gray-200 rounded-xl border bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-primary">{item.q}</span>
            <ChevronDown
              size={20}
              className={`flex-shrink-0 text-accent transition ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-gray-600">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}