import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public", "PRODUCT");
    const entries = await readdir(imagesDir, { withFileTypes: true });

    // Define the desired order for specific products
    const preferredOrder = [
      "cmp-202af cable gland.jpg",
      "CMP 737 M2.jpg", 
      "CONDUIT PARTS SERIES BFF.jpg",
      "TEF7302106 DRAIN PLUG M25.jpg",
      "CMP 781E BREATHER M25.jpg",
      "MAKHANA.webp",
      "Coco Peat Briquettes .jpg",
      "Indian-Coconut.avif",
      "Dehydrated White Onion Powder .webp",
      "Dehydrated-White-Onion-Powder.webp"
    ];

    const allImages = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(name));

    // Sort images according to preferred order
    const sortedImages = allImages.sort((a, b) => {
      const indexA = preferredOrder.indexOf(a);
      const indexB = preferredOrder.indexOf(b);
      
      // If both are in preferred order, sort by their position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      // If only A is in preferred order, A comes first
      if (indexA !== -1) {
        return -1;
      }
      // If only B is in preferred order, B comes first
      if (indexB !== -1) {
        return 1;
      }
      // If neither is in preferred order, maintain original order
      return 0;
    });

    const images = sortedImages.map((name) => ({
      fileName: name,
      url: `/PRODUCT/${encodeURIComponent(name)}`,
    }));

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { images: [], error: "Failed to read product images" },
      { status: 500 }
    );
  }
}