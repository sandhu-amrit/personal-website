import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 30px;
  padding-top: 8px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.headingTextFont};
  color: ${({ theme }) => theme.secondaryColor};
  padding-left: 30px;
`;
export const NavLinks = styled.div`
  width: 250px;

  padding-right: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.headingTextFont};
  color: ${({ theme }) => theme.secondaryColor};
`;
export const NavLink = styled.div`
  font-size: 20px;
`;
export const ThemeToggle = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.secondaryColor};
  border: none;
  font-size: 22px;
  display: flex;
  /* flex-direction: column; */
`;
