import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoDinecloud from '@/assets/images/landing/logo_dinecloud.svg'; // Assuming this is the correct logo path

export const HeaderSimple = () => {
  return (
    <header className="bg-white py-4 shadow-md sticky top-0 z-50"> {/* Basic header styling */}
      <div className="mx-auto w-full max-w-[1320px] md:px-6 flex justify-between items-center">
        <Link href="/">
          <Image src={logoDinecloud} alt="DineCloud Logo" width={140} height={35} />
        </Link>
        <div className="flex items-center space-x-4">
          {/* These buttons might need specific styling/links later */}
          <Link href="/download" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Pobierz aplikację dla gości
          </Link>
          <Link href="/contact" className="button button_1 whitespace-nowrap">
             Skontaktuj się
          </Link>
          {/* Rozpocznij bezpłatny okres testowy button? - It's on the screenshot, might be added here or specific pages */}
          {/* <Link href="/signup" className="button button_secondary whitespace-nowrap">
             Rozpocznij bezpłatny okres testowy!
          </Link> */}
        </div>
      </div>
    </header>
  );
};
