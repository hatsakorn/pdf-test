import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
  Image,
} from "@react-pdf/renderer";
import fontBase from "./font/THSarabun.ttf";
import fontBold from "./font/THSarabun-Bold.ttf";
import avatar from "./img/avatar.jpg";

Font.register({ family: "textfont", src: fontBase });
Font.register({ family: "textfont-bold", src: fontBold });

const styles = StyleSheet.create({
  page: {
    fontFamily: "textfont",
    padding: 10,
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
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  mt4: {
    marginTop: "0.75rem",
  },
  borderDiv: {
    borderButtom: 1,
    borderStyle: "solid",
    borderColor: "gray",
    width: "auto",
    height: 1,
  },
  content: {
    padding: 10,
  },
  topic: {
    borderLeft: 1,
    margine: 8,
    fontSize: 14,
  },
  item_name: {
    fontSize: 12,
  },
  item_sub: {
    fontSize: 11,
    fontColor: "#A1A5B7",
  },
});

const BasicDocument = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ ...styles.flex, gap: 8 }}>
            <Image style={styles.avatar} src={avatar} />
            <View>
              <Text style={[styles.fs1, styles.bold]}>Name</Text>
              <Text style={[styles.fs2, styles.bold]}>Position</Text>
              <Text style={[styles.fs3, styles.bold, styles.mt4]}>
                Abouttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
              </Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style={styles.content}>
              <Text style={[styles.topic, styles.bold]}>
                {"  "}ประวัติการศึกษา
              </Text>
              <Text style={styles.item_name}>มัธยมปลาย</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default BasicDocument;
