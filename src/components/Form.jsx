import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import profilePicUrl from "./preview-pdf/img/profile.svg";
import BasicDocument from "./preview-pdf/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import logo from "./preview-pdf/img/logo.png";
import signer from "./preview-pdf/img/signer.png";

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

const Header = styled.label`
  font-size: 16px;
`;
const Subdate = styled.label`
  font-size: 11px;
  border-bottom: 1px solid gray;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DownloadButton = styled.button`
  background: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;

  &:hover {
    background: #004494;
  }
`;

const PreviewContainer = styled.div`
  width: 525px;
  height: 743px;
  background-color: #f5f5f5;
  padding: 20px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 5px;
`;

const Logo = styled.img`
  width: 50px;
  height: 40px;
`;

const Signer = styled.img`
  width: 100px;
  height: 60px;
`;

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);
  const { control, watch } = useForm({
    name: "",
    position: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    Expertise: "",
    checkshowEducation: false,
    checkedEdu: false,
    checkshowResearch: false,
    checkedResearch: false,
    checkshowReward: false,
    checkedReward1: false,
    checkedReward2: false,
    checkedReward3: false,
    checkedReward4: false,
    checkshowExp: false,
    checkedExp1: false,
    checkedExp2: false,
    checkedShowContact: false,
    checkShowCer: false,
    checkedCer1: false,
    checkedCer2: false,
    checkedCer3: false,
    checkedCer4: false,
    checkedCer5: false,
    checkedCer6: false,
    checkedCer7: false,
  });
  const watchValues = watch();
  const checkshowEducation = watch("checkshowEducation");
  const checkedEdu = watch("checkedEdu");
  const checkshowResearch = watch("checkshowResearch");
  const checkedResearch = watch("checkedResearch");
  const checkshowReward = watch("checkshowReward");
  const checkedReward1 = watch("checkedReward1");
  const checkedReward2 = watch("checkedReward2");
  const checkedReward3 = watch("checkedReward3");
  const checkedReward4 = watch("checkedReward4");
  const checkshowExp = watch("checkshowExp");
  const checkedExp1 = watch("checkedExp1");
  const checkedExp2 = watch("checkedExp2");
  const checkedShowContact = watch("checkedShowContact");
  const checkedShowExpertise = watch("checkedShowExpertise");
  const checkedShowCer = watch("checkShowCer");
  const checkCer1 = watch("checkedCer1");
  const checkCer2 = watch("checkedCer2");
  const checkCer3 = watch("checkedCer3");
  const checkCer4 = watch("checkedCer4");
  const checkCer5 = watch("checkedCer5");
  const checkCer6 = watch("checkedCer6");
  const checkCer7 = watch("checkedCer7");

  const [checkedShowprofile, setCheckedShowprofile] = useState(false);

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

  const handleShowProfile = (event) => {
    setCheckedShowprofile(event.target.checked);
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
          <Controller
            name="name"
            control={control}
            render={({ field }) => <InputTextContainer {...field} />}
          />
        </div>
        <div>
          <Nametxt>ตำแหน่ง</Nametxt>
          <Controller
            name="position"
            control={control}
            render={({ field }) => <InputTextContainer {...field} />}
          />
        </div>
        <div>
          <Nametxt>อธิบายสั้นๆเกี่ยวกับตัวคุณ</Nametxt>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <InputTextContainer {...field} />}
          />
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ประวัติการศึกษา</HeaderText>
            <CheckboxShow>
              <Controller
                name="checkshowEducation"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedEdu"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkshowResearch"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxLongRow>
              <Controller
                name="checkedResearch"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkshowReward"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedReward1"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedReward2"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedReward3"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedReward4"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkshowExp"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxLongRow>
              <Controller
                name="checkedExp1"
                control={control}
                render={({ field }) => (
                  <CheckboxButton type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedExp2"
                control={control}
                render={({ field }) => (
                  <CheckboxButton type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedShowContact"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Nametxt>ที่อยู่</Nametxt>
          <Controller
            name="address"
            control={control}
            render={({ field }) => <InputTextContainer {...field} />}
          />
          <PersonData>
            <PhoneText>
              <Nametxt>เบอร์โทรศัพท์</Nametxt>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <InputContainer {...field} />}
              />
            </PhoneText>
            <EmailText>
              <Nametxt>อีเมล</Nametxt>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <InputContainer {...field} />}
              />
            </EmailText>
          </PersonData>
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ความเชี่ยวชาญ</HeaderText>
            <CheckboxShow>
              <Controller
                name="checkedShowExpertise"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Controller
            name="Expertise"
            control={control}
            render={({ field }) => <InputTextContainer {...field} />}
          />
        </div>
        <hr />
        <div>
          <CardHeader>
            <HeaderText>ใบรับรองและใบอนุญาต</HeaderText>
            <CheckboxShow>
              <Controller
                name="checkShowCer"
                control={control}
                render={({ field }) => (
                  <ShowButton type="checkbox" {...field} />
                )}
              />
              แสดง
            </CheckboxShow>
          </CardHeader>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedCer1"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedCer2"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedCer3"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedCer4"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedCer5"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
              />
              <CheckboxData>
                <Checkboxtext>ใบประกอบวิชาชีพ ()</Checkboxtext>
                <DateText>260 คะแนน (ร้อยละ)</DateText>
              </CheckboxData>
            </CheckboxRow>
          </Datacontainer>
          <Datacontainer>
            <CheckboxRow>
              <Controller
                name="checkedCer6"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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
              <Controller
                name="checkedCer7"
                control={control}
                render={({ field }) => (
                  <CheckboxContent type="checkbox" {...field} />
                )}
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

      {/*Preview PDF */}

      <FormContainer>
        <Flex>
          <Header>ตัวอย่าง</Header>
          <PDFDownloadLink document={<BasicDocument />} fileName="porttest.pdf">
            <DownloadButton>ส่งคำร้อง</DownloadButton>
          </PDFDownloadLink>
        </Flex>
        <Subdate>แก้ไขล่าสุด: 5 สิงหาคม 2567 เวลา 20:36</Subdate>
        <hr style={{ marginBottom: 15 }}></hr>
        <PreviewContainer>
          <div style={{ display: "flex", marginBottom: 10 }}>
            {checkedShowprofile ? (
              <div>
                <Avatar src={profilePic || profilePicUrl} />
              </div>
            ) : null}
            <div style={{ marginLeft: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 420,
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: "bold" }}>
                    {watchValues.name}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: "bold" }}>
                    {watchValues.position}
                  </div>
                </div>
                <Logo src={logo} alt="Logo" />
              </div>
              <div style={{ marginTop: 5 }}>
                <div style={{ fontSize: 8, fontWeight: "bold" }}>
                  {watchValues.description}
                </div>
              </div>
            </div>
          </div>

          {/* การศึกษา*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                borderTop: "1px solid #ebe7e7",
                paddingTop: 10,
              }}
            >
              {checkshowEducation ? (
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      borderLeft: "1px solid ",
                      paddingLeft: 6,
                      fontSize: 12,
                      marginTop: 10,
                    }}
                  >
                    ประวัติการศึกษา
                  </div>
                  {checkedEdu ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        มัธยมปลาย, ศิลศาตร์
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 14 เม.ย. 2559 - 14 เม.ย. 2565
                      </div>
                      <div style={{ fontSize: 9 }}>เกรดเฉลี่ยสะสม 3.45 สาย</div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* งานวิจัย*/}
              {checkshowResearch ? (
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      borderLeft: "1px solid",
                      paddingLeft: 6,
                      fontSize: 12,
                      marginTop: 10,
                    }}
                  >
                    ผลงานวิจัยและบทความตีพิมพ์
                  </div>
                  {checkedResearch ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 2562
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* รางวัล*/}
              {checkshowReward ? (
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      borderLeft: "1px solid",
                      paddingLeft: 6,
                      fontSize: 12,
                      marginTop: 10,
                    }}
                  >
                    เกียรติประวัติและรางวัลที่ได้รับ
                  </div>
                  {checkedReward1 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 2564
                      </div>
                    </div>
                  ) : null}
                  {checkedReward2 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 2564
                      </div>
                    </div>
                  ) : null}
                  {checkedReward3 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 2564
                      </div>
                    </div>
                  ) : null}
                  {checkedReward4 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        พ.ศ. 2564
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* Exp*/}

              {checkshowExp ? (
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      borderLeft: "1px solid",
                      paddingLeft: 6,
                      fontSize: 12,
                      marginTop: 10,
                    }}
                  >
                    เกียรติประวัติและรางวัลที่ได้รับ
                  </div>
                  {checkedExp1 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        Clinical prediction of thoracic vertebrae fracture in
                        traumatic injury patient.
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        1 ก.พ. 2566 - 1 ก.พ. 2566
                      </div>
                    </div>
                  ) : null}
                  {checkedExp2 ? (
                    <div>
                      <div style={{ fontSize: 11, marginTop: 5 }}>
                        Clinical prediction of thoracic vertebrae fracture in
                        traumatic injury patient.
                      </div>
                      <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                        1 ก.พ. 2566 - 1 ก.พ. 2566
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* งานวิจัย*/}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 140,
              }}
            >
              <div style={{ marginTop: 20 }}>
                {checkedShowContact ? (
                  <div>
                    <div
                      style={{
                        borderLeft: "1px solid",
                        paddingLeft: 6,
                        fontSize: 12,
                        marginTop: 10,
                      }}
                    >
                      ข้อมูลติดต่อ
                    </div>
                    <div style={{ fontSize: 11 }}>ที่อยู่:</div>
                    <div style={{ fontSize: 11 }}>{watchValues.address}</div>
                    <div style={{ fontSize: 11 }}>โทรศัพท์มือถือ:</div>
                    <div style={{ fontSize: 11 }}>{watchValues.phone}</div>
                    <div style={{ fontSize: 11 }}>อีเมล:</div>
                    <div style={{ fontSize: 11 }}>{watchValues.email}</div>
                  </div>
                ) : null}

                {/* งานวิจัย*/}
                {checkedShowExpertise ? (
                  <div>
                    <div
                      style={{
                        borderLeft: "1px solid",
                        paddingLeft: 6,
                        fontSize: 12,
                        marginTop: 10,
                      }}
                    >
                      ความเชี่ยวชาญ
                    </div>
                    <div style={{ fontSize: 11 }}>{watchValues.Expertise}</div>
                  </div>
                ) : null}
              </div>

              {/* งานวิจัย*/}
              {checkedShowCer ? (
                <div>
                  <div>cer</div>
                  {checkCer1 ? (
                    <div>
                      <div>รางวัล1</div>
                    </div>
                  ) : null}
                  {checkCer2 ? (
                    <div>
                      <div>รางวัล2</div>
                    </div>
                  ) : null}
                  {checkCer3 ? (
                    <div>
                      <div>รางวัล3</div>
                    </div>
                  ) : null}
                  {checkCer4 ? (
                    <div>
                      <div>รางวัล4</div>
                    </div>
                  ) : null}
                  {checkCer5 ? (
                    <div>
                      <div>รางวัล5</div>
                    </div>
                  ) : null}
                  {checkCer6 ? (
                    <div>
                      <div>รางวัล6</div>
                    </div>
                  ) : null}
                  {checkCer7 ? (
                    <div>
                      <div>รางวัล7</div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div style={{ marginTop: 120, textAlign: "center" }}>
                <Signer src={signer} alt="Signer" />
                <div style={{ fontSize: 12 }}>นายอรรถพล อัศวเพชรฤกษ์</div>
              </div>
            </div>
          </div>
        </PreviewContainer>
        {/* <PDFViewer showToolbar={false} width={503} height={709}>
          <BasicDocument />
        </PDFViewer> */}
      </FormContainer>
    </AppContainer>
  );
};

export default Dashboard;
