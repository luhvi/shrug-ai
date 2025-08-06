export type Navbar = {
  page: "home" | "startForFree" | "pricing";
  setPage: (newPage: "home" | "startForFree" | "pricing") => void;
};

export type LinkElementProps = Navbar & {
  title: "home" | "startForFree" | "pricing";
};
