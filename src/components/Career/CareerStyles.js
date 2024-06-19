import styled from "styled-components";

export const CareerContainer = styled.div`
  display: flex; /* Enables Flexbox layout */
  flex-direction: column; /* Arranges children in a column */
  align-items: center; /* Centers items horizontally */
  justify-content: center; /* Centers items vertically */
  width: 100%; /* Full width of the viewport */
`;
export const CareerHeading = styled.h2`
  font-family: ${({ theme }) => theme.headingTextFont};
  margin-bottom: 70px;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 700;
  font-size: 2em;
  background-color: ${({ theme }) => theme.primaryColor2};
  padding: 5px 10px;
`;

export const CareerCard = styled.div`
  /* border-style: solid; */
  width: 50%;
  display: flex; /* Enables Flexbox layout */
  flex-direction: row; /* Arranges children in a column */
`;

export const Circle = styled.div`
  width: 15px; /* Set the width of the circle */
  height: 15px; /* Set the height of the circle */
  background-color: white; /* Set the background color of the circle */
  border: ${({ theme }) => theme.accentColor};
  border-radius: 50%; /* Make it a circle */
  border-style: solid;
  position: absolute;
  left: -10px;
  top: 18px;
`;

export const CareerDate = styled.h3`
  width: 33.3%;
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryColor};
  padding-right: 4%;
  text-align: end;
`;

export const TitleAndDescription = styled.div`
  border-left: solid;
  border-color: ${({ theme }) => theme.accentColor};
  padding-left: 4%;
  position: relative;
  width: 66.6%;
`;

export const CareerTitle = styled.h3`
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryColor};
`;
export const CareerDescription = styled.p`
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 1em;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.primaryColor2};
`;
