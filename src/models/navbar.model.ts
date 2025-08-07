export type Navbar = {
  page: "home" | "tryForFree" | "pricing";
  setPage: (newPage: "home" | "tryForFree" | "pricing") => void;
};

export type LinkElementProps = Navbar & {
  title: "home" | "tryForFree" | "pricing";
};
