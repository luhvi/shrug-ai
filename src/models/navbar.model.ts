import { IconType } from "react-icons";

export type Navbar = {
  page: "home" | "tryForFree" | "pricing" | "profile" | "settings" | "login";
  setPage: (
    newPage:
      | "home"
      | "tryForFree"
      | "pricing"
      | "profile"
      | "settings"
      | "login",
  ) => void;
  isProfileDropdownOpen: boolean;
  toggleProfileDropdown: () => void;
  setIsProfileDropdownOpen: (boolean: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (boolean: boolean) => void;
};

export type LinkElementProps = Omit<
  Navbar,
  | "isProfileDropdownOpen"
  | "toggleProfileDropdown"
  | "setIsProfileDropdownOpen"
  | "isLoggedIn"
  | "setIsLoggedIn"
> & {
  title: "home" | "tryForFree" | "pricing";
};

export type ProfileDropdownElementProps = Omit<
  Navbar,
  "page" | "isProfileDropdownOpen" | "toggleProfileDropdown" | "isLoggedIn"
> & {
  title: "profile" | "settings" | "login" | "logout";
  Icon: IconType;
};
