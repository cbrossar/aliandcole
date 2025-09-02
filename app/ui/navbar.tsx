"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./navbar.module.css";
import RsvpPopup from "./rsvp-popup";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRsvpPopupOpen, setIsRsvpPopupOpen] = useState(false);

  const isActive = (path: string) => {
    // Schedule is the homepage, so it's active on "/"
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openRsvpPopup = () => {
    setIsRsvpPopupOpen(true);
    closeMobileMenu(); // Close mobile menu if open
  };

  const closeRsvpPopup = () => {
    setIsRsvpPopupOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between bg-[rgb(248,245,239)] text-black p-4 px-4 md:px-6 lg:px-8 xl:px-[42px] lg:py-[22px] shadow-lg text-base md:text-lg">
        <Link
          href="/"
          className={`${styles.title} flex items-center gap-2 md:gap-3`}
        >
          <Image
            src="/C-and-A.png"
            alt="C and A Logo"
            width={50}
            height={50}
            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
          />
          <span>Meet us at the palace</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-16 xl:gap-24">
            <div className="flex gap-16 xl:gap-24">
              <Link
                href="/"
                className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}
              >
                Schedule
              </Link>
              <Link
                href="/how-we-met"
                className={`${styles.navLink} ${isActive("/how-we-met") ? styles.navLinkActive : ""}`}
              >
                How we met
              </Link>
              <Link
                href="/travel"
                className={`${styles.navLink} ${isActive("/travel") ? styles.navLinkActive : ""}`}
              >
                Travel
              </Link>
              <Link
                href="/registry"
                className={`${styles.navLink} ${isActive("/registry") ? styles.navLinkActive : ""}`}
              >
                Registry
              </Link>
              <Link
                href="/faqs"
                className={`${styles.navLink} ${isActive("/faqs") ? styles.navLinkActive : ""}`}
              >
                FAQs
              </Link>
            </div>
            <button
              onClick={openRsvpPopup}
              className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors"
            >
              RSVP
            </button>
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <Link
                href="/"
                className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""} text-sm`}
              >
                Schedule
              </Link>
              <Link
                href="/how-we-met"
                className={`${styles.navLink} ${isActive("/how-we-met") ? styles.navLinkActive : ""} text-sm`}
              >
                How we met
              </Link>
              <Link
                href="/travel"
                className={`${styles.navLink} ${isActive("/travel") ? styles.navLinkActive : ""} text-sm`}
              >
                Travel
              </Link>
              <Link
                href="/registry"
                className={`${styles.navLink} ${isActive("/registry") ? styles.navLinkActive : ""} text-sm`}
              >
                Registry
              </Link>
              <Link
                href="/faqs"
                className={`${styles.navLink} ${isActive("/faqs") ? styles.navLinkActive : ""} text-sm`}
              >
                FAQs
              </Link>
            </div>
            <button
              onClick={openRsvpPopup}
              className="border border-black rounded-full px-4 py-1.5 hover:bg-black hover:text-white transition-colors text-sm"
            >
              RSVP
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-px bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`w-6 h-px bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[62px] bg-[rgb(248,245,239)] z-40">
          <div className="flex flex-col p-6 space-y-6">
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""} text-lg`}
              onClick={closeMobileMenu}
            >
              Schedule
            </Link>
            <Link
              href="/how-we-met"
              className={`${styles.navLink} ${isActive("/how-we-met") ? styles.navLinkActive : ""} text-lg`}
              onClick={closeMobileMenu}
            >
              How we met
            </Link>
            <Link
              href="/travel"
              className={`${styles.navLink} ${isActive("/travel") ? styles.navLinkActive : ""} text-lg`}
              onClick={closeMobileMenu}
            >
              Travel
            </Link>
            <Link
              href="/registry"
              className={`${styles.navLink} ${isActive("/registry") ? styles.navLinkActive : ""} text-lg`}
              onClick={closeMobileMenu}
            >
              Registry
            </Link>
            <Link
              href="/faqs"
              className={`${styles.navLink} ${isActive("/faqs") ? styles.navLinkActive : ""} text-lg`}
              onClick={closeMobileMenu}
            >
              FAQs
            </Link>
            <button
              onClick={openRsvpPopup}
              className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors text-center w-fit"
            >
              RSVP
            </button>
          </div>
        </div>
      )}

      {/* RSVP Popup */}
      {isRsvpPopupOpen && <RsvpPopup onClose={closeRsvpPopup} />}
    </div>
  );
}
