"use client";

import { useNavbar } from "@/store/navbar.store";
import { LinkElementProps } from "@/models/navbar.model";
import Link from "next/link";

const Navbar = () => {
  const page = useNavbar((state) => state.page);
  const setPage = useNavbar((state) => state.setPage);

  return (
    <nav className="fixed top-18 z-50 flex w-full items-center">
      <div className="ml-18 flex items-center justify-center">
        <h1 className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] sm:text-2xl">
          Shrug AI
        </h1>
      </div>
      <div
        className={
          "absolute left-1/2 flex h-16 -translate-x-1/2 transform items-center justify-between gap-6 rounded-full bg-black/10 px-8 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl sm:h-18"
        }
      >
        <LinkELement title={"home"} page={page} setPage={setPage} />
        <div className="hidden sm:flex">
          <LinkELement title={"startForFree"} page={page} setPage={setPage} />
        </div>
        <LinkELement title={"pricing"} page={page} setPage={setPage} />
      </div>
    </nav>
  );
};

export default Navbar;

const LinkELement = ({ title, page, setPage }: LinkElementProps) => {
  const handleClick = (page: "home" | "startForFree" | "pricing") => {
    setPage(page);
  };
  return (
    <Link
      href={`/${title === "startForFree" || title === "pricing" ? "pricing" : ""}`}
      className={`flex cursor-pointer items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 ${page === title ? "text-white" : "text-[oklch(0.75_0_0)] hover:text-white"}`}
      onClick={() => handleClick(title)}
    >
      <span className="sm:text-md text-sm font-medium drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
        {title !== "startForFree"
          ? title.charAt(0).toUpperCase() + title.slice(1)
          : "Start For Free"}
      </span>
    </Link>
  );
};
