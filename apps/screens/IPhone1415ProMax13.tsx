import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone1415ProMax13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax11}
      locations={[0, 0.8, 1]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={[styles.iphone1415ProMax11Child, styles.iphone1415ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.isolationModeIcon, styles.iphone1415ChildPosition]}
        contentFit="cover"
        source={require("../assets/isolation-mode1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Item, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Inner, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.iphone1415ProMax11Child1, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Child2, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax12")}
      >
        <View style={[styles.groupChild, styles.rightIconPosition]} />
        <Text style={[styles.conttinue, styles.orTypo]}>CONTTINUE</Text>
      </Pressable>
      <Text style={[styles.aadhaarCard, styles.orTypo]}>{`AADHAAR CARD `}</Text>
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Child3, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Child4, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone1415ProMax11Child5, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={styles.generateOtp}>GENERATE OTP</Text>
      <Text style={[styles.verificationCode, styles.weHaveSendFlexBox]}>
        Verification code
      </Text>
      <Text
        style={[styles.weHaveSend, styles.weHaveSendFlexBox]}
      >{` We have send OTP code verification
 So you are mobile number`}</Text>
      <Image
        style={[
          styles.iphone1415ProMax11Child6,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <Image
        style={[styles.groupIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <View style={[styles.ellipseParent, styles.rightIconLayout]}>
        <Image
          style={[styles.groupItem, styles.iphone1415ChildPosition]}
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
  iphone1415ChildPosition: {
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
    left: -22,
    height: 799,
    width: 510,
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
  rightIconPosition: {
    left: 0,
    top: 0,
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
  iconChildLayout: {
    height: 55,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  weHaveSendFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  iphone1415ProMax11Child: {
    top: 99,
    left: 52,
    width: 322,
    height: 289,
  },
  isolationModeIcon: {
    top: 158,
    left: 108,
    width: 210,
    height: 131,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax11Item: {
    left: -35,
    top: 181,
    height: 799,
    width: 510,
  },
  iphone1415ProMax11Inner: {
    left: -35,
    top: 181,
    height: 799,
    width: 510,
  },
  rectangleIcon: {
    top: 216,
  },
  rectangleView: {
    marginTop: -76,
    left: 36,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkturquoise_100,
    borderWidth: 3,
    width: 357,
    height: 69,
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax11Child1: {
    top: 656,
    left: -28,
  },
  iphone1415ProMax11Child2: {
    top: 703,
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
  aadhaarCard: {
    marginTop: -134.1,
    marginLeft: -148.8,
    left: "50%",
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    width: 358,
    height: 48,
    top: "50%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  ellipseIcon: {
    right: "19.35%",
    left: "66.47%",
    maxWidth: "100%",
    marginTop: 209,
    height: 55,
    top: "50%",
    overflow: "hidden",
    width: "14.19%",
  },
  iphone1415ProMax11Child3: {
    right: "67.95%",
    left: "17.86%",
    maxWidth: "100%",
    marginTop: 209,
    height: 55,
    top: "50%",
    overflow: "hidden",
    width: "14.19%",
  },
  iphone1415ProMax11Child4: {
    width: "14.42%",
    right: "50.98%",
    left: "34.6%",
    maxWidth: "100%",
    marginTop: 209,
    height: 55,
    top: "50%",
    overflow: "hidden",
  },
  iphone1415ProMax11Child5: {
    right: "35.4%",
    left: "50.42%",
    maxWidth: "100%",
    marginTop: 209,
    height: 55,
    top: "50%",
    overflow: "hidden",
    width: "14.19%",
  },
  generateOtp: {
    marginTop: 4.8,
    left: 169,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRed,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  verificationCode: {
    marginTop: 111,
    width: "89.07%",
    left: "5.23%",
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    fontSize: FontSize.size_13xl,
  },
  weHaveSend: {
    marginTop: 161.9,
    width: "52.79%",
    left: "23.63%",
    color: Color.colorDarkgray,
    height: 30,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iphone1415ProMax11Child6: {
    top: 513,
    left: 191,
    width: 44,
    height: 42,
  },
  or: {
    marginTop: 55.7,
    left: "46.16%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    top: "50%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupIcon: {
    top: 56,
    left: 354,
    width: 53,
  },
  groupItem: {
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
  ellipseParent: {
    top: 51,
    left: 21,
    width: 62,
  },
  iphone1415ProMax11: {
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

export default IPhone1415ProMax13;
