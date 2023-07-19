"use client";
import * as React from "react";
import Link from "next/link";
import LogOut from "../LogOut";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <NavigationMenu className="sticky top-0 flex justify-center">
      <NavigationMenuList className="border-b border-white flex justify-center w-screen relative">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Empreendimentos
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Banners
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <LogOut />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
