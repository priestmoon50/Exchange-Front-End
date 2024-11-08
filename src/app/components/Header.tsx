// src/app/components/Header.tsx

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItemsProps, MobileMenuButtonProps, MobileDrawerProps } from "../../types";

const navItems = [
  { label: "صفحه اصلی", href: "/" },
  { label: "قیمت رمز ارزها", href: "/crypto-prices" },
  { label: "مقالات", href: "/articles" },
  { label: "تماس با ما", href: "/contact" },
  { label: "سایر", href: "/others" },
];

// تابع کمکی برای کلاس‌های پویا
const getNavItemClass = (isActive: boolean) =>
  `relative cursor-pointer text-base md:text-lg lg:text-xl font-medium transition-colors duration-300 ${
    isActive ? "text-blue-600 font-bold" : "text-gray-800"
  }`;

// استفاده از React.memo برای بهبود کارایی Logo و UserProfile
const Logo = React.memo(() => (
  <div className="flex items-center gap-4">
    <Image src="/images/logo.png" alt="Logo" width={80} height={72} sizes="(max-width: 768px) 48px, (max-width: 1200px) 64px, 80px" className="sm:w-12 md:w-16 lg:w-20" />
  </div>
));

const UserProfile: React.FC = React.memo(() => (
  <div className="flex items-center gap-2">
    <Image
      src="/images/user-avatar.webp"
      alt="User Avatar"
      width={36}
      height={36}
      className="rounded-full sm:w-8 md:w-10 lg:w-12"
    />
    <span className="font-bold text-sm md:text-lg">علی اسماعیل</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-600 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
));

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("صفحه اصلی");

  useEffect(() => {
    // اضافه کردن این کد برای اطمینان از هماهنگی Hydration
    if (typeof window !== "undefined") {
      // مثال: چک کردن وضعیت SSR
    }
  }, []);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo />

        {/* User Info and Mobile Drawer Button */}
        <div className="flex items-center gap-4 md:hidden">
          <UserProfile />
          <MobileMenuButton onClick={() => setDrawerOpen(true)} />
        </div>

        {/* Desktop Navigation */}
        <NavItems activeItem={activeItem} onNavClick={handleNavClick} />

        {/* User Info for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <UserProfile />
        </div>

        {drawerOpen && (
          <MobileDrawer
            activeItem={activeItem}
            onClose={() => setDrawerOpen(false)}
            onNavClick={(item) => {
              handleNavClick(item);
              setDrawerOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

// کامپوننت ناوبری
const NavItems: React.FC<NavItemsProps> = ({ activeItem, onNavClick }) => (
  <nav className="hidden md:flex gap-6">
    {navItems.map((item) => (
      <Link href={item.href} key={item.label} passHref>
        <span
          onClick={() => onNavClick(item.label)}
          className={getNavItemClass(item.label === activeItem)}
          tabIndex={0}
          role="button"
          aria-current={item.label === activeItem ? "page" : undefined}
        >
          {item.label}
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
              item.label === activeItem ? "w-full" : "w-0"
            }`}
          ></span>
        </span>
      </Link>
    ))}
  </nav>
);

// دکمه منوی موبایل با aria-label
const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => (
  <div className="md:hidden">
    <button onClick={onClick} className="text-gray-800 focus:outline-none" aria-label="Open mobile menu">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </button>
  </div>
);

// کامپوننت کشوی موبایل با tabindex و focus improvements
const MobileDrawer: React.FC<MobileDrawerProps> = ({ activeItem, onClose, onNavClick }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end transition-opacity">
    <div className="bg-white w-full h-full shadow-lg p-4 pt-8">
      <button onClick={onClose} className="mb-6 text-gray-800 focus:outline-none" aria-label="Close mobile menu">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link href={item.href} key={item.label} passHref>
            <span
              onClick={() => onNavClick(item.label)}
              className={`text-lg font-medium py-2 ${
                item.label === activeItem ? "text-blue-600 font-bold" : "text-gray-800"
              }`}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && onNavClick(item.label)}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  </div>
);

export default Header;
