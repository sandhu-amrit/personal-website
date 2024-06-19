import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex; /* Enables Flexbox layout */
  flex-direction: column; /* Arranges children in a column */
  align-items: center; /* Centers items horizontally */
  justify-content: center; /* Centers items vertically */
  width: 100vw; /* Full width of the viewport */
  height: 100vh;
`;

export const HomeImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  padding: 6px;
  border: thick solid ${({ theme }) => theme.accentColor};
`;

export const HomeHeading = styled.h2`
  font-size: 2em;
  color: ${({ theme }) => theme.primaryColor2};
  font-family: ${({ theme }) => theme.headingTextFont};
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.accentColor};
  }
`;

export const HomeDescription = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.primaryColor2};
  font-family: ${({ theme }) => theme.paragraphTextFont};
  width: 50%;
  text-align: center;
`;
