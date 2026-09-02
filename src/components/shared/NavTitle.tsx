'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { NAV_MENUS } from '@/lib/constants';

export default function NavTitle() {
  const pathname = usePathname();

  const currentMenu = NAV_MENUS.find((menu) => menu.href === pathname);
  return <div className="left-2 font-bold text-sm uppercase">{currentMenu?.name || ''}</div>;
}
