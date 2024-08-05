import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 80%;
  max-width: 800px;
  margin: 40px auto;
  font
`;

const InputContainer = styled.input`
  display: flex;
  align-item: left;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const InputTextContainer = styled.input`
  display: flex;
  align-item: left;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  height: 80px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const Nametxt = styled.label`
  color: #000000;
  display: flex;
  align-item:left
  margin-bottom: 8px;
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
`;

const Checkboxtext = styled.label`
  display: flex;
  align-item: left;
  color: black;
  
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

const DisableText = styled.label`
  display: flex;
  align-item: left;
  margin-left: 20px;
  color: lightgray;
`;

const DisableYearText = styled.label`
  display: flex;
  align-item: left;
  color: lightgray;
`;

const AboutText = styled.label`
  display: flex;
  align-item: left;
  margin-left: 20px;
  color: black;
`;

const ResetButton = styled.button`
  background: lightgray;
  color: black;
  margin-left: 45%;
`;

const UpdateButton = styled.button`
  background: blue;
`;

const ShowButton = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 3px;
  background-color: white;
  position: relative;
  cursor: pointer;
`;

// const ProfilePicLabel = styled.label`
//   display: block;
//   margin-top: 20px;
//   margin-bottom: 10px;
// `;

// const ProfilePicInput = styled.input`
//   margin-bottom: 20px;
// `;

// const ProfilePicPreview = styled.img`
//   margin-top: 10px;
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 50%;
// `;

const Dashboard = () => {
  const { handleSubmit } = useForm();
  // const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);

  // const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setProfilePicUrl(URL.createObjectURL(file));
  //   }
  // };

  const onsubmit= (data) => {
    // handle form submission
    console.log(data);
  };

  return (
    <AppContainer>
      <FormContainer>
        <CardHeader>
          <Nametxt>สร้าง Portfolio</Nametxt>
          <ResetButton>รีเซ็ทข้อมูล</ResetButton>
          <UpdateButton>อัพเดทข้อมูลใน Portfolio</UpdateButton>
        </CardHeader>
        <form onSubmit={handleSubmit(onsubmit)}>
          {/* <ProfilePicLabel>
            {profilePicUrl && (
              <ProfilePicPreview
                src={profilePicUrl}
                alt="Profile Pic Preview"
              />
            )}
            <div style={{ marginBottom: "5px" }}>🖼️รูปโปรไฟล์:</div>
            <ProfilePicInput type="file" onChange={handleProfilePicChange} />
          </ProfilePicLabel> */}
          <div>
            <Nametxt>ชื่อ</Nametxt>
            <InputContainer placeholder="ชื่อ-นามสกุล" />
          </div>
          <div>
            <Nametxt>ตำแหน่ง</Nametxt>
            <InputContainer placeholder="ตำแหน่ง" />
          </div>
          <div>
            <Nametxt>อธิบายสั้นๆเกี่ยวกับตัวคุณ</Nametxt>
            <InputTextContainer />
          </div>
          <div>
            <CardHeader>
              <Nametxt>ประวัติการศึกษา</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <CheckboxRow>
              <CheckboxContent type="checkbox" />
              <Checkboxtext>มัธยมปลาย, ศิลศาตร์</Checkboxtext>
            </CheckboxRow>
            <DisableText>พ.ศ. 2565</DisableText>
            <AboutText>เกรดเฉลี่ย 3.45</AboutText>
          </div>
          <div>
            <CardHeader>
              <Nametxt>ผลงานวิจัยและบทความตีพิมพ์</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <CheckboxButton type="checkbox" />
            <Checkboxtext>
              การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย
            </Checkboxtext>
            <DisableYearText>พ.ศ. 2562</DisableYearText>
          </div>
          <div>
            <CardHeader>
              <Nametxt>รางวัล</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Checkboxtext>
            <DisableText>1 ก.พ. 2566</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Checkboxtext>
            <DisableText>1 ก.พ. 2566</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Checkboxtext>
            <DisableText>1 ก.พ. 2566</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Checkboxtext>
            <DisableText>1 ก.พ. 2566</DisableText>
          </div>
          <div>
            <CardHeader>
              <Nametxt>เพิ่มพูนประสบการณ์</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <CheckboxButton type="checkbox" />
            <Checkboxtext>
              Clinical prediction of thoracic vertebrae fracture in traumatic
              injury patient.
            </Checkboxtext>
            <DisableYearText>1 ก.พ. 2566 - 1 ก.พ. 2566</DisableYearText>
            <CheckboxButton type="checkbox" />
            <Checkboxtext>
              Clinical prediction of thoracic vertebrae fracture in traumatic
              injury patient.
            </Checkboxtext>
            <DisableYearText>1 ก.พ. 2566 - 1 ก.พ. 2566</DisableYearText>
          </div>
          <div>
            <CardHeader>
              <Nametxt>ข้อมูลการติดต่อ</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <Nametxt>ที่อยู่</Nametxt>
            <InputTextContainer />
            <Nametxt>เบอร์โทรศัพท์</Nametxt>
            <InputContainer placeholder="เบอร์โทรศัพท์" />
            <Nametxt>อีเมล</Nametxt>
            <InputContainer placeholder="อีเมล" />
          </div>
          <div>
            <CardHeader>
              <Nametxt>ความเชี่ยวชาญ</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <InputTextContainer placeholder="" />
          </div>
          <div>
            <CardHeader>
              <Nametxt>ใบรับรองและใบอนุญาต</Nametxt>
              <Checkboxtext>
                <ShowButton type="checkbox" />
                แสดง
              </Checkboxtext>
            </CardHeader>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ใบประกอบวิชาชีพ (ขั้นตอนที่ 2 (NL step II))
            </Checkboxtext>
            <DisableText>260 คะแนน (ร้อยละ 80.5)</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ใบประกอบวิชาชีพ (ขั้นตอนที่ 1 (NL step II))
            </Checkboxtext>
            <DisableText>260 คะแนน (ร้อยละ 80.5)</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ใบประกอบวิชาชีพ ()
            </Checkboxtext>
            <DisableText>260 คะแนน (ร้อยละ )</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ใบประกอบวิชาชีพ ()
            </Checkboxtext>
            <DisableText>260 คะแนน (ร้อยละ )</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ใบประกอบวิชาชีพ ()
            </Checkboxtext>
            <DisableText>260 คะแนน (ร้อยละ )</DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ประมวลวิชาเวชศาสตร์ที่ 1
            </Checkboxtext>
            <DisableText>
              ครั้งที่ 1 279.5 คะแนน (ร้อยละ 55.5), ครั้งที่ 2 279.5
              คะแนน(ร้อยละ 55.5)
            </DisableText>
            <Checkboxtext>
              <CheckboxContent type="checkbox" />
              ประมวลวิชาเวชศาสตร์ที่ 2
            </Checkboxtext>
            <DisableText>
              ครั้งที่ 1 279.5 คะแนน (ร้อยละ 55.5), ครั้งที่ 2 279.5 คะแนน
              (ร้อยละ 55.5)
            </DisableText>
          </div>
        </form>
      </FormContainer>
    </AppContainer>
  );
};

export default Dashboard;
