import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/things-to-do">Things To Do</Link>
        </div>
    );
  }
  