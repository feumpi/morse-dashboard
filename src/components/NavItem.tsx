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
        className={clsx(
          "text-gray-500 hover:text-gray-800 flex gap-1 items-center",
          {
            "text-gray-800 font-bold": isActive,
          }
        )}
      >
        {icon && icon}
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
