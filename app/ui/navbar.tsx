import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-wrap justify-center md:justify-between items-center bg-[#edede4] text-black p-4 px-4 md:px-8 lg:px-20 font-linden gap-4">
            <Link href="/">Home</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/things-to-do">Things To Do</Link>
        </div>
    );  
}
  