import { Navbar } from "@/models/navbar.model";
import { create } from "zustand";

export const useNavbar = create<Navbar>((set) => ({
  page: "home",
  setPage: (newPage: "home" | "startForFree" | "pricing") =>
    set(() => ({ page: newPage })),
}));
