import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1415ProMax5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.iphone1415ProMax24, styles.vectorIconTransform]}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax24Child}
        contentFit="cover"
        source={require("../assets/rectangle-373.png")}
      />
      <View style={styles.iphone1415ProMax24Item} />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.chat, styles.chatPosition]}>Chat</Text>
      <Text style={[styles.account, styles.homeTypo]}>Account</Text>
      <Image
        style={styles.x1Icon}
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
        style={[styles.iconHome2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax9")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
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
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
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
      <Text style={[styles.chats, styles.homeTypo]}>Chats</Text>
      <View style={styles.iphone1415ProMax24Inner} />
      <Pressable
        style={[styles.all, styles.allPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Text style={styles.all1Typo}>ALL</Text>
      </Pressable>
      <Pressable
        style={[styles.hireing, styles.allPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Text style={styles.all1Typo}> HIREING</Text>
      </Pressable>
      <Text style={[styles.selling, styles.all1Typo]}>SELLING</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <View style={[styles.ellipseParent, styles.rightIconLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-52.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right2.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.ellipseIcon, styles.chatPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.notifications, styles.homeTypo]}>Notifications</Text>
      <Pressable
        style={styles.bell}
        onPress={() => navigation.navigate("IPhone1415ProMax8")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bell.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  vectorIconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  chatPosition: {
    left: 124,
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
  },
  vectorPosition: {
    height: "2.58%",
    bottom: "6.01%",
    top: "91.42%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
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
  allPosition: {
    top: 144,
    position: "absolute",
  },
  all1Typo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
  iphone1415ProMax24Child: {
    marginTop: -281,
    marginLeft: -236.3,
    top: "50%",
    left: "50%",
    width: 463,
    height: 751,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax24Item: {
    top: 841,
    left: -14,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 456,
    height: 92,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  home: {
    left: 28,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 882,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  chat: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 882,
  },
  account: {
    left: 345,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 882,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  x1Icon: {
    top: -1121,
    left: 944,
    width: 894,
    height: 907,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconHome: {
    top: "345.28%",
    right: "1241.67%",
    bottom: "-251.2%",
    left: "-1156.35%",
    width: "14.67%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    height: "5.92%",
  },
  iconHome1: {
    top: "331.65%",
    right: "1234.23%",
    bottom: "-237.58%",
    left: "-1148.91%",
    width: "14.67%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
    height: "5.92%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconHome2: {
    left: "7.84%",
    right: "85.79%",
    width: "6.37%",
  },
  iconPerson: {
    height: "6.77%",
    top: "343.99%",
    right: "1170.05%",
    bottom: "-250.76%",
    left: "-1084.72%",
    width: "14.67%",
    maxWidth: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "84.35%",
    right: "9.84%",
    width: "5.81%",
  },
  vectorIcon: {
    top: "77.21%",
    left: "31.98%",
    width: 0,
    height: 0,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  vectorIcon1: {
    height: "0.02%",
    width: "0.19%",
    top: "80.03%",
    right: "54.33%",
    bottom: "19.95%",
    left: "45.49%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
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
  chats: {
    top: 39,
    left: 155,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax24Inner: {
    top: 123,
    left: -1,
    backgroundColor: Color.colorWhite,
    width: 431,
    height: 63,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  all: {
    left: 41,
  },
  hireing: {
    left: 152,
  },
  selling: {
    left: 305,
    top: 144,
    position: "absolute",
  },
  groupIcon: {
    top: 36,
    left: 351,
    width: 53,
    height: 55,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupChild: {
    top: 4,
    left: 5,
    width: 58,
    height: 58,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
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
  rectangleView: {
    top: 179,
    left: 298,
    backgroundColor: Color.colorBlack,
    width: 132,
    height: 7,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseIcon: {
    top: 851,
    width: 33,
    height: 29,
  },
  vectorIcon5: {
    height: "3.11%",
    width: "7.67%",
    top: "91.31%",
    right: "63.56%",
    bottom: "5.58%",
    left: "28.77%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  notifications: {
    left: 210,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 882,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  bell: {
    left: 235,
    top: 849,
    width: 43,
    height: 32,
    position: "absolute",
  },
  iphone1415ProMax24: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
    overflow: "hidden",
  },
});

export default IPhone1415ProMax5;
