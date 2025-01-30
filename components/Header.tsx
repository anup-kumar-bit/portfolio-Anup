"use client"
import React from "react";
import { Rajdhani } from 'next/font/google';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

const fontFamily = Rajdhani({
  subsets: ['latin'],
  weight: ['400'],
});


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black h-24">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-white">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className={`text-gray-300 ${fontFamily.className}`}>
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            SERVICE
          </Link> 
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            WORKS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link}  href="#" variant="flat" className="bg-gray-600 text-white">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

