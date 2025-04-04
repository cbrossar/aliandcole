import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center bg-[#edede4] text-black p-4 px-80 font-linden">
            <Link href="/">Home</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/things-to-do">Things To Do</Link>
        </div>
    );  
}
  