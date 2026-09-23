import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("yadhronics");
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      connected: true,
      database: "yadhronics",
      collections: collections.map((c) => c.name),
      message: "MongoDB connection successful ✅",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      {
        connected: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}