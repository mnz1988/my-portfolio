"use client";
import { Home, User, ContainerIcon, } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <footer className="sticky bottom-0 w-full z-50 border-t-1 border-[#03d1a8] backdrop-blur-[5px]">
      <div className="flex items-center justify-around h-16">
        <NavItem href="/about" icon={<User size={24} />} label="about" active={pathname === "/about"}/>
        <NavItem href="/" icon={<Home size={24} />} label="Home" active={pathname === "/"}/>
        <NavItem href="/portfolio" icon={<ContainerIcon size={24} />} label="portfolio" active={pathname === "/portfolio"}/>
      </div>
    </footer>
  );
}

function NavItem({ href, icon, label, active, }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center p-4 transition no-underline ${active ? "text-black font-bold" : "text-gray-600 hover:text-black"}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}

