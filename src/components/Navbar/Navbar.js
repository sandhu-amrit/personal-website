import React from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  ThemeToggle,
} from "./NavbarStyles";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { lightTheme } from "../../theme";

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <NavbarContainer>
      <Logo>{"<AmritSingh />"}</Logo>
      <NavLinks>
        <NavLink href="#">Career</NavLink>
        <NavLink href="#">Contact</NavLink>
        <ThemeToggle onClick={onToggleTheme}>
          {theme === lightTheme ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
