"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function NavBar() {
    const pathname = usePathname();
    
    const isActive = (path: string) => {
        // Schedule is the homepage, so it's active on "/"
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname === path) return true;
        return false;
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between bg-[rgb(248,245,239)] text-black p-4 px-4 md:px-8 lg:px-[42px] lg:py-[22px] shadow-lg">
                <Link href="/" className={styles.title}>
                    Meet us at the palace
                </Link>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-24">
                        <div className="hidden md:flex gap-24">
                            <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>
                                Schedule
                            </Link>
                            <Link href="/how-we-met" className={`${styles.navLink} ${isActive("/how-we-met") ? styles.navLinkActive : ""}`}>
                                How we met
                            </Link>
                            <Link href="/travel" className={`${styles.navLink} ${isActive("/travel") ? styles.navLinkActive : ""}`}>
                                Travel
                            </Link>
                            <Link href="/registry" className={`${styles.navLink} ${isActive("/registry") ? styles.navLinkActive : ""}`}>
                                Registry
                            </Link>
                            <Link href="/faqs" className={`${styles.navLink} ${isActive("/faqs") ? styles.navLinkActive : ""}`}>
                                FAQs
                            </Link>
                        </div>
                        <Link href="/rsvp" className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors">
                            RSVP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );  
}
  