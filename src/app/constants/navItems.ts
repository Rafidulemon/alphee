import { NavItem } from "../types/NavItem";
export const navItems: NavItem[] = [
    { label: "Home", icon: "home", href: "/" },
    {
        label: "Categories", icon: "tag", dropdown: [
            "Watch", "Shirt", "Pant", "Punjabi",
            "Polo", "Tshirts", "Belt", "Wallet"
        ],
        href: ""
    },
    { label: "Shop", icon: "package", href: "/shop" },
    { label: "Best Selling", icon: "star", href: "/best-selling" },
    { label: "Flash Sale", icon: "flame", href: "/flash-sale" },
  ];