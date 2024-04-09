import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.iphone1415ProMax21, styles.iconLayout]}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax21Child}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <View style={[styles.iphone1415ProMax21Item, styles.rectangleLayout]} />
      <Image
        style={styles.iphone1415ProMax21Inner}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={[styles.selectLanguageHkkkkContainer, styles.fganhClr]}>
        <Text style={styles.englishTypo}>
          <Text style={styles.selectLanguage1}>{`Select Language
`}</Text>
          <Text style={styles.text}> /</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.hkkkkPqusa1}>Hkk”kk pqusa</Text>
          <Text style={styles.englishTypo}>{` `}</Text>
        </Text>
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.fganhPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={styles.right}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleLayout]}
        locations={[0, 0.46, 1]}
        colors={["#52b4ce", "#5687b1", "#5b538f"]}
      />
      <View style={[styles.iphone1415ProMax21Child1, styles.rectangleLayout]} />
      <Text style={[styles.english, styles.englishTypo]}>English</Text>
      <Text style={[styles.fganh, styles.fganhPosition]}>fganh</Text>
      <View style={styles.iphone1415ProMax21Child2} />
      <Text style={styles.continueVkxsContainer}>
        <Text style={styles.continue}>{`CONTINUE / `}</Text>
        <Text style={styles.hkkkkPqusa1}>{`vkxs c<s!`}</Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleLayout: {
    height: 88,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  fganhClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  fganhPosition: {
    left: 23,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  englishTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iphone1415ProMax21Child: {
    marginTop: -465,
    marginLeft: -229.3,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_31xl,
    width: 458,
    height: 949,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax21Item: {
    top: 30,
    backgroundColor: Color.colorLightblue,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -2,
  },
  iphone1415ProMax21Inner: {
    top: 45,
    left: 349,
    width: 53,
    height: 55,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  selectLanguage1: {
    fontSize: FontSize.size_13xl,
  },
  text: {
    fontSize: FontSize.size_5xl,
  },
  hkkkkPqusa1: {
    fontFamily: FontFamily.krutiDev040Bold,
    fontWeight: "700",
  },
  selectLanguageHkkkkContainer: {
    top: 41,
    left: 85,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseIcon: {
    top: 44,
    width: 58,
    height: 58,
  },
  icon: {
    height: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  right: {
    left: 20,
    top: 40,
    width: 60,
    height: 66,
    position: "absolute",
  },
  rectangleView: {
    top: 118,
    left: -1,
    backgroundColor: Color.colorLightblue,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  rectangleLineargradient: {
    top: -58,
    left: -4,
    backgroundColor: "transparent",
  },
  iphone1415ProMax21Child1: {
    top: 206,
    backgroundColor: Color.colorLightblue,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -2,
  },
  english: {
    top: 150,
    left: 18,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  fganh: {
    top: 233,
    fontFamily: FontFamily.krutiDev020Wide,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  iphone1415ProMax21Child2: {
    top: 308,
    left: 13,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSandybrown_100,
    width: 399,
    height: 84,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  continue: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  continueVkxsContainer: {
    top: 328,
    left: 67,
    color: Color.colorSnow_100,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax21: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
});

export default IPhone1415ProMax1;
