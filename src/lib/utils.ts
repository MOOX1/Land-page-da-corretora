import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function PostImage(image: File) {
  try {
    const formData = new FormData();

    formData.append("file", image as unknown as string);
    formData.append("upload_preset", "kjoct0g0");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dujfpbvdh/upload`,
      { method: "POST", body: formData }
    );

    const res = await response.json();

    return res.url;
  } catch (error) {
    console.log(error);
  }
}
