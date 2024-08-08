import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import profilePicUrl from "./img/profile.svg";
import fontBase from "./font/THSarabun.ttf";
import fontBold from "./font/THSarabun-Bold.ttf";
import signer from "./img/signer.png";
import logo from "./img/logo.png";

Font.register({ family: "textfont", src: fontBase });
Font.register({ family: "textfont-bold", src: fontBold });

const styles = StyleSheet.create({
  page: {
    fontFamily: "textfont",
    padding: 20,
    marginVertical: 20,
  },
  bold: {
    fontFamily: "textfont-bold",
  },
  fs1: {
    fontSize: 22,
  },
  fs2: {
    fontSize: 16,
  },
  fs3: {
    fontSize: 13,
  },
  logo: {
    width: 50,
    height: 40,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 100,
    height: 100,
    marginLeft: 5,
  },
  mt4: {
    marginTop: 5,
  },
  content: {
    padding: 15,
  },
  topic: {
    borderLeft: "1px",
    paddingLeft: "6px",
    fontSize: 14,
    marginTop: 10,
  },
  item_name: {
    fontSize: 12,
    marginTop: 5,
  },
  item_sub: {
    fontSize: 11,
    color: "#A1A5B7",
  },
  item_sub_desc: {
    fontSize: 10,
  },
  textrightside: {
    fontSize: 13,
  },
  signer: {
    width: 100,
    height: 60,
  },
  container_sign: {
    width: 160,
    height: 140,
    marginTop: 120,
    paddingRight: 50,
    alignItems: "center",
  },
});

const BasicDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ ...styles.flex, gap: 8 }}>
          <View style={{ marginRight: 10 }}>
            <Image style={styles.avatar} src={profilePicUrl} />
          </View>
          <View>
            <View style={{ ...styles.flex, marginTop: 10 }}>
              <View style={{ width: 375 }}>
                <Text style={[styles.fs1, styles.bold]}>{data.name}</Text>
                <Text style={[styles.fs2, styles.bold]}>{data.position}</Text>
              </View>
              <View>
                <Image src={logo} style={styles.logo} />
              </View>
            </View>
            <View style={{ ...styles.flex }}>
              <Text
                style={[
                  styles.fs3,
                  styles.bold,
                  styles.mt4,
                  { marginBottom: 10 },
                ]}>
                {data.desc}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.flex,
            justifyContent: "space-between",
            borderTop: 1,
            width: 555,
            borderColor: "#ebe7e7",
          }}>
          <View style={styles.content}>
            <Text style={[styles.topic]}>{"  "}ประวัติการศึกษา</Text>
            <Text style={styles.item_name}>มัธยมปลาย, ศิลศาตร์</Text>
            <Text style={[styles.item_sub]}>
              พ.ศ. 14 เม.ย. 2559 - 14 เม.ย. 2565
            </Text>
            <Text style={[styles.item_sub_desc]}>เกรดเฉลี่ยสะสม 3.45 สาย</Text>
            <Text style={[styles.topic]}>{"  "}ประสบการณ์</Text>
            <Text style={styles.item_name}>
              Clinical prediction of thoracic vertebrae fracture in traumatic
              injury patient
            </Text>
            <Text style={[styles.item_sub]}>1 ก.พ. 2566 - 1 ก.พ. 2566</Text>
            <Text style={styles.item_name}>
              Clinical prediction of thoracic vertebrae fracture in traumatic
              injury patient
            </Text>
            <Text style={[styles.item_sub]}>1 ก.พ. 2566 - 1 ก.พ. 2566</Text>
            <Text style={[styles.topic]}>
              {"  "} เกียรติประวัติและรางวัลที่ได้รับ
            </Text>
            <Text style={styles.item_name}>
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Text>
            <Text style={[styles.item_sub]}>พ.ศ. 2564</Text>
            <Text style={styles.item_name}>
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Text>
            <Text style={[styles.item_sub]}>พ.ศ. 2564</Text>
            <Text style={styles.item_name}>
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Text>
            <Text style={[styles.item_sub]}>พ.ศ. 2563</Text>
            <Text style={styles.item_name}>
              รางวัลชนะเลิศการนำเสนอผลงานวิจัย (ระดับบัณฑิตศึกษา)
            </Text>
            <Text style={[styles.item_sub]}>พ.ศ. 2563</Text>
            <Text style={[styles.topic]}>{"  "}บทความตีพิมพ์</Text>
            <Text style={styles.item_name}>
              การแพร่กระจายของการติดเชื้อในผู้ป่วยที่ปลูกถ่ายไขกระดูกและผ่าตัดเปลี่ยนไตในผู้ป่วยไตวายเรื้อรังระยะสุดท้าย
            </Text>
            <Text style={[styles.item_sub]}>พ.ศ. 2562</Text>
          </View>
          <View
            style={{
              ...styles.content,
              ...styles.flex,
              flexDirection: "column",
              width: 140,
            }}>
            <View>
              <Text style={{ ...styles.topic, fontSize: 13 }}>
                {"  "}ข้อมูลติดต่อ
              </Text>
              <Text style={styles.textrightside}>ที่อยู่:</Text>
              <Text style={styles.textrightside}>
                {/* {data.address} */}Test
              </Text>
              <Text style={styles.textrightside}>โทรศัพท์มือถือ:</Text>
              <Text style={styles.textrightside}>093</Text>
              <Text style={styles.textrightside}>อีเมล:</Text>
              <Text style={styles.textrightside}>@hotmail</Text>
              <Text style={{ ...styles.topic, fontSize: 13 }}>
                {"  "}ความเชี่ยวชาญ
              </Text>
              <Text style={styles.textrightside}>
                {/* {data.professional} */} Test
              </Text>
            </View>
            <View style={styles.container_sign}>
              <Image style={styles.signer} src={signer} />
              <Text style={{ fontSize: 14 }}>นายอรรถพล อัศวเพชรฤกษ์</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default BasicDocument;
