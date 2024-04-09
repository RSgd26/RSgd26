import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax2}>
      <Text style={[styles.vlanguage, styles.chooseFlexBox]}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`     `}</Text>
        </Text>
        <Text style={styles.vlanguage1}>
          <Text style={styles.text}>V</Text>
          <Text style={styles.language}>LANGUAGE</Text>
        </Text>
      </Text>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 0, 1, 1]}
        colors={["#f9f9f9", "#eef6f7", "#bbe7ee", "#50c9dc"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableBorder]}
          onPress={() => navigation.navigate("IPhone1415ProMax19")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.iphone1415ProMax2Child, styles.pressableBorder]}
        locations={[0, 1, 1]}
        colors={["#fff", "#ffead5", "#ff9933"]}
      />
      <Text style={[styles.english, styles.orFlexBox]}>{`ENGLISH `}</Text>
      <Text style={[styles.fganh, styles.orFlexBox]}>fganh</Text>
      <Text style={[styles.choose, styles.chooseFlexBox]}>CHOOSE</Text>
      <Text style={[styles.hkkkkPqusa, styles.chooseFlexBox]}>
        Hkk”kk pqusa
      </Text>
      <Image
        style={styles.iphone1415ProMax2Item}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.or, styles.orFlexBox]}>OR</Text>
      <LinearGradient
        style={[styles.iphone1415ProMax2Inner, styles.rectangleViewLayout]}
        locations={[1, 1]}
        colors={["#50c9dc", "#2b6c76"]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.a, styles.aTypo]}>A</Text>
      <Text style={[styles.v1, styles.aTypo]}>v</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseFlexBox: {
    textAlign: "center",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  wrapperLayout: {
    height: 148,
    width: 308,
    left: 61,
    position: "absolute",
  },
  pressableBorder: {
    borderWidth: 6,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  orFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleViewLayout: {
    height: 112,
    width: 151,
    borderRadius: Border.br_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  aTypo: {
    fontSize: FontSize.size_109xl,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  text1: {
    fontSize: FontSize.size_13xl,
  },
  text: {
    color: Color.colorSandybrown_200,
  },
  language: {
    color: "#38919f",
  },
  vlanguage1: {
    fontSize: FontSize.size_17xl,
  },
  vlanguage: {
    left: 140,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    top: 111,
    textAlign: "center",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
    borderWidth: 6,
  },
  wrapper: {
    top: 302,
  },
  iphone1415ProMax2Child: {
    top: 591,
    backgroundColor: "transparent",
    height: 148,
    width: 308,
    left: 61,
    position: "absolute",
  },
  english: {
    marginLeft: -125.8,
    top: 324,
    left: "50%",
    fontSize: FontSize.size_xl,
    color: "#3bb7ca",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  fganh: {
    top: 613,
    left: 90,
    fontFamily: FontFamily.krutiDev020Wide,
    color: "#0a7c8e",
    fontSize: FontSize.size_13xl,
  },
  choose: {
    left: 28,
    color: "#655f5f",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    top: 111,
    textAlign: "center",
  },
  hkkkkPqusa: {
    top: 165,
    left: 38,
    fontFamily: FontFamily.krutiDev100Bold,
    color: Color.colorDarkorange,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
  },
  iphone1415ProMax2Item: {
    top: 494,
    left: 190,
    width: 56,
    height: 50,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  or: {
    top: 506,
    fontSize: FontSize.size_5xl,
    color: "#2e7656",
    width: 35,
    height: 27,
    left: 200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  iphone1415ProMax2Inner: {
    top: 320,
    left: 200,
    backgroundColor: "transparent",
  },
  rectangleView: {
    top: 609,
    left: 201,
    backgroundColor: Color.colorDarkorange,
  },
  a: {
    top: 299,
    left: 229,
    color: "#fbf9f9",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  v1: {
    top: 596,
    left: 239,
    fontFamily: FontFamily.krutiDev020Bold,
    color: Color.colorWhite,
    fontWeight: "700",
  },
  iphone1415ProMax2: {
    backgroundColor: Color.colorLavender,
    borderWidth: 3,
    flex: 1,
    height: 932,
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    width: "100%",
  },
});

export default IPhone1415ProMax;
