import React from "react";
import styled from "styled-components";
import BasicDocument from "./pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import logo from "./img/logo.png";
import signer from "./img/signer.png";

const AppContainer = styled.div``;
const FormContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: auto;
  aspect-ratio: 1 / 1.414;
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

const CardPreview = () => {
  return (
    <AppContainer>
      <FormContainer>
        <Flex>
          <Header>ตัวอย่าง</Header>
          {/* <PDFDownloadLink document={<BasicDocument />} fileName="porttest.pdf"> */}
          <DownloadButton>ส่งคำร้อง</DownloadButton>
          {/* </PDFDownloadLink> */}
        </Flex>
        <Subdate>แก้ไขล่าสุด: 5 สิงหาคม 2567 เวลา 20:36</Subdate>
        <hr style={{ marginBottom: 15 }}></hr>
        <PreviewContainer>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <Avatar src={profilePic} alt="Avatar" />
            <div style={{ marginLeft: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 360,
                }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: "bold" }}>Name</div>
                  <div style={{ fontSize: 10, fontWeight: "bold" }}>
                    Position
                  </div>
                </div>
                <Logo src={logo} alt="Logo" />
              </div>
              <div style={{ marginTop: 5 }}>
                <div style={{ fontSize: 8, fontWeight: "bold" }}>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                borderTop: "1px solid #ebe7e7",
                paddingTop: 10,
              }}>
              <div style={{ marginBottom: 10 }}>
                <div
                  style={{
                    borderLeft: "1px solid ",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  ประวัติการศึกษา
                </div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  มัธยมปลาย, ศิลศาตร์
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                  พ.ศ. 14 เม.ย. 2559 - 14 เม.ย. 2565
                </div>
                <div style={{ fontSize: 9 }}>เกรดเฉลี่ยสะสม 3.45 สาย</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  ประสบการณ์
                </div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  Clinical prediction of thoracic vertebrae fracture in
                  traumatic injury patient.
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                  1 ก.พ. 2566 - 1 ก.พ. 2566
                </div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  Clinical prediction of thoracic vertebrae fracture in
                  traumatic injury patient.
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>
                  1 ก.พ. 2566 - 1 ก.พ. 2566
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  เกียรติประวัติและรางวัลที่ได้รับ
                </div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>พ.ศ. 2564</div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>พ.ศ. 2564</div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>พ.ศ. 2563</div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>พ.ศ. 2563</div>
              </div>
              <div>
                <div
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  บทความตีพิมพ์
                </div>
                <div style={{ fontSize: 11, marginTop: 5 }}>
                  การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย
                </div>
                <div style={{ fontSize: 10, color: "#A1A5B7" }}>พ.ศ. 2562</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 140,
              }}>
              <div style={{ marginTop: 20 }}>
                <div
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  ข้อมูลติดต่อ
                </div>
                <div style={{ fontSize: 11 }}>ที่อยู่:</div>
                <div style={{ fontSize: 11 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem
                </div>
                <div style={{ fontSize: 11 }}>โทรศัพท์มือถือ:</div>
                <div style={{ fontSize: 11 }}>(080) 123-4567</div>
                <div style={{ fontSize: 11 }}>อีเมล:</div>
                <div style={{ fontSize: 11 }}>batbatcom124@gmail.com</div>
                <div
                  style={{
                    borderLeft: "1px solid",
                    paddingLeft: 6,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  ความเชี่ยวชาญ
                </div>
                <div style={{ fontSize: 11 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </div>
              </div>
              <div style={{ marginTop: 120, textAlign: "center" }}>
                <Signer src={signer} alt="Signer" />
                <div style={{ fontSize: 12 }}>นายอรรถพล อัศวเพชรฤกษ์</div>
              </div>
            </div>
          </div>
        </PreviewContainer>
        <PDFViewer showToolbar={false} width={503} height={709}>
          <BasicDocument />
        </PDFViewer>
      </FormContainer>
    </AppContainer>
  );
};

export default CardPreview;
