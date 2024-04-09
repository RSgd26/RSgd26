import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax15}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <Image
        style={[styles.iphone1415ProMax15Child, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <View
        style={[styles.iphone1415ProMax15Item, styles.iphone1415Position]}
      />
      <Image
        style={[styles.iphone1415ProMax15Inner, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax15")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-54.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconPosition]}
          contentFit="cover"
          source={require("../assets/right5.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout2]} />
      <View
        style={[styles.iphone1415ProMax15Child1, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415ProMax15Child2, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax15Child3, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax15Child4, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax15Child5, styles.iphone1415ChildBg]}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax11")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={styles.save}>SAVE</Text>
      </Pressable>
      <Text style={[styles.name, styles.ageTypo]}>NAME</Text>
      <Text style={[styles.age, styles.ageTypo]}>AGE</Text>
      <Text style={[styles.gender, styles.ageTypo]}>GENDER</Text>
      <Text style={[styles.address, styles.ageTypo]}>ADDRESS.</Text>
      <View
        style={[styles.iphone1415ProMax15Child6, styles.iphone1415ChildBg]}
      />
      <Image
        style={[styles.locationIcon, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <Text style={styles.currentLocation}>Current location</Text>
      <Text style={[styles.male, styles.maleTypo]}>Male</Text>
      <Text style={[styles.other, styles.maleTypo]}>Other</Text>
      <Text style={[styles.female, styles.maleTypo]}>Female</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphone1415Position: {
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
  rightIconPosition: {
    left: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildLayout2: {
    width: 312,
    borderRadius: Border.br_xl,
    height: 58,
  },
  iphone1415ChildLayout: {
    height: 44,
    width: 134,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ChildBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupItemLayout: {
    height: 69,
    width: 290,
    position: "absolute",
  },
  ageTypo: {
    height: 38,
    width: 222,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 59,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  maleTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax15Child: {
    top: -29,
    left: -96,
    width: 648,
    height: 691,
  },
  iphone1415ProMax15Item: {
    marginLeft: -192.5,
    top: 106,
    borderRadius: Border.br_31xl,
    backgroundColor: "#ececec",
    width: 381,
    height: 785,
    left: "50%",
  },
  iphone1415ProMax15Inner: {
    top: 45,
    left: 353,
    width: 53,
    height: 55,
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
    width: 60,
    height: 66,
    position: "absolute",
  },
  ellipseParent: {
    top: 40,
    left: 21,
    width: 62,
  },
  rectangleView: {
    top: 289,
    left: 53,
    backgroundColor: Color.colorGainsboro,
    width: 312,
    borderRadius: Border.br_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax15Child1: {
    top: 405,
    left: 59,
    backgroundColor: Color.colorGainsboro,
    width: 312,
    borderRadius: Border.br_xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax15Child2: {
    top: 545,
    height: 44,
    width: 134,
    left: 59,
  },
  iphone1415ProMax15Child3: {
    left: 229,
    top: 545,
    height: 44,
    width: 134,
  },
  iphone1415ProMax15Child4: {
    top: 608,
    left: 59,
  },
  iphone1415ProMax15Child5: {
    top: 713,
    left: 59,
    width: 312,
    borderRadius: Border.br_xl,
    height: 58,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkorange,
    left: 0,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  save: {
    marginLeft: -42.05,
    top: 16,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorSnow_100,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectangleParent: {
    top: 837,
    left: 70,
  },
  name: {
    top: 251,
  },
  age: {
    top: 367,
  },
  gender: {
    top: 497,
  },
  address: {
    top: 673,
  },
  iphone1415ProMax15Child6: {
    marginLeft: -96.6,
    top: 785,
    width: 180,
    height: 22,
    left: "50%",
  },
  locationIcon: {
    top: 787,
    left: 128,
    width: 19,
    height: 19,
    overflow: "hidden",
    position: "absolute",
  },
  currentLocation: {
    top: 790,
    left: 159,
    fontSize: FontSize.size_smi,
    color: "#858484",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  male: {
    top: 550,
    left: 93,
  },
  other: {
    top: 613,
    left: 87,
  },
  female: {
    top: 551,
    left: 248,
  },
  iphone1415ProMax15: {
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

export default IPhone1415ProMax12;
