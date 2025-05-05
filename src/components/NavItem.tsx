"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
const NavItem = ({ href, label, icon }: NavItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(" hover:text-gray-800 flex gap-1 items-center", {
          "font-extrabold text-black": isActive,
          "text-gray-400": !isActive,
        })}
      >
        {icon && icon}
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
