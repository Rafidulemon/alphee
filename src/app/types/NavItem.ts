import { Url } from "next/dist/shared/lib/router/router";

// types/NavItem.ts
export interface NavItem {
    label: string;
    icon: 'home' | 'tag' | 'package' | 'flame' | 'star';
    href: Url;
    dropdown?: string[];
  }
  