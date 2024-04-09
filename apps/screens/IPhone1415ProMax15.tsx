import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax10}>
      <LinearGradient
        style={[styles.iphone1415ProMax10Child, styles.iphone1415ShadowBox]}
        locations={[0, 0.56, 1]}
        colors={["#50c9dc", "#5685b0", "#5b538f"]}
      />
      <View
        style={[styles.iphone1415ProMax10Item, styles.rectangleViewBorder]}
      />
      <View
        style={[styles.iphone1415ProMax10Inner, styles.iphone1415ShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax16")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-55.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right6.png")}
        />
      </Pressable>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-34.png")}
      />
      <Pressable
        style={styles.image1}
        onPress={() => navigation.navigate("IPhone1415ProMax14")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.aadharCard1}
        onPress={() => navigation.navigate("IPhone1415ProMax13")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/aadharcard-1.png")}
        />
      </Pressable>
      <Text style={[styles.eShram, styles.eShramTypo]}>{`e-SHRAM
`}</Text>
      <Text style={[styles.aadhaarCard, styles.eShramTypo]}>{`AADHAAR CARD
`}</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={styles.or}>OR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415ShadowBox: {
    height: 498,
    width: 562,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 37,
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleViewBorder: {
    width: 382,
    borderWidth: 6,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_15xl,
    left: 24,
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
  eShramTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax10Child: {
    marginTop: -501.9,
    marginLeft: -275.3,
    backgroundColor: "transparent",
  },
  iphone1415ProMax10Item: {
    top: 164,
    height: 344,
  },
  iphone1415ProMax10Inner: {
    marginTop: -3.9,
    marginLeft: -274.6,
    backgroundColor: Color.colorLightsteelblue,
  },
  rectangleView: {
    top: 366,
    backgroundColor: Color.colorLavender,
    height: 440,
  },
  groupChild: {
    top: 4,
    left: 4,
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
    top: 48,
    left: 35,
    width: 62,
  },
  groupIcon: {
    top: 53,
    left: 339,
    width: 53,
    height: 55,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
  },
  image1: {
    left: 88,
    top: 268,
    width: 251,
    height: 141,
    position: "absolute",
  },
  aadharCard1: {
    left: 91,
    top: 558,
    width: 244,
    height: 146,
    position: "absolute",
  },
  eShram: {
    top: 423,
    left: 167,
  },
  aadhaarCard: {
    top: 517,
    left: 132,
  },
  ellipseIcon: {
    top: 462,
    left: 193,
    width: 44,
    height: 42,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  or: {
    top: "50.5%",
    left: "46.6%",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax10: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
  },
});

export default IPhone1415ProMax15;
