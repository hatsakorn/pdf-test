import React, { useState, useRef } from "react";
import styled from "styled-components";
import profilePicUrl from "./preview-pdf/img/profile.svg";

const AppContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  gap: 30px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 80%;
  height: 100%;
  margin: 40px auto;
`;

const InputContainer = styled.input`
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

const InputTextContainer = styled.textarea`
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

const Datacontainer = styled.div`
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const PersonData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const PhoneText = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  margin-right: 40px;
`;

const EmailText = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
`;

const Nametxt = styled.label`
  color: #424242;
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
`;

const PageText = styled.label`
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
  font-size:36px;

`;

const HeaderText = styled.label`
  display: flex;
  align-item:left
  margin-bottom: 8px;
  font-family: 'FC-Iconic', sans-serif;
  font-weight: normal;
  font-size:18px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CheckboxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-item: left;
  margin: 10px;
`;

const CheckboxLongRow = styled.div`
  margin: 10px;
`;

const Checkboxtext = styled.label`
  display: flex;
  font-size: 16px;
`;

const CheckboxShow = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxContent = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
`;

const CheckboxButton = styled.input`
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

const CheckboxData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
`;

const DateText = styled.label`
  display: flex;
  align-item: left;
  color: #808080;
  font-size: 14px;
`;

const DisableYearText = styled.label`
  display: flex;
  align-item: left;
  color: #808080;
  font-size: 14px;
`;

const AboutText = styled.label`
  display: flex;
  align-item: left;
  color: black;
  font-size: 12px;
`;

const FunctionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ResetButton = styled.button`
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

const UpdateButton = styled.button`
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

const ShowButton = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
  font-size: 14px;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ProfilePicInput = styled.input`
  display: none;
`;

const ProfilePicPreview = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfilePicButton = styled.button`
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

const ProfilePicAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ProfilePicAboutText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);
  const [checkedEdu, setCheckedEdu] = useState(false);
  const [checkedResearch, setCheckedResearch] = useState(false);
  const [checkedReward1, setCheckedReward1] = useState(false);
  const [checkedReward2, setCheckedReward2] = useState(false);
  const [checkedReward3, setCheckedReward3] = useState(false);
  const [checkedReward4, setCheckedReward4] = useState(false);
  const [checkedExp1, setCheckedExp1] = useState(false);
  const [checkedExp2, setCheckedExp2] = useState(false);
  const [checkedCertificate, setCheckedCertificate] = useState(false);
  const [checkedCertificate2, setCheckedCertificate2] = useState(false);
  const [checkedCertificate3, setCheckedCertificate3] = useState(false);
  const [checkedCertificate4, setCheckedCertificate4] = useState(false);
  const [checkedCertificate5, setCheckedCertificate5] = useState(false);
  const [checkedCertificate6, setCheckedCertificate6] = useState(false);
  const [checkedCertificate7, setCheckedCertificate7] = useState(false);

  const [checkedShowprofile, setCheckedShowprofile] = useState(false);
  const [checkedEduhistory, setCheckedEduhistory] = useState(false);
  const [checkedShowResearch, setCheckedShowResearch] = useState(false);
  const [checkedShowReward, setCheckedShowReward] = useState(false);
  const [checkedShowExp, setCheckedShowExp] = useState(false);
  const [checkedShowContact, setCheckedShowContact] = useState(false);
  const [checkedShowExpert, setCheckedShowExpert] = useState(false);
  const [checkedShowCer, setCheckedShowCer] = useState(false);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size;

      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 5 * 1024 * 1024;

      if (!allowedTypes.includes(fileType)) {
        alert("กรุณาเลือกไฟล์สกุล .jpg, .png, หรือ .gif");
        return;
      }

      if (fileSize > maxSize) {
        alert("ขนาดไฟล์สูงสุดไม่เกิน 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCheckEduChange = (event) => {
    setCheckedEdu(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "มัธยมปลาย, ศิลศาตร์",
        year: "พ.ศ. 2565",
        grade: "เกรดเฉลี่ย 3.45",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckResearchChange = (event) => {
    setCheckedResearch(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย",
        year: "พ.ศ. 2562",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckRewardChange1 = (event) => {
    setCheckedReward1(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)",
        year: "1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckRewardChange2 = (event) => {
    setCheckedReward2(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)",
        year: "1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckRewardChange3 = (event) => {
    setCheckedReward3(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)",
        year: "1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckRewardChange4 = (event) => {
    setCheckedReward4(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)",
        year: "1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckExpChange1 = (event) => {
    setCheckedExp1(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "Clinical prediction of thoracic vertebrae fracture intraumatic injury patient.",
        year: "1 ก.พ. 2566 - 1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckExpChange2 = (event) => {
    setCheckedExp2(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "Clinical prediction of thoracic vertebrae fracture in traumatic injury patient.",
        year: "1 ก.พ. 2566 - 1 ก.พ. 2566",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange = (event) => {
    setCheckedCertificate(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ใบประกอบวิชาชีพ (ขั้นตอนที่ 2 (NL step II))",
        grade: "260 คะแนน (ร้อยละ 80.5)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange2 = (event) => {
    setCheckedCertificate2(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ใบประกอบวิชาชีพ (ขั้นตอนที่ 2 (NL step II))",
        grade: "260 คะแนน (ร้อยละ 80.5)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange3 = (event) => {
    setCheckedCertificate3(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ใบประกอบวิชาชีพ ()",
        grade: "260 คะแนน (ร้อยละ)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange4 = (event) => {
    setCheckedCertificate4(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ใบประกอบวิชาชีพ ()",
        grade: "260 คะแนน (ร้อยละ)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange5 = (event) => {
    setCheckedCertificate5(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ใบประกอบวิชาชีพ ()",
        grade: "260 คะแนน (ร้อยละ)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange6 = (event) => {
    setCheckedCertificate6(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ประมวลวิชาเวชศาสตร์ที่ 1",
        grade:
          "ครั้งที่ 1 279.5 คะแนน(ร้อยละ55.5), ครั้งที่ 2 279.5 คะแนน (ร้อยละ 55.5)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleCheckCertificateChange7 = (event) => {
    setCheckedCertificate7(event.target.checked);
    if (event.target.checked) {
      console.log({
        text: "ประมวลวิชาเวชศาสตร์ที่ 2",
        grade:
          "ครั้งที่ 1 279.5 คะแนน(ร้อยละ55.5), ครั้งที่ 2 279.5 คะแนน (ร้อยละ 55.5)",
      });
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowProfile = (event) => {
    setCheckedShowprofile(event.target.checked);
    if (event.target.checked) {
      console.log("Show profile");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowEduhistory = (event) => {
    setCheckedEduhistory(event.target.checked);
    if (event.target.checked) {
      console.log("Show Edu");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowResearch = (event) => {
    setCheckedShowResearch(event.target.checked);
    if (event.target.checked) {
      console.log("Show research");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowReward = (event) => {
    setCheckedShowReward(event.target.checked);
    if (event.target.checked) {
      console.log("Show reward");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowExp = (event) => {
    setCheckedShowExp(event.target.checked);
    if (event.target.checked) {
      console.log("Show exp");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowContact = (event) => {
    setCheckedShowContact(event.target.checked);
    if (event.target.checked) {
      console.log("Show contact");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowExpert = (event) => {
    setCheckedShowExpert(event.target.checked);
    if (event.target.checked) {
      console.log("Show Expert");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const handleShowCer = (event) => {
    setCheckedShowCer(event.target.checked);
    if (event.target.checked) {
      console.log("Show Certificate");
    } else {
      console.log("Checkbox unchecked");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    Expertise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(`${name}: ${value}`);
  };

  return (
    <AppContainer>
      <FormContainer>
        <CardHeader>
          <PageText>สร้าง Portfolio</PageText>
          <FunctionButton>
            <ResetButton>รีเซ็ทข้อมูล</ResetButton>
            <UpdateButton>อัพเดทข้อมูลใน Portfolio</UpdateButton>
          </FunctionButton>
        </CardHeader>
        <hr />
        <ProfilePicContainer>
          <ProfilePicPreview
            src={profilePic || profilePicUrl}
            alt="Profile Pic Preview"
          />
          <ProfilePicAbout>
            <ProfilePicButton onClick={handleButtonClick}>
              เปลี่ยนรูป
            </ProfilePicButton>
            <ProfilePicAboutText>
              สกุลไฟล์ที่รองรับ: .jpg, .png, .gif (ขนาดสูงสุดไม่เกิน 5MB)
            </ProfilePicAboutText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowprofile}
                onChange={handleShowProfile}
              />
              แสดงรูปใน Portfolio
            </CheckboxShow>
          </ProfilePicAbout>
          <ProfilePicInput
            type="file"
            ref={fileInputRef}
            onChange={handleProfilePicChange}
          />
        </ProfilePicContainer>
        <div>
          <Nametxt>ชื่อ</Nametxt>
          <InputContainer
            placeholder="ชื่อ-นามสกุล"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Nametxt>ตำแหน่ง</Nametxt>
          <InputContainer
            placeholder="ตำแหน่ง"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <Nametxt>อธิบายสั้นๆเกี่ยวกับตัวคุณ</Nametxt>
          <InputTextContainer
            placeholder="อธิบายสั้นๆเกี่ยวกับตัวคุณ"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ประวัติการศึกษา</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedEduhistory}
                onChange={handleShowEduhistory}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedEdu}
                onChange={handleCheckEduChange}
              />
              <CheckboxData>
                <Checkboxtext>มัธยมปลาย, ศิลศาตร์</Checkboxtext>
                <DateText>พ.ศ. 2565</DateText>
                <AboutText>เกรดเฉลี่ย 3.45</AboutText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ผลงานวิจัยและบทความตีพิมพ์</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowResearch}
                onChange={handleShowResearch}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxLongRow>
              <CheckboxButton
                type="checkbox"
                checked={checkedResearch}
                onChange={handleCheckResearchChange}
              />
              <Checkboxtext>
                การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย
              </Checkboxtext>
              <DisableYearText>พ.ศ. 2562</DisableYearText>
            </CheckboxLongRow>
          </Datacontainer>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>รางวัล</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowReward}
                onChange={handleShowReward}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedReward1}
                onChange={handleCheckRewardChange1}
              />
              <CheckboxData>
                <Checkboxtext>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </Checkboxtext>
                <DateText>1 ก.พ. 2566</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedReward2}
                onChange={handleCheckRewardChange2}
              />
              <CheckboxData>
                <Checkboxtext>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </Checkboxtext>
                <DateText>1 ก.พ. 2566</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedReward3}
                onChange={handleCheckRewardChange3}
              />
              <CheckboxData>
                <Checkboxtext>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </Checkboxtext>
                <DateText>1 ก.พ. 2566</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedReward4}
                onChange={handleCheckRewardChange4}
              />
              <CheckboxData>
                <Checkboxtext>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </Checkboxtext>
                <DateText>1 ก.พ. 2566</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>เพิ่มพูนประสบการณ์</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowExp}
                onChange={handleShowExp}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxLongRow>
              <CheckboxButton
                type="checkbox"
                checked={checkedExp1}
                onChange={handleCheckExpChange1}
              />
              <Checkboxtext>
                Clinical prediction of thoracic vertebrae fracture in traumatic
                injury patient.
              </Checkboxtext>
              <DisableYearText>1 ก.พ. 2566 - 1 ก.พ. 2566</DisableYearText>
            </CheckboxLongRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxLongRow>
              <CheckboxButton
                type="checkbox"
                checked={checkedExp2}
                onChange={handleCheckExpChange2}
              />
              <Checkboxtext>
                Clinical prediction of thoracic vertebrae fracture in traumatic
                injury patient.
              </Checkboxtext>
              <DisableYearText>1 ก.พ. 2566 - 1 ก.พ. 2566</DisableYearText>
            </CheckboxLongRow>
          </Datacontainer>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ข้อมูลการติดต่อ</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowContact}
                onChange={handleShowContact}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Nametxt>ที่อยู่</Nametxt>
          <InputTextContainer
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <PersonData>
            <PhoneText>
              <Nametxt>เบอร์โทรศัพท์</Nametxt>
              <InputContainer
                placeholder="เบอร์โทรศัพท์"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </PhoneText>
            <EmailText>
              <Nametxt>อีเมล</Nametxt>
              <InputContainer
                placeholder="อีเมล"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </EmailText>
          </PersonData>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ความเชี่ยวชาญ</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowExpert}
                onChange={handleShowExpert}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <InputTextContainer
            name="Expertise"
            value={formData.Expertise}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ใบรับรองและใบอนุญาต</HeaderText>
            <CheckboxShow>
              <ShowButton
                type="checkbox"
                checked={checkedShowCer}
                onChange={handleShowCer}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate}
                onChange={handleCheckCertificateChange}
              />
              <CheckboxData>
                <Checkboxtext>
                  ใบประกอบวิชาชีพ (ขั้นตอนที่ 2 (NL step II))
                </Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ 80.5)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate2}
                onChange={handleCheckCertificateChange2}
              />
              <CheckboxData>
                <Checkboxtext>
                  ใบประกอบวิชาชีพ (ขั้นตอนที่ 2 (NL step II))
                </Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ 80.5)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate3}
                onChange={handleCheckCertificateChange3}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate4}
                onChange={handleCheckCertificateChange4}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate5}
                onChange={handleCheckCertificateChange5}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate6}
                onChange={handleCheckCertificateChange6}
              />
              <CheckboxData>
                <Checkboxtext>ประมวลวิชาเวชศาสตร์ที่ 1</Checkboxtext>
                <DateText>
                  ครั้งที่ 1 279.5 คะแนน(ร้อยละ55.5), ครั้งที่ 2 279.5 คะแนน
                  (ร้อยละ 55.5)
                </DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <CheckboxContent
                type="checkbox"
                checked={checkedCertificate7}
                onChange={handleCheckCertificateChange7}
              />
              <CheckboxData>
                <Checkboxtext>ประมวลวิชาเวชศาสตร์ที่ 2</Checkboxtext>
                <DateText>
                  ครั้งที่ 1 279.5 คะแนน(ร้อยละ55.5), ครั้งที่ 2 279.5 คะแนน
                  (ร้อยละ 55.5)
                </DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
        </div>
      </FormContainer>
      <FormContainer>
        <div>
          {checkedShowprofile ? <div>โปรไฟล์</div> : <></>}
          {checkedEduhistory ? <div>ประวัติการศึกษา</div> : <></>}
          {checkedShowResearch ? <div>ผลงานการวิจัย</div> : <></>}
          {checkedShowReward ? <div>รางวัล</div> : <></>}
          {checkedShowExp ? <div>ประสบการณ์</div> : <></>}
          {checkedShowContact ? <div>ข้อมูลการติดต่อ</div> : <></>}
          {checkedShowExpert ? <div>เชี่ยวชาญ</div> : <></>}
          {checkedShowCer ? <div>ใบรับรองและใบอนุญาต</div> : <></>}
        </div>
      </FormContainer>
    </AppContainer>
  );
};

export default Dashboard;
