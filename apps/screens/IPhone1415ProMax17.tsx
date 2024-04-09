import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone1415ProMax17 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax27}>
      <LinearGradient
        style={styles.iphone1415ProMax27Child}
        locations={[0, 0.61, 1]}
        colors={["#50c9dc", "#5687b1", "#5b538f"]}
      />
      <Text style={[styles.logIn, styles.orTypo]}>Log in | Sign up</Text>
      <View style={[styles.iphone1415ProMax27Item, styles.groupInnerLayout]} />
      <Text style={[styles.verificationCode, styles.weHaveSendFlexBox]}>
        Verification code
      </Text>
      <Text
        style={[styles.weHaveSend, styles.weHaveSendTypo]}
      >{` We have send OTP code verification
 So you are mobile number`}</Text>
      <Image
        style={[styles.iphone1415ProMax27Inner, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax16")}
      >
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <Text style={[styles.conttinue, styles.conttinueTypo]}>CONTTINUE</Text>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.iphone1415ProMax27Child1, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone1415ProMax27Child2, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.generateOtp, styles.weHaveSendTypo]}>
        GENERATE OTP
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <LinearGradient
          style={[styles.groupItem, styles.groupLayout]}
          locations={[0, 0.28]}
          colors={["#74d4ea", "#427884"]}
        />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>+91</Text>
        <Text style={[styles.text1, styles.textTypo]}>8273974887</Text>
      </View>
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax19")}
      >
        <Image
          style={[styles.groupChild1, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-56.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right8.png")}
        />
      </Pressable>
      <Image
        style={[styles.iphone1415ProMax27Child3, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupInnerLayout: {
    height: 40,
    width: 245,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  weHaveSendFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  weHaveSendTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 69,
    width: 290,
    position: "absolute",
  },
  groupPosition1: {
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  conttinueTypo: {
    fontSize: FontSize.size_13xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupLayout: {
    height: 45,
    width: 333,
    position: "absolute",
  },
  groupPosition: {
    top: 3,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  vectorIconPosition: {
    left: "2.1%",
    right: "88.59%",
    width: "9.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rightIconLayout: {
    height: 58,
    position: "absolute",
  },
  iphone1415Position: {
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax27Child: {
    left: -1,
    borderRadius: Border.br_18xl,
    width: 430,
    height: 339,
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  logIn: {
    top: 260,
    left: 35,
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax27Item: {
    top: 432,
    left: 103,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  verificationCode: {
    width: "89.07%",
    top: "57.73%",
    left: "6.86%",
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  weHaveSend: {
    height: "3.22%",
    width: "52.79%",
    top: "63.19%",
    left: "24.77%",
    color: Color.colorDarkgray,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  iphone1415ProMax27Inner: {
    right: "16.09%",
    left: "69.72%",
    bottom: "24.14%",
    top: "69.96%",
    height: "5.9%",
    maxWidth: "100%",
    width: "14.19%",
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkorange,
    height: 69,
    width: 290,
    position: "absolute",
  },
  conttinue: {
    left: 49,
    color: Color.colorSnow_100,
    top: 15,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 811,
    left: 76,
  },
  groupIcon: {
    height: "1.27%",
    width: "2.77%",
    top: "43.56%",
    right: "80.07%",
    bottom: "55.17%",
    left: "17.16%",
  },
  or: {
    top: "52.33%",
    left: "49.63%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseIcon: {
    right: "64.7%",
    left: "21.12%",
    bottom: "24.14%",
    top: "69.96%",
    height: "5.9%",
    maxWidth: "100%",
    width: "14.19%",
  },
  iphone1415ProMax27Child1: {
    width: "14.42%",
    right: "47.72%",
    left: "37.86%",
    bottom: "24.14%",
    top: "69.96%",
    height: "5.9%",
    maxWidth: "100%",
  },
  iphone1415ProMax27Child2: {
    right: "32.14%",
    left: "53.67%",
    bottom: "24.14%",
    top: "69.96%",
    height: "5.9%",
    maxWidth: "100%",
    width: "14.19%",
  },
  generateOtp: {
    top: 445,
    left: 180,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRed,
  },
  groupItem: {
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    borderRadius: Border.br_3xs,
    width: 333,
    backgroundColor: "transparent",
  },
  groupInner: {
    left: 86,
    height: 40,
    width: 245,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    top: "25.11%",
    bottom: "57.27%",
    height: "17.62%",
    left: "2.1%",
    right: "88.59%",
    width: "9.31%",
  },
  vectorIcon1: {
    height: "15.42%",
    top: "42.73%",
    bottom: "41.85%",
  },
  vectorIcon2: {
    top: "58.15%",
    bottom: "24.23%",
    height: "17.62%",
    left: "2.1%",
    right: "88.59%",
    width: "9.31%",
  },
  text: {
    top: "29.52%",
    left: "13.51%",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  text1: {
    left: 102,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    top: 15,
    textAlign: "center",
  },
  rectangleGroup: {
    top: 386,
    left: 53,
  },
  groupChild1: {
    left: 5,
    width: 59,
    height: 51,
  },
  rightIcon: {
    width: 62,
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseParent: {
    top: 62,
    left: 16,
    width: 64,
  },
  iphone1415ProMax27Child3: {
    top: 63,
    left: 350,
    width: 53,
    height: 55,
  },
  iphone1415ProMax27: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 932,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax17;
