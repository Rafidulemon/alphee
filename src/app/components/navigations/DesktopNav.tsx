import Link from "next/link";
import {
  ArrowDown,
  HomeIcon,
  Tag,
  Package,
  Flame,
  Star,
  ArrowUp,
} from "lucide-react";
import { useState } from "react";
import { NavItem } from "@/app/types/NavItem";

const iconMap = {
  home: HomeIcon,
  tag: Tag,
  package: Package,
  flame: Flame,
  star: Star,
};

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="hidden md:flex justify-center -mt-6 space-x-6 text-sm font-medium text-secondary pb-4">
      {navItems.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];

        if (item.dropdown) {
          const isOpen = openDropdown === item.label;
          return (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex gap-1 items-center cursor-pointer hover:text-primary"
              >
                <Icon size={16} />
                {item.label}
                {isOpen ? (
                  <ArrowUp size={14} className="mt-1" />
                ) : (
                  <ArrowDown size={14} className="mt-1" />
                )}
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#050505] border rounded shadow-md z-10">
                  <div className="grid grid-cols-2 p-4 gap-2 text-sm text-secondary w-56">
                    {item.dropdown.map((subItem: string) => (
                      <Link
                        key={subItem}
                        href={`/shop/${subItem.toLowerCase()}`}
                        className="hover:text-primary"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 hover:text-primary"
          >
            <Icon size={16} /> {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
