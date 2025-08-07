import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Helper: Convert Buffer to Readable Stream
function bufferToStream(buffer: Buffer): Readable {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    }
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "notes",
          resource_type: "auto", // Handles images, PDFs, etc.
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      bufferToStream(buffer).pipe(uploadStream);
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
