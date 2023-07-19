"use client";

import { signOut } from "next-auth/react";
import { LogOut as Out } from "lucide-react";

export default function LogOut() {
  return (
    <div
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-white absolute gap-2 cursor-pointer hover:bg-gray-900 rounded py-1 px-2 right-4 flex"
    >
      <p>Sair</p>
      <Out />
    </div>
  );
}
