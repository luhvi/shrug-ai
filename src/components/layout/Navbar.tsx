"use client";

import { useNavbar } from "@/store/navbar.store";
import { LinkElementProps } from "@/models/navbar.model";
import Link from "next/link";

const Navbar = () => {
  const page = useNavbar((state) => state.page);
  const setPage = useNavbar((state) => state.setPage);

  return (
    <nav className="fixed top-12 z-50 flex w-full items-center justify-center">
      <div
        className={
          "flex h-18 items-center justify-between gap-6 rounded-full bg-black/10 px-8 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl"
        }
      >
        <LinkELement title={"home"} page={page} setPage={setPage} />

        <LinkELement title={"tryForFree"} page={page} setPage={setPage} />
        <LinkELement title={"pricing"} page={page} setPage={setPage} />
      </div>
    </nav>
  );
};

export default Navbar;

const LinkELement = ({ title, page, setPage }: LinkElementProps) => {
  const handleClick = (page: "home" | "tryForFree" | "pricing") => {
    setPage(page);
  };
  return (
    <Link
      href={`/${title === "tryForFree" || title === "pricing" ? "pricing" : ""}`}
      className={`flex cursor-pointer items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 ${page === title ? "text-white" : "text-[oklch(0.75_0_0)] hover:text-[oklch(0.95_0_0)]"}`}
      onClick={() => handleClick(title)}
    >
      <span className="sm:text-md text-sm font-medium">
        {title !== "tryForFree"
          ? title.charAt(0).toUpperCase() + title.slice(1)
          : "Try For Free"}
      </span>
    </Link>
  );
};
