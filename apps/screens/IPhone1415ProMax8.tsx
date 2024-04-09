import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax25}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={[styles.iphone1415ProMax25Child, styles.iconChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-375.png")}
      />
      <View style={[styles.iphone1415ProMax25Item, styles.iconChildPosition]} />
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
      <Text style={[styles.chat, styles.homeFlexBox]}>Chat</Text>
      <Text style={[styles.account, styles.accountTypo]}>Account</Text>
      <Image
        style={[styles.x1Icon, styles.iconChildPosition]}
        contentFit="cover"
        source={require("../assets/12-4x-1.png")}
      />
      <Image
        style={[styles.iconHome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-home.png")}
      />
      <Image
        style={[styles.iconHome1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-home.png")}
      />
      <Pressable
        style={styles.iconHome2}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/-icon-home2.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconPerson, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-person.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconChildPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax25Inner, styles.iconChildPosition]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <View style={[styles.ellipseParent, styles.rightIconLayout]}>
        <Image
          style={[styles.groupChild, styles.iconChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-52.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right2.png")}
        />
      </View>
      <Text style={[styles.notifications, styles.accountTypo]}>
        Notifications
      </Text>
      <Image
        style={[styles.bellIcon, styles.iconChildPosition]}
        contentFit="cover"
        source={require("../assets/bell2.png")}
      />
      <Text style={[styles.notifications1, styles.homeFlexBox]}>
        Notifications
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconChildPosition: {
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  homeFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  accountTypo: {
    top: 880,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconLayout1: {
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
  vectorPosition: {
    width: "5.81%",
    height: "2.58%",
    bottom: "6.01%",
    top: "91.42%",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "89%",
    right: "1.93%",
    width: "9.07%",
    height: "4.51%",
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
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  iphone1415ProMax25Child: {
    marginTop: -329,
    marginLeft: -223.3,
    top: "50%",
    left: "50%",
    width: 450,
    height: 799,
  },
  iphone1415ProMax25Item: {
    top: 841,
    left: -14,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 456,
    height: 102,
  },
  home: {
    left: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: 881,
    textAlign: "left",
  },
  chat: {
    left: 125,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: 881,
    textAlign: "left",
  },
  account: {
    left: 345,
  },
  x1Icon: {
    top: -1121,
    left: 944,
    width: 894,
    height: 907,
  },
  iconHome: {
    top: "345.28%",
    right: "1241.67%",
    bottom: "-251.2%",
    left: "-1156.35%",
    width: "14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "5.92%",
  },
  iconHome1: {
    top: "331.65%",
    right: "1234.23%",
    bottom: "-237.58%",
    left: "-1148.91%",
    width: "14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "5.92%",
  },
  iconLayout: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
  iconHome2: {
    left: "7.84%",
    right: "85.79%",
    width: "6.37%",
    height: "2.58%",
    bottom: "6.01%",
    top: "91.42%",
    position: "absolute",
  },
  iconPerson: {
    height: "6.77%",
    top: "343.99%",
    right: "1170.05%",
    bottom: "-250.76%",
    left: "-1084.72%",
    width: "14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "29.93%",
    right: "64.26%",
  },
  vector1: {
    left: "84.35%",
    right: "9.84%",
  },
  vectorIcon: {
    top: "77.21%",
    left: "31.98%",
    width: 0,
    height: 0,
  },
  vectorIcon1: {
    height: "0.02%",
    width: "0.19%",
    top: "80.03%",
    right: "54.33%",
    bottom: "19.95%",
    left: "45.49%",
  },
  vectorIcon2: {
    top: "40.67%",
    bottom: "54.83%",
  },
  vectorIcon3: {
    top: "51.61%",
    bottom: "43.88%",
  },
  vectorIcon4: {
    top: "62.45%",
    bottom: "33.05%",
  },
  iphone1415ProMax25Inner: {
    top: 36,
    left: 351,
    width: 53,
    height: 55,
  },
  groupChild: {
    top: 4,
    left: 5,
    width: 58,
    height: 58,
  },
  rightIcon: {
    top: 0,
    left: 0,
    width: 60,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseParent: {
    top: 31,
    left: 22,
    width: 62,
  },
  notifications: {
    left: 211,
  },
  bellIcon: {
    top: 848,
    left: 236,
    width: 43,
    height: 32,
    overflow: "hidden",
  },
  notifications1: {
    top: 42,
    left: 106,
    fontSize: FontSize.size_17xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
  },
  iphone1415ProMax25: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax8;
