import { Navbar } from "@/models/navbar.model";
import { create } from "zustand";

export const useNavbar = create<Navbar>((set) => ({
  page: "home",
  setPage: (
    newPage:
      | "home"
      | "tryForFree"
      | "pricing"
      | "profile"
      | "settings"
      | "login",
  ) => set(() => ({ page: newPage })),
  isProfileDropdownOpen: false,
  toggleProfileDropdown: () =>
    set((state) => ({ isProfileDropdownOpen: !state.isProfileDropdownOpen })),
  setIsProfileDropdownOpen: (boolean: boolean) =>
    set(() => ({ isProfileDropdownOpen: boolean })),
  isLoggedIn: true,
  setIsLoggedIn: (boolean: boolean) => set(() => ({ isLoggedIn: boolean })),
}));
