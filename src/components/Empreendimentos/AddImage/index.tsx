"use client";

import { Input } from "@/components/ui/input";
import ContextMenu from "@/components/ContextMenu";
import { ChangeEvent, ReactNode, useState } from "react";
import Image from "next/image";

interface IAddImageProps {
  label?: string | ReactNode;
  keySTRING: string;
  handleImage: (value: File) => void;
}

export default function AddImage({
  label,
  keySTRING: key,
  handleImage,
}: IAddImageProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    handleImage(file as File);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="full">
      <Input
        onChange={(e) => handleImageChange(e)}
        type="file"
        id={"picture" + key}
        className="h-0 w-0 p-0 m-0 border-none"
      />
      {label && <p className="text-sm">{label}</p>}
      <label htmlFor={"picture" + key} className="cursor-pointer w-full block">
        {!previewUrl && <ContextMenu />}
        {previewUrl && (
          <Image
            className="aspect-video w-full rounded"
            src={previewUrl}
            width={300}
            height={150}
            alt="Preview"
          />
        )}
      </label>
    </div>
  );
}
