import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax20}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={styles.iphone1415ProMax20Child}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Pressable
        style={[styles.iphone1415ProMax20Item, styles.rectangleLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      />
      <Image
        style={styles.iphone1415ProMax20Inner}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Text
        style={[styles.helpSupport, styles.helpContainerFlexBox]}
      >{`Help & Support`}</Text>
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
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleLayout]}
        locations={[0, 0.46, 1]}
        colors={["#52b4ce", "#5687b1", "#5b538f"]}
      />
      <View style={[styles.iphone1415ProMax20Child1, styles.rectangleLayout]} />
      <Text
        style={[styles.helpCenterSeeContainer, styles.helpContainerFlexBox]}
      >
        <Text style={[styles.helpCenter, styles.helpTypo]}>{`Help Center
`}</Text>
        <Text style={styles.seeFaqAnd}>See FAQ and contact support</Text>
      </Text>
      <Text style={[styles.rateUsIfContainer, styles.helpContainerFlexBox]}>
        <Text style={[styles.helpCenter, styles.helpTypo]}>{`Rate us
`}</Text>
        <Text
          style={styles.seeFaqAnd}
        >{`If you love our app, please take a moment to
 rate it`}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
  helpContainerFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  helpTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "3.02%",
    height: "2.25%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  vectorIconLayout: {
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
  iphone1415ProMax20Child: {
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
  iphone1415ProMax20Item: {
    top: 30,
    backgroundColor: Color.colorLightblue,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -2,
  },
  iphone1415ProMax20Inner: {
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
  helpSupport: {
    top: 56,
    left: 101,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  iphone1415ProMax20Child1: {
    top: 206,
    backgroundColor: Color.colorLightblue,
    width: 434,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -2,
  },
  helpCenter: {
    fontSize: FontSize.size_xl,
  },
  seeFaqAnd: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_100,
  },
  helpCenterSeeContainer: {
    top: 141,
    left: 18,
  },
  rateUsIfContainer: {
    top: 220,
    left: 17,
  },
  vectorIcon: {
    top: "16.31%",
    right: "5.65%",
    bottom: "81.44%",
    left: "91.33%",
  },
  vectorIcon1: {
    top: "25.75%",
    right: "5.88%",
    bottom: "72%",
    left: "91.09%",
  },
  vectorIcon2: {
    top: "15.13%",
    right: "2.86%",
    bottom: "80.36%",
    left: "88.07%",
  },
  vectorIcon3: {
    top: "24.57%",
    right: "3.09%",
    bottom: "70.92%",
    left: "87.84%",
  },
  iphone1415ProMax20: {
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

export default IPhone1415ProMax2;
