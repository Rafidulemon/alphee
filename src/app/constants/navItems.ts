import { NavItem } from "../types/NavItem";
export const navItems: NavItem[] = [
    { label: "Home", icon: "home", href: "/" },
    {
        label: "Categories", icon: "tag", dropdown: [
            "Accessories", "Watch", "Shirt", "Pant", "Punjabi",
            "Polo", "Tshirts", "Blazer", "Waistcoat", "Shoe",
            "Jacket", "High Neck", "Hoodie"
        ],
        href: ""
    },
    { label: "Shop", icon: "package", href: "/shop" },
    { label: "Best Selling", icon: "star", href: "/best-selling" },
    { label: "Flash Sale", icon: "flame", href: "/flash-sale" },
  ];