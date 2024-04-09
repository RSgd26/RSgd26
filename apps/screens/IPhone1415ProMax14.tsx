import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1415ProMax14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax9}
      locations={[0, 0.7, 1]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={[styles.iphone1415ProMax9Child, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.isolationModeIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/isolation-mode1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Item, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-181.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Inner, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.eShramCard, styles.orTypo]}>{`E-SHRAM CARD
`}</Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child1, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax12")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.conttinue, styles.orTypo]}>CONTTINUE</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child2, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child3, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child4, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.generateOtp}>GENERATE OTP</Text>
      <Text style={[styles.verificationCode, styles.weHaveSendFlexBox]}>
        Verification code
      </Text>
      <Text
        style={[styles.weHaveSend, styles.weHaveSendFlexBox]}
      >{` We have send OTP code verification
 So you are mobile number`}</Text>
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <View style={[styles.ellipseGroup, styles.rightIconLayout]}>
        <Image
          style={[styles.groupInner, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-54.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right5.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  groupIconPosition: {
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415Layout: {
    height: 799,
    width: 510,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleIconPosition: {
    left: -28,
    height: 799,
    width: 510,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupChildLayout: {
    width: 290,
    height: 69,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "21.67%",
    top: "72.42%",
    height: "5.9%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  weHaveSendFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupItemLayout: {
    height: 42,
    width: 44,
    position: "absolute",
  },
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  iphone1415ProMax9Child: {
    top: 95,
    left: 52,
    width: 322,
    height: 289,
  },
  isolationModeIcon: {
    top: 155,
    left: 106,
    width: 210,
    height: 131,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax9Item: {
    top: 181,
    left: -35,
  },
  iphone1415ProMax9Inner: {
    top: 215,
  },
  eShramCard: {
    top: 324,
    left: 76,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
  },
  rectangleView: {
    top: 402,
    left: 40,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkturquoise_100,
    borderWidth: 3,
    width: 357,
    height: 69,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleIcon: {
    top: 656,
  },
  iphone1415ProMax9Child1: {
    top: 698,
    left: -40,
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkorange,
    width: 290,
    height: 69,
    position: "absolute",
  },
  conttinue: {
    top: 15,
    left: 49,
    color: Color.colorSnow_100,
    fontSize: FontSize.size_13xl,
  },
  rectangleParent: {
    top: 791,
    left: 70,
  },
  ellipseIcon: {
    right: "17.49%",
    left: "68.33%",
    width: "14.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "21.67%",
    top: "72.42%",
    height: "5.9%",
  },
  iphone1415ProMax9Child2: {
    right: "66.09%",
    left: "19.72%",
    width: "14.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "21.67%",
    top: "72.42%",
    height: "5.9%",
  },
  iphone1415ProMax9Child3: {
    width: "14.42%",
    right: "49.12%",
    left: "36.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "21.67%",
    top: "72.42%",
    height: "5.9%",
  },
  iphone1415ProMax9Child4: {
    right: "33.53%",
    left: "52.28%",
    width: "14.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "21.67%",
    top: "72.42%",
    height: "5.9%",
  },
  generateOtp: {
    top: 487,
    left: 173,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRed,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  verificationCode: {
    width: "89.07%",
    top: "62.12%",
    left: "6.63%",
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    fontSize: FontSize.size_13xl,
  },
  weHaveSend: {
    height: "3.22%",
    width: "52.79%",
    top: "67.59%",
    left: "24.56%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupItem: {
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  or: {
    top: "21.38%",
    left: "15.87%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
  },
  ellipseParent: {
    top: 524,
    left: 204,
  },
  groupIcon: {
    top: 47,
    left: 349,
    width: 53,
    height: 55,
  },
  groupInner: {
    top: 4,
    left: 4,
    width: 58,
    height: 58,
  },
  rightIcon: {
    width: 60,
    left: 0,
    top: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseGroup: {
    top: 42,
    left: 18,
    width: 62,
  },
  iphone1415ProMax9: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
});

export default IPhone1415ProMax14;
