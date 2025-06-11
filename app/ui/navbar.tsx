import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center bg-[#edede4] text-black p-4 px-4 md:px-8 lg:px-20 font-linden">
                <div className={styles.title}>
                    Meet us at the palace
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/schedule" className="hover:opacity-70 transition-opacity">
                        Schedule
                    </Link>
                    <Link href="/how-we-met" className="hover:opacity-70 transition-opacity">
                        How we met
                    </Link>
                    <Link href="/travel" className="hover:opacity-70 transition-opacity">
                        Travel
                    </Link>
                    <Link href="/registry" className="hover:opacity-70 transition-opacity">
                        Registry
                    </Link>
                    <Link href="/faqs" className="hover:opacity-70 transition-opacity">
                        FAQs
                    </Link>
                </div>
                <Link href="/rsvp" className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    RSVP
                </Link>
            </div>
        </div>
    );  
}
  