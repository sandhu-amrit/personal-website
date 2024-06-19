import styled from "styled-components";
import { IoMdSend } from "react-icons/io";

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primaryColor2};
  font-family: ${({ theme }) => theme.headingTextFont};
`;

export const Input = styled.input`
  padding: 4px 12px;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.accentColor2};
  background-color: ${({ theme }) => theme.accentColor2};
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 16px;
  border-style: solid;

  transition: background-color 5000s ease-in-out 0s; /* Fixes the autofill background color issue */

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.accentColor2}
      inset !important; /* Same background color to override autofill styles */
    -webkit-text-fill-color: ${({ theme }) =>
      theme.inputTextColor} !important; /* Text color to ensure readability */
  }
`;

export const TextArea = styled.textarea`
  width: auto;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.accentColor2};
  background-color: ${({ theme }) => theme.accentColor2};
  padding: 8px 12px;
  font-family: ${({ theme }) => theme.paragraphTextFont};
  font-size: 16px;
  resize: none;
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.secondaryColor};
  font-family: ${({ theme }) => theme.paragraphTextFont};
`;

export const StyledSendIcon = styled(IoMdSend)`
  padding-left: 10px;
`;
