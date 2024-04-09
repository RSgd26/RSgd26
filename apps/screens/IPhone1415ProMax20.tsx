import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const IPhone1415ProMax20 = () => {
  return (
    <View style={styles.iphone1415ProMax1}>
      <LinearGradient
        style={[
          styles.iphone1415ProMax1Child,
          styles.shramikSeva21IconPosition,
        ]}
        locations={[0, 0.41, 1]}
        colors={["#dbe9f6", "#e1e7ed", "#fae0c6"]}
      />
      <Image
        style={[styles.shramikSeva21Icon, styles.shramikSeva21IconPosition]}
        contentFit="cover"
        source={require("../assets/shramikseva2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shramikSeva21IconPosition: {
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax1Child: {
    top: 13,
    left: 14,
    borderRadius: Border.br_18xl,
    width: 400,
    height: 906,
    backgroundColor: "transparent",
  },
  shramikSeva21Icon: {
    top: 278,
    left: 25,
    width: 380,
    height: 375,
  },
  iphone1415ProMax1: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
});

export default IPhone1415ProMax20;
