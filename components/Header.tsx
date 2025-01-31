"use client"
import React from "react";

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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/#" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black h-24">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" sm:hidden text-white"
        />
        <NavbarBrand >
          <p className="font-bold text-inherit text-white">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/works" className={`text-gray-300 font-[family-name:var(--font-geist-sans)]`}>
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
          <Button as={Link} href="#" variant="flat" className="bg-zinc-900 text-white">
            Let&apos;s Talk
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-w">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-white"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
} 