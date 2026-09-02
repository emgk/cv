'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_MENUS } from '@/lib/constants';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Site navigation">
      <ul className="flex gap-2 list-none">
        {NAV_MENUS.filter((menu) => pathname !== menu.href).map((navMenu) => (
          <li
            key={navMenu.name}
            className="not-first:before:content-['/'] before:text-cv-sub-heading not-first:before:mr-2 text-sm"
          >
            <Link href={navMenu.href} className="text-cv-link hover:text-cv-link-hover transition-colors">
              {navMenu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
