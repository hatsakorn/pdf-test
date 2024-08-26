import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import BasicDocument from "./preview-pdf/pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import profile from "./preview-pdf/img/profile.png";

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

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);
  const { control, watch } = useForm({
    defaultValues: {
      checkedShowprofile: true,
      name: "Auttapon Autsawaphetrerk",
      position: "Developer Trainee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      address: "27/111 Phetkasaem114 Nhongkhaem Nhongkangphlu Bangkok 10160",
      phone: "0930146256",
      email: "batabtcom124@gmail.com",
      Expertise:
        " scrambled it to make a type unknown printer took a galley of type and scrambled it to make a typegalley of type and scrambled it to make a type it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type unknown printer took a galley of type and scrambled it to make a typegalley of type and scrambled it to make a type er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type unknown printer tod scasd scasd and scasda a",
      checkshowEducation: true,
      checkedEdu: true,
      checkshowResearch: true,
      checkedResearch: true,
      checkshowReward: true,
      checkedReward1: true,
      checkedReward2: true,
      checkedReward3: true,
      checkedReward4: true,
      checkshowExp: true,
      checkedExp1: true,
      checkedExp2: true,
      checkedShowContact: true,
      checkedShowExpertise: true,
      checkShowCer: true,
      checkedCer1: true,
      checkedCer2: true,
      checkedCer3: true,
      checkedCer4: true,
      checkedCer5: true,
      checkedCer6: true,
      checkedCer7: true,
    },
  });

  const watchValues = watch();
  const [delayedValues, setDelayedValues] = useState(watchValues);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDelayedValues(watchValues);
    }, 2500);

    return () => {
      clearTimeout(handler);
    };
  }, [watchValues]);

  const [checkedShowprofile, setCheckedShowprofile] = useState(true);

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
            src={profilePic || profile}
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
              <Controller
                name="checkedShowprofile"
                control={control}
                render={({ field }) => (
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
                )}
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxContent
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <CheckboxButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
                  <ShowButton
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
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
          <PDFDownloadLink
            document={
              <BasicDocument
                data={delayedValues}
                image={profilePic || profile}
              />
            }
            fileName="porttest.pdf">
            <DownloadButton>ส่งคำร้อง</DownloadButton>
          </PDFDownloadLink>
        </Flex>
        <Subdate>แก้ไขล่าสุด: 5 สิงหาคม 2567 เวลา 20:36</Subdate>
        <hr style={{ marginBottom: 15 }}></hr>

        <PDFViewer showToolbar={false} width={503} height={709}>
          <BasicDocument data={delayedValues} image={profilePic || profile} />
        </PDFViewer>
      </FormContainer>
    </AppContainer>
  );
};

export default Dashboard;
