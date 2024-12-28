"use client";

import { useAppSelector } from "@/app/redux";
import { Home, LockIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarclassNames = `fixed flex flex-col h-[100%]  justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;
  return (
    <div className={sidebarclassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* top logo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
            PMLIST
          </div>
        </div>
        {/* team  */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-green-400">
              TEAMS
            </h3>
            <div className="mt-1 flex items-start gap-1">
              <LockIcon className="mt-[0.1rem] h-3 w-fit text-gray-500 dark:text-gray-500" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* navbar links */}
        <nav className="z-00 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
        </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  // isCollapsed: boolean;
}
const SidebarLink = ({
  href,
  icon: Icon,
  label,
  // isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[50px] bg-blue-200" />
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}></span>
      </div>
    </Link>
  );
};

export default Sidebar;
