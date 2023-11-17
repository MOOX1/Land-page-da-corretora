"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import LogOut from "../LogOut";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyleLink,
} from "@/components/ui/navigation-menu";

interface IHeaderProps {
  children: ReactNode;
}

export function Header({ children }: IHeaderProps) {
  return (
    <div className="h-full relative ">
      <NavigationMenu>
        <NavigationMenuList className="border-b border-white flex justify-center w-screen relative">
          <NavigationMenuItem className="py-2 hover:bg-gray-600">
            <Link href="/admin" className={"p-2"}>
              Empreendimentos
            </Link>
          </NavigationMenuItem>

          <LogOut />
        </NavigationMenuList>
      </NavigationMenu>
      <div className="h-full">{children}</div>
    </div>
  );
}
