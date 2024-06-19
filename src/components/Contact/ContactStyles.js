import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const ContactContainer = styled.div`
  display: flex; /* Enables Flexbox layout */
  flex-direction: column; /* Arranges children in a column */
  align-items: center; /* Centers items horizontally */
  justify-content: center; /* Centers items vertically */
  width: 100%; /* Full width of the viewport */
  margin-top: 140px;
`;

export const ContactHeading = styled.h2`
  font-family: ${({ theme }) => theme.headingTextFont};
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 25px;
  background-color: ${({ theme }) => theme.primaryColor2};
  padding: 5px 10px;
`;
export const ContactDescription = styled.p`
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 1.1em;
  width: 50%;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor2};
  margin-bottom: 40px;
`;
export const EmailContainer = styled.div`
  width: 50%;
  border-top: solid;
  border-color: ${({ theme }) => theme.primaryColor2};
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Email = styled.p`
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 1em;
  padding-left: 10px;
  margin: 12px;
  color: ${({ theme }) => theme.primaryColor2};
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Location = styled.p`
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 1em;
  padding-left: 10px;
  margin: 12px;
  color: ${({ theme }) => theme.primaryColor2};
`;

export const Links = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  width: 125px;
  color: ${({ theme }) => theme.secondaryColor};
  margin: 12px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  &:visited {
    color: inherit; /* Remove visited link color */
  }
`;

export const StyledEmailIcon = styled(MdEmail)`
  color: ${({ theme }) => theme.secondaryColor};
`;

export const StyledLocationIcon = styled(FaLocationDot)`
  color: ${({ theme }) => theme.secondaryColor};
`;
