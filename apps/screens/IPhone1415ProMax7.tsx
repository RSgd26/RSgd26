import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.iphone1415ProMax22, styles.vectorIconTransform]}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax22Child}
        contentFit="cover"
        source={require("../assets/rectangle-374.png")}
      />
      <View style={styles.iphone1415ProMax22Item} />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.chat, styles.homeTypo]}>Chat</Text>
      <Text style={[styles.account, styles.accountTypo]}>Account</Text>
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
      <Image
        style={styles.iphone1415ProMax22Inner}
        contentFit="cover"
        source={require("../assets/ellipse-91.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
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
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
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
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.chats, styles.homeTypo]}>Chats</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.all, styles.allTypo]}>ALL</Text>
      <Pressable
        style={[styles.hireing, styles.allPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Text style={styles.allTypo}> HIREING</Text>
      </Pressable>
      <Pressable
        style={[styles.selling, styles.allPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax5")}
      >
        <Text style={styles.allTypo}>SELLING</Text>
      </Pressable>
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
      <View style={styles.iphone1415ProMax22Child1} />
      <Text style={[styles.notifications, styles.accountTypo]}>
        Notifications
      </Text>
      <Pressable
        style={styles.bell}
        onPress={() => navigation.navigate("IPhone1415ProMax8")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/bell1.png")}
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
  allTypo: {
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
  allPosition: {
    top: 142,
    position: "absolute",
  },
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  iphone1415ProMax22Child: {
    marginTop: -281,
    marginLeft: -230.3,
    top: "50%",
    left: "50%",
    width: 457,
    height: 751,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax22Item: {
    top: 841,
    left: -14,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 456,
    height: 102,
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
    top: 881,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  chat: {
    left: 125,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: 881,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  account: {
    left: 345,
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
  iphone1415ProMax22Inner: {
    top: 850,
    left: 123,
    width: 37,
    height: 31,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  vectorIcon: {
    height: "3.33%",
    width: "8.6%",
    top: "91.2%",
    right: "62.86%",
    bottom: "5.47%",
    left: "28.53%",
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
  vectorIcon1: {
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
  vectorIcon2: {
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
  vectorIcon3: {
    top: "40.67%",
    bottom: "54.83%",
  },
  vectorIcon4: {
    top: "51.61%",
    bottom: "43.88%",
  },
  vectorIcon5: {
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
  },
  rectangleView: {
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
    top: 142,
    position: "absolute",
  },
  hireing: {
    left: 152,
  },
  selling: {
    left: 298,
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
  iphone1415ProMax22Child1: {
    top: 179,
    left: -3,
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
  notifications: {
    left: 211,
  },
  bell: {
    left: 236,
    top: 848,
    width: 43,
    height: 32,
    position: "absolute",
  },
  iphone1415ProMax22: {
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

export default IPhone1415ProMax7;
