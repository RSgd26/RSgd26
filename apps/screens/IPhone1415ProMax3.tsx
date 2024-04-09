import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax18}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax18Child}
        contentFit="cover"
        source={require("../assets/rectangle-371.png")}
      />
      <View style={[styles.iphone1415ProMax18Item, styles.iphone1415Layout]} />
      <Image
        style={styles.iphone1415ProMax18Inner}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={[styles.sittings, styles.containerFlexBox]}>Sittings</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={styles.right}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.iphone1415Layout]}
        locations={[0, 0.46, 1]}
        colors={["#52b4ce", "#5687b1", "#5b538f"]}
      />
      <View
        style={[styles.iphone1415ProMax18Child1, styles.iphone1415Layout]}
      />
      <View
        style={[styles.iphone1415ProMax18Child2, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax18Child3, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax18Child4, styles.iphone1415ChildLayout]}
      />
      <Text
        style={[styles.privacyChangePasswordContainer, styles.containerFlexBox]}
      >
        <Text style={styles.logoutTypo}>{`Privacy
`}</Text>
        <Text style={styles.changePassword}>Change password</Text>
      </Text>
      <Text
        style={[
          styles.notificationsRecommendationsContainer,
          styles.containerFlexBox,
        ]}
      >
        <Text style={styles.logoutTypo}>{`Notifications
`}</Text>
        <Text
          style={styles.changePassword}
        >{`Recommendations & Special communications`}</Text>
      </Text>
      <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
      <Text style={[styles.logoutFromAll, styles.logoutFromAllTypo]}>
        Logout from all devices
      </Text>
      <Text style={[styles.deleteAccount, styles.logoutFromAllTypo]}>
        Delete account
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
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
  containerFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout: {
    left: -1,
    height: 88,
    width: 434,
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
  logoutTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  logoutFromAllTypo: {
    left: 19,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  vectorIconLayout: {
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
  iphone1415ProMax18Child: {
    marginTop: -484,
    marginLeft: -229.3,
    left: "50%",
    borderRadius: Border.br_31xl,
    width: 458,
    height: 968,
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax18Item: {
    top: 30,
    backgroundColor: Color.colorLightblue,
    left: -2,
    height: 88,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  iphone1415ProMax18Inner: {
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
  sittings: {
    top: 53,
    left: 131,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  ellipseIcon: {
    top: 44,
    left: 23,
    width: 58,
    height: 58,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  icon: {
    height: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
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
  },
  rectangleLineargradient: {
    top: -58,
    left: -4,
    backgroundColor: "transparent",
  },
  iphone1415ProMax18Child1: {
    top: 206,
    backgroundColor: Color.colorLightblue,
    left: -2,
    height: 88,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  iphone1415ProMax18Child2: {
    top: 294,
  },
  iphone1415ProMax18Child3: {
    marginTop: -84,
    top: "50%",
  },
  iphone1415ProMax18Child4: {
    top: 470,
  },
  changePassword: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
  },
  privacyChangePasswordContainer: {
    top: 141,
    left: 18,
  },
  notificationsRecommendationsContainer: {
    top: 229,
    left: 17,
  },
  logout: {
    top: 326,
    left: 16,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  logoutFromAll: {
    top: 414,
  },
  deleteAccount: {
    top: 502,
  },
  vectorIcon: {
    height: "2.25%",
    width: "3.02%",
    top: "16.31%",
    right: "5.65%",
    bottom: "81.44%",
    left: "91.33%",
  },
  vectorIcon1: {
    height: "4.51%",
    width: "9.07%",
    top: "15.13%",
    right: "2.86%",
    bottom: "80.36%",
    left: "88.07%",
  },
  iphone1415ProMax18: {
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

export default IPhone1415ProMax3;
