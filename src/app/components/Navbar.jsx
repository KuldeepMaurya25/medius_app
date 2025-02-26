"use client"
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from '../lib/heroui';
import navbar from '../data/navbar'
import { BrandLogo } from "./Logos";
import { usePathname } from "next/navigation";


export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        console.log(window.innerHeight * 0.6)
        if (pathname != '/')
            return;
        const handleScroll = () => {
            const thresoldValue = window.innerHeight * 1.44
            const scrollPosition = window.scrollY;

            if (scrollPosition > thresoldValue) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false} className={`sticky text-textPrimary top-0 z-20 transition-all ease-in-out duration-300 ${isScrolled || isMenuOpen ? "bg-white" : "bg-primary"} `} >
            <NavbarContent justify="start">
                <NavbarBrand justify="start" className="flex justify-start" data-justify>
                    <BrandLogo style={isScrolled || isMenuOpen ? "" : "text-white"} />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-10" justify="start">
                {
                    Object.keys(navbar['links']).map((link, key) => {
                        return (
                            <NavbarItem key={key}>
                                <Link color="foreground" className={`font-[550] font-sans ${isScrolled ? "" : "text-white"}`} href={navbar['links'][link]} >
                                    {link.replace('_', " ")}
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={`sm:hidden ${isScrolled || isMenuOpen ? "" : "text-white"}`}
                />
            </NavbarContent>
            <NavbarMenu  >
                {Object.keys(navbar['links']).map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full font-[550] font-sans"

                            color="foreground"
                            href={navbar['links'][item]}
                            size="lg"
                        >
                            {item.replace('_', " ")}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
