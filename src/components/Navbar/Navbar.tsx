import { Nav } from "./styles";
import { NavbarProps } from "./types";

const Navbar = ({ title = "" }: NavbarProps) => {
  return <Nav>{title}</Nav>;
};

export default Navbar;
