import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  gap: 30px;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 80%;
  height: 100%;
  margin: 40px auto;
`;

export const InputContainer = styled.input`
  display: flex;
  align-item: left;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 97%;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

export const InputTextContainer = styled.textarea`
  display: block;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 97%;
  height: 80px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  resize: vertical;
  overflow: auto;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

export const Datacontainer = styled.div`
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PersonData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PhoneText = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  margin-right: 40px;
`;

export const EmailText = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
`;

export const Nametxt = styled.label`
  color: #424242;
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
`;

export const PageText = styled.label`
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
  font-size:36px;

`;

export const HeaderText = styled.label`
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
  font-size:18px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckboxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-item: left;
  margin: 10px;
`;

export const CheckboxLongRow = styled.div`
  margin: 10px;
`;

export const Checkboxtext = styled.label`
  display: flex;
  font-size: 16px;
`;

export const CheckboxShow = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckboxContent = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
`;

export const CheckboxButton = styled.input`
  display: flex;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
`;

export const CheckboxData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
`;

export const DateText = styled.label`
  display: flex;
  align-item: left;
  color: #808080;
  font-size: 14px;
`;

export const DisableYearText = styled.label`
  display: flex;
  align-item: left;
  color: #808080;
  font-size: 14px;
`;

export const AboutText = styled.label`
  display: flex;
  align-item: left;
  color: black;
  font-size: 12px;
`;

export const FunctionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ResetButton = styled.button`
  background: #f5f5f5;
  color: #424242;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;

  &:hover {
    background: #e5e5e5;
    color: #4d9bf7;
  }
`;

export const UpdateButton = styled.button`
  background: #0056b3;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;

  &:hover {
    background: #004494;
    color: #4d9bf7;
  }
`;

export const ShowButton = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
  font-size: 14px;
`;

export const ProfilePicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ProfilePicInput = styled.input`
  display: none;
`;

export const ProfilePicPreview = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ProfilePicButton = styled.button`
  background: #f5f5f5;
  color: #424242;
  border: none;
  padding: 10px 20px;
  width: 80px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

export const ProfilePicAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ProfilePicAboutText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;
