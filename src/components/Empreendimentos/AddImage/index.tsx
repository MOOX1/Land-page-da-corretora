"use client";

import { Input } from "@/components/ui/input";
import ContextMenu from "@/components/ContextMenu";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import Image from "next/image";

interface IAddImageProps {
  label?: string | ReactNode;
  keySTRING: string;
  handleImage: (value: File) => void;
  clear: boolean;
  imageUrl?: string;
}

export default function AddImage({
  label,
  keySTRING: key,
  handleImage,
  clear,
  imageUrl,
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
      imageUrl = undefined;
    }
  };
  useEffect(() => {
    if (!clear) return;
    setPreviewUrl("");
  }, [clear]);

  useEffect(() => {
    if (clear) return;
    setPreviewUrl("");
  }, [imageUrl]);

  return (
    <div className="flex-1">
      <Input
        onChange={(e) => handleImageChange(e)}
        type="file"
        id={"picture" + key}
        className="h-0 w-0 p-0 m-0 border-none"
      />
      {label && <p className="text-sm">{label}</p>}
      <label htmlFor={"picture" + key} className="cursor-pointer w-full block">
        {!previewUrl && !imageUrl && <ContextMenu />}
        {previewUrl && !imageUrl && (
          <Image
            className="aspect-video w-full rounded"
            src={previewUrl}
            width={300}
            height={150}
            alt="Preview"
          />
        )}
        {imageUrl && (
          <Image
            className="aspect-video w-full rounded"
            src={previewUrl ? previewUrl : imageUrl}
            width={300}
            height={150}
            alt="Preview"
          />
        )}
      </label>
    </div>
  );
}
