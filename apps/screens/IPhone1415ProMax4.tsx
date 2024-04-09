import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.iphone1415ProMax17, styles.vectorIconTransform]}
      locations={[0, 0.44, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <View style={[styles.iphone1415ProMax17Child, styles.rectangleViewBg]} />
      <Image
        style={[styles.iphone1415ProMax17Item, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/rectangle-372.png")}
      />
      <Image
        style={styles.iphone1415ProMax17Inner}
        contentFit="cover"
        source={require("../assets/group-31.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={[styles.ellipseParent, styles.rightIconLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right1.png")}
        />
      </View>
      <Text style={styles.rahulSagar}>RAHUL SAGAR</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={styles.iphone1415ProMax17Child1} />
      <Text style={styles.viewAndEdit}>View and Edit Profile</Text>
      <Text style={[styles.worker, styles.workerTypo]}>Worker</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.chat, styles.homeTypo]}>Chat</Text>
      <Text style={[styles.account, styles.accountTypo]}>Account</Text>
      <View style={styles.iphone1415ProMax17Child2} />
      <View
        style={[styles.iphone1415ProMax17Child3, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax17Child4, styles.iphone1415ChildLayout]}
      />
      <Image
        style={styles.imageDesktopRemovebgPreviewIcon}
        contentFit="cover"
        source={require("../assets/image-desktopremovebgpreview-1.png")}
      />
      <Text style={[styles.settingsPrivacyAndContainer, styles.workerTypo]}>
        <Text style={[styles.settings, styles.settingsTypo]}>{`Settings
`}</Text>
        <Text style={styles.privacyAndLogout}>Privacy and logout</Text>
      </Text>
      <Text style={[styles.helpSupportContainer, styles.containerPosition]}>
        <Text style={[styles.settings, styles.settingsTypo]}>{`Help & Support
`}</Text>
        <Text style={styles.privacyAndLogout}>Help center and legal terms</Text>
      </Text>
      <Text style={[styles.selectLanguageContainer, styles.containerPosition]}>
        <Text style={styles.selectLanguageHkkkkPqusa}>
          <Text style={styles.settingsTypo}>Select Language /</Text>
          <Text style={styles.hkkkkPqusa}> Hkk”kk pqusa</Text>
          <Text style={styles.settingsTypo}>{` 
`}</Text>
        </Text>
        <Text style={styles.privacyAndLogout}>English</Text>
      </Text>
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
        style={styles.iconHome2}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-home1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconPerson, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-person.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorPosition1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.vectorIcon2}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax2")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector3, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax1")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
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
  rectangleViewBg: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_11xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415Position: {
    top: "50%",
    left: "50%",
  },
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  workerTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  homeTypo: {
    top: 881,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  accountTypo: {
    top: 880,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout: {
    width: 458,
    height: 88,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorLightblue,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  settingsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  containerPosition: {
    left: 87,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  vectorPosition1: {
    width: "5.81%",
    height: "2.58%",
    bottom: "6.01%",
    top: "91.42%",
    position: "absolute",
  },
  vectorIconLayout1: {
    left: "7.37%",
    right: "86.81%",
    width: "5.81%",
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
  vectorPosition: {
    height: "2.25%",
    width: "3.02%",
    right: "4.72%",
    left: "92.26%",
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
  iphone1415ProMax17Child: {
    marginTop: -345,
    marginLeft: -198.1,
    width: 398,
    height: 659,
    left: "50%",
    top: "50%",
  },
  iphone1415ProMax17Item: {
    marginTop: -166,
    marginLeft: -216.3,
    borderRadius: Border.br_31xl,
    width: 441,
    height: 694,
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax17Inner: {
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
  rectangleView: {
    top: 841,
    left: -14,
    width: 456,
    height: 92,
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
    top: 40,
    left: 21,
    width: 62,
  },
  rahulSagar: {
    top: 177,
    left: 203,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseIcon: {
    marginLeft: -161.3,
    top: 160,
    width: 100,
    height: 96,
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax17Child1: {
    top: 238,
    left: 170,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSandybrown_100,
    width: 208,
    height: 35,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  viewAndEdit: {
    top: 248,
    left: 174,
    fontSize: FontSize.size_sm,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 204,
    height: 13,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  worker: {
    top: 208,
    left: 242,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  home: {
    left: 28,
  },
  chat: {
    left: 132,
  },
  account: {
    left: 345,
  },
  iphone1415ProMax17Child2: {
    top: 356,
    width: 434,
    height: 88,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorLightblue,
    left: -3,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax17Child3: {
    top: 458,
    left: -3,
    width: 458,
  },
  iphone1415ProMax17Child4: {
    top: 559,
    left: -2,
  },
  imageDesktopRemovebgPreviewIcon: {
    top: 490,
    left: 35,
    width: 20,
    height: 24,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  settings: {
    color: Color.colorBlack,
  },
  privacyAndLogout: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
  },
  settingsPrivacyAndContainer: {
    top: 381,
    left: 88,
  },
  helpSupportContainer: {
    top: 483,
  },
  hkkkkPqusa: {
    fontWeight: "700",
    fontFamily: FontFamily.krutiDev040Bold,
  },
  selectLanguageHkkkkPqusa: {
    color: Color.colorBlack,
  },
  selectLanguageContainer: {
    top: 584,
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
    left: "31.79%",
    right: "62.4%",
  },
  vectorIcon: {
    right: "9.84%",
    left: "84.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  vectorIcon1: {
    top: "41.63%",
    bottom: "55.79%",
  },
  vectorIcon2: {
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
  vectorIcon3: {
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
  vectorIcon4: {
    top: "63.41%",
    bottom: "34.01%",
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector1: {
    top: "41.85%",
    bottom: "55.9%",
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector2: {
    top: "52.79%",
    bottom: "44.96%",
  },
  icon4: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector3: {
    top: "63.63%",
    bottom: "34.12%",
  },
  vectorIcon5: {
    top: "40.67%",
    bottom: "54.83%",
  },
  vectorIcon6: {
    top: "51.61%",
    bottom: "43.88%",
  },
  vectorIcon7: {
    top: "62.45%",
    bottom: "33.05%",
  },
  notifications: {
    left: 216,
  },
  bell: {
    left: 241,
    top: 847,
    width: 43,
    height: 32,
    position: "absolute",
  },
  iphone1415ProMax17: {
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

export default IPhone1415ProMax4;
