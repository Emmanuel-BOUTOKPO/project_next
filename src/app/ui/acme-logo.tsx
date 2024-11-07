'use client';

import { lusitana } from '@/app/ui/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function AcmeLogo() {
  const pathname = usePathname();
  return (
    <div
      className={`${lusitana.className} flex flex-row justify-center items-center leading-none text-white`}
    >
        <i className="iconsax h-12 w-12 rotate-[15deg]" icon-name="globe"></i>
        <p className="text-[44px]">Acme</p>
    </div>
  );
}