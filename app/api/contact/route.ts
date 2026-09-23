import { NextResponse } from "next/server";
import { z } from "zod";
import clientPromise from "@/lib/mongodb";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  enquiryType: z.enum(["general", "course", "partnership", "project"]),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("yadhronics");
    const collection = db.collection("contacts");

    // Insert the contact submission
    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
      ip: req.headers.get("x-forwarded-for") || "unknown",
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    console.log("✅ Contact saved to MongoDB:", result.insertedId);

    return NextResponse.json({
      ok: true,
      message: "Message received. We'll get back to you soon.",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Invalid input",
      },
      { status: 400 }
    );
  }
}