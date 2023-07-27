"use client";

import { Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";

export default function BannersComponent() {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    // handleImage(file as File);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full flex items-start justify-center gap-3 p-3">
      <div className="w-4/5 flex flex-wrap gap-2">
        <Input
          onChange={(e) => handleImageChange(e)}
          type="file"
          id={"Banner"}
          className="h-0 w-0 p-0 m-0 border-none"
        />
        <div className="flex justify-center items-center border cursor-pointer hover:bg-slate-900 border-white w-40 h-40">
          <Plus />
        </div>
      </div>
    </div>
  );
}
