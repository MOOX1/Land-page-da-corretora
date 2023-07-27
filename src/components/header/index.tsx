"use client";
import * as React from "react";
import Link from "next/link";
import LogOut from "../LogOut";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyleLink,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <NavigationMenu className="sticky top-0 flex justify-center">
      <NavigationMenuList className="border-b border-white flex justify-center w-screen relative">
        <NavigationMenuItem className="py-2 hover:bg-gray-600">
          <Link href="/admin" className={"p-2"}>
            Empreendimentos
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin/banners" className={"p-2 hover:bg-gray-600"}>
            Banners
          </Link>
        </NavigationMenuItem>
        <LogOut />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
