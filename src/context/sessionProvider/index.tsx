"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export default function SessionProviderNextAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
