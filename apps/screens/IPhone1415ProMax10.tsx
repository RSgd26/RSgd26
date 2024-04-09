import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax19}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax19Child}
        contentFit="cover"
        source={require("../assets/rectangle-374.png")}
      />
      <View style={styles.iphone1415ProMax19Item} />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
      <Text style={[styles.account, styles.homeTypo]}>Account</Text>
      <Text style={[styles.notifications, styles.chatTypo]}>Notifications</Text>
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
      <Image
        style={styles.iconHome2}
        contentFit="cover"
        source={require("../assets/-icon-home3.png")}
      />
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
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
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
        style={[styles.vectorIcon2, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.iphone1415ProMax19Inner} />
      <Text style={[styles.dbuuDehradun, styles.vectorIcon5Layout]}>
        DBUU DEHRADUN
      </Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIcon5Layout]}
        contentFit="cover"
        source={require("../assets/vector15.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.searchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={[styles.searchShramiksevanin, styles.mikeIconPosition]}>
        Search ShramikSevan.in
      </Text>
      <Image
        style={[styles.mikeIcon, styles.mikeIconPosition]}
        contentFit="cover"
        source={require("../assets/mike.png")}
      />
      <Image
        style={styles.rightIcon}
        contentFit="cover"
        source={require("../assets/right3.png")}
      />
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
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax9")}
      />
      <View
        style={[styles.iphone1415ProMax19Child1, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415ProMax19Child2, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[
          styles.iphone1415ProMax19Child3,
          styles.rectanglePressableLayout,
        ]}
      />
      <View
        style={[styles.iphone1415ProMax19Child4, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415ProMax19Child5, styles.iphone1415ChildLayout1]}
      />
      <Text style={[styles.seeAll, styles.homeTypo]}>See all</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-561.png")}
      />
      <Image
        style={[styles.iphone1415ProMax19Child6, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-58.png")}
      />
      <Image
        style={[styles.iphone1415ProMax19Child7, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-60.png")}
      />
      <Image
        style={[
          styles.iphone1415ProMax19Child8,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Image
        style={[
          styles.iphone1415ProMax19Child9,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-59.png")}
      />
      <Image
        style={[
          styles.iphone1415ProMax19Child10,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Text style={[styles.manduwaladehradun, styles.manduwaladehradunTypo]}>
        Manduwala,Dehradun
      </Text>
      <Text style={[styles.manduwaladehradun1, styles.bhauwaladehradunTypo]}>
        Manduwala,Dehradun
      </Text>
      <Text style={[styles.bhauwaladehradun, styles.bhauwaladehradunTypo]}>
        Bhauwala,Dehradun
      </Text>
      <Text style={[styles.manduwaladehradun2, styles.manduwaladehradunTypo]}>
        Manduwala,Dehradun
      </Text>
      <Text style={[styles.bhauwaladehradun1, styles.bhauwaladehradun1Typo]}>
        Bhauwala,Dehradun
      </Text>
      <Text style={[styles.premNagardehradun, styles.bhauwaladehradun1Typo]}>
        Prem Nagar,Dehradun
      </Text>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Text style={[styles.guddu, styles.gudduTypo]}>Guddu</Text>
      <Text style={[styles.kuldeep, styles.subashTypo]}>Kuldeep</Text>
      <Text style={[styles.subash, styles.subashTypo]}>Subash</Text>
      <Text style={[styles.punam, styles.gudduTypo]}>Punam</Text>
      <Text style={[styles.ramesh, styles.rameshTypo]}>Ramesh</Text>
      <Text style={[styles.dinesh, styles.rameshTypo]}>Dinesh</Text>
      <Image
        style={[styles.rupeeSignIcon, styles.rupeeIconLayout]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Image
        style={[styles.rupeeSignIcon1, styles.rupeeIconPosition1]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Image
        style={[styles.rupeeSignIcon2, styles.rupeeIconPosition1]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Image
        style={[styles.rupeeSignIcon3, styles.rupeeIconLayout]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Image
        style={[styles.rupeeSignIcon4, styles.rupeeIconPosition]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Image
        style={[styles.rupeeSignIcon5, styles.rupeeIconPosition]}
        contentFit="cover"
        source={require("../assets/rupee-sign1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>750</Text>
      <Text style={[styles.text1, styles.textTypo1]}>750</Text>
      <Text style={[styles.text2, styles.textTypo1]}>750</Text>
      <Text style={[styles.text3, styles.textTypo]}>750</Text>
      <Text style={[styles.text4, styles.textTypo]}>750</Text>
      <Text style={[styles.text5, styles.textTypo]}>750</Text>
      <Image
        style={[styles.isolationModeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/isolation-mode.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  chatTypo: {
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
    width: "5.81%",
    bottom: "6.01%",
    top: "91.42%",
    height: "2.58%",
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
  vectorIconLayout2: {
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
  vectorIcon5Layout: {
    height: "1.61%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconPosition: {
    height: 24,
    left: 28,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  mikeIconPosition: {
    top: 109,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectanglePressableLayout: {
    height: 200,
    width: 179,
    borderWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    top: 191,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout2: {
    left: 29,
    height: 200,
    width: 179,
    borderWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout1: {
    left: 230,
    height: 200,
    width: 179,
    borderWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout: {
    height: 120,
    width: 105,
    left: 66,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildPosition: {
    left: 267,
    height: 120,
    width: 105,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  manduwaladehradunTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_3xs,
    top: 373,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  bhauwaladehradunTypo: {
    left: 57,
    color: Color.colorGray_300,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  bhauwaladehradun1Typo: {
    left: 263,
    color: Color.colorGray_300,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  vectorIconLayout1: {
    left: "9.93%",
    right: "87.98%",
    width: "2.09%",
    height: "1.18%",
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
  vectorIconPosition1: {
    bottom: "35.84%",
    top: "62.98%",
  },
  vectorIconPosition: {
    bottom: "11.7%",
    top: "87.12%",
  },
  vectorIconLayout: {
    left: "57.84%",
    right: "40.07%",
    width: "2.09%",
    height: "1.18%",
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
  gudduTypo: {
    top: 351,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  subashTypo: {
    left: 48,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rameshTypo: {
    left: 254,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rupeeIconLayout: {
    height: 18,
    width: 18,
    top: 327,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  rupeeIconPosition1: {
    left: 91,
    height: 18,
    width: 18,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  rupeeIconPosition: {
    left: 292,
    height: 18,
    width: 18,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  textTypo1: {
    left: 110,
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
  textTypo: {
    left: 311,
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
  iphone1415ProMax19Child: {
    marginTop: -319,
    marginLeft: -235.3,
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
  iphone1415ProMax19Item: {
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
    top: 882,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 28,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  chat: {
    left: 127,
  },
  account: {
    top: 881,
    left: 345,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
  iconHome2: {
    width: "6.37%",
    right: "85.79%",
    left: "7.84%",
    bottom: "6.01%",
    top: "91.42%",
    height: "2.58%",
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
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "30.63%",
    right: "63.56%",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  iphone1415ProMax19Inner: {
    top: 24,
    left: 242,
    borderRadius: Border.br_3xs,
    backgroundColor: "#e8ebee",
    width: 198,
    height: 34,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  dbuuDehradun: {
    width: "25.35%",
    top: "3.61%",
    left: "62.49%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon5: {
    width: "2.79%",
    top: "3.65%",
    right: "37.98%",
    bottom: "94.74%",
    left: "59.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleView: {
    top: 100,
    left: 23,
    backgroundColor: "#eff4f7",
    width: 383,
    height: 39,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  searchIcon: {
    top: 108,
    width: 25,
  },
  searchShramiksevanin: {
    left: 65,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  mikeIcon: {
    left: 374,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  rightIcon: {
    top: 29,
    left: 401,
    width: 24,
    height: 25,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  bell: {
    left: 236,
    top: 848,
    width: 43,
    height: 32,
    position: "absolute",
  },
  rectanglePressable: {
    left: 30,
  },
  iphone1415ProMax19Child1: {
    top: 408,
  },
  iphone1415ProMax19Child2: {
    top: 631,
  },
  iphone1415ProMax19Child3: {
    left: 231,
  },
  iphone1415ProMax19Child4: {
    top: 408,
  },
  iphone1415ProMax19Child5: {
    top: 631,
  },
  seeAll: {
    top: 157,
    left: 371,
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleIcon: {
    top: 200,
  },
  iphone1415ProMax19Child6: {
    top: 417,
  },
  iphone1415ProMax19Child7: {
    top: 640,
  },
  iphone1415ProMax19Child8: {
    top: 200,
  },
  iphone1415ProMax19Child9: {
    top: 417,
  },
  iphone1415ProMax19Child10: {
    top: 640,
  },
  manduwaladehradun: {
    left: 56,
  },
  manduwaladehradun1: {
    top: 586,
  },
  bhauwaladehradun: {
    top: 811,
  },
  manduwaladehradun2: {
    left: 262,
  },
  bhauwaladehradun1: {
    top: 586,
  },
  premNagardehradun: {
    top: 811,
  },
  vectorIcon6: {
    bottom: "58.69%",
    top: "40.13%",
  },
  vectorIcon7: {
    left: "9.93%",
    right: "87.98%",
    width: "2.09%",
    height: "1.18%",
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
  vectorIcon8: {
    left: "9.93%",
    right: "87.98%",
    width: "2.09%",
    height: "1.18%",
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
  vectorIcon9: {
    bottom: "58.69%",
    top: "40.13%",
  },
  vectorIcon10: {
    bottom: "35.84%",
    top: "62.98%",
  },
  vectorIcon11: {
    bottom: "11.7%",
    top: "87.12%",
  },
  guddu: {
    left: 56,
  },
  kuldeep: {
    top: 566,
  },
  subash: {
    top: 791,
  },
  punam: {
    left: 253,
  },
  ramesh: {
    top: 566,
  },
  dinesh: {
    top: 791,
  },
  rupeeSignIcon: {
    left: 92,
  },
  rupeeSignIcon1: {
    top: 544,
  },
  rupeeSignIcon2: {
    top: 769,
  },
  rupeeSignIcon3: {
    left: 293,
  },
  rupeeSignIcon4: {
    top: 544,
  },
  rupeeSignIcon5: {
    top: 769,
  },
  text: {
    top: 326,
  },
  text1: {
    top: 543,
  },
  text2: {
    top: 768,
  },
  text3: {
    top: 326,
  },
  text4: {
    top: 543,
  },
  text5: {
    top: 768,
  },
  isolationModeIcon: {
    top: 30,
    width: 38,
  },
  iphone1415ProMax19: {
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

export default IPhone1415ProMax10;
