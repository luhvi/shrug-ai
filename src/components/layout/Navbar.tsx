"use client";

import { useNavbar } from "@/store/navbar.store";
import {
  LinkElementProps,
  ProfileDropdownElementProps,
} from "@/models/navbar.model";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { PiGear } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const page = useNavbar((state) => state.page);
  const setPage = useNavbar((state) => state.setPage);
  const isProfileDropdownOpen = useNavbar(
    (state) => state.isProfileDropdownOpen,
  );
  const toggleProfileDropdown = useNavbar(
    (state) => state.toggleProfileDropdown,
  );
  const setIsProfileDropdownOpen = useNavbar(
    (state) => state.setIsProfileDropdownOpen,
  );
  const isLoggedIn = useNavbar((state) => state.isLoggedIn);
  const setIsLoggedIn = useNavbar((state) => state.setIsLoggedIn);

  return (
    <nav className="fixed top-12 z-50 flex w-full items-center justify-center">
      <div className="relative flex w-full flex-row items-center justify-center">
        <div
          className={
            "flex h-18 items-center justify-between gap-6 rounded-full bg-black/10 px-8 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl"
          }
        >
          <LinkELement title={"home"} page={page} setPage={setPage} />

          <LinkELement title={"tryForFree"} page={page} setPage={setPage} />
          <LinkELement title={"pricing"} page={page} setPage={setPage} />
        </div>
        <div
          className="absolute right-18 flex items-center justify-center text-center"
          onClick={toggleProfileDropdown}
        >
          <Avatar>
            <AvatarImage src={undefined} />
            <AvatarFallback className="cursor-pointer bg-black/10 font-medium text-[oklch(0.95_0_0)] shadow-lg ring-1 ring-white/10 backdrop-blur-2xl">
              TA
            </AvatarFallback>
          </Avatar>
        </div>
        {isProfileDropdownOpen && isLoggedIn ? (
          <div className="absolute top-18 right-18 flex flex-col justify-center rounded-md bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl">
            <ProfileDropdownElement
              title={"profile"}
              Icon={GoPerson}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
            <ProfileDropdownElement
              title={"settings"}
              Icon={PiGear}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
            <ProfileDropdownElement
              title={"logout"}
              Icon={MdLogout}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        ) : isProfileDropdownOpen && !isLoggedIn ? (
          <div className="absolute top-18 right-18 flex flex-col justify-center rounded-lg bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl">
            <ProfileDropdownElement
              title={"login"}
              Icon={MdOutlineLogin}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        ) : null}
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
        {title === "tryForFree"
          ? "Try For Free"
          : title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </Link>
  );
};

const ProfileDropdownElement = ({
  title,
  Icon,
  setPage,
  setIsProfileDropdownOpen,
  setIsLoggedIn,
}: ProfileDropdownElementProps) => {
  const handleClick = (
    title: "home" | "profile" | "settings" | "login" | "logout",
  ) => {
    if (title === "logout") {
      setIsLoggedIn(false);
    } else {
      setPage(title);
    }
    setIsProfileDropdownOpen(false);
  };

  return (
    <Link
      href={`${title === "login" ? "auth/login" : "/"}`}
      className={`group flex cursor-pointer items-center justify-start rounded-md px-2 py-1 text-[oklch(0.95_0_0)] transition-all duration-300 ease-in-out hover:bg-indigo-700/40 ${title === "login" || title === "logout" ? "" : "mb-1"} `}
      onClick={() => handleClick(title)}
    >
      <span
        className={`mr-2 text-2xl ${title === "settings" ? "group-hover:animate-spin" : ""}`}
        style={{ animationDuration: "2s" }}
      >
        <Icon />
      </span>
      <span className={`mr-1 text-sm font-medium`}>
        {title === "login"
          ? "Log In"
          : title === "logout"
            ? "Log Out"
            : title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </Link>
  );
};
