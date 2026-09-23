"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  enquiryType: z.enum(["general", "course", "partnership", "project"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({
  defaultType = "general",
}: {
  defaultType?: "general" | "course" | "partnership" | "project";
}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { enquiryType: defaultType },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Full Name *
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-primary"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-semibold text-primary"
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="+91..."
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="enquiryType"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Enquiry Type *
        </label>
        <select
          id="enquiryType"
          {...register("enquiryType")}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="general">General Enquiry</option>
          <option value="course">Course / Training</option>
          <option value="partnership">College Partnership</option>
          <option value="project">Project / Quote Request</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us about your enquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Send size={18} className="mr-2" /> Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700">
          <CheckCircle2 size={20} />
          <span>Thank you! We'll get back to you within 24 hours.</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700">
          <AlertCircle size={20} />
          <span>
            Something went wrong. Please try again or email us directly.
          </span>
        </div>
      )}
    </form>
  );
}