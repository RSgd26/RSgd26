import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone1415ProMax11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.iphone1415ProMax16, styles.userTransform]}
      locations={[0, 0.57, 0.99]}
      colors={["#50c9dc", "#5687b1", "#5b538f"]}
    >
      <View style={styles.iphone1415ProMax16Child} />
      <Image
        style={styles.iphone1415ProMax16Item}
        contentFit="cover"
        source={require("../assets/group-33.png")}
      />
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax12")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconPosition]}
          contentFit="cover"
          source={require("../assets/right4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.save, styles.saveFlexBox]}>SAVE</Text>
      </Pressable>
      <Image
        style={styles.iphone1415ProMax16Inner}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
      <Text style={[styles.hiRahulSagarContainer, styles.saveFlexBox]}>
        <Text style={styles.hi}>{`Hi
`}</Text>
        <Text style={styles.rahulSagar}>RAHUL SAGAR</Text>
      </Text>
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <Text style={[styles.skip1, styles.orTypo]}> Skip</Text>
      </Pressable>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={[styles.user, styles.userTransform]} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  userTransform: {
    overflow: "hidden",
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
  groupItemLayout: {
    height: 69,
    width: 290,
    position: "absolute",
  },
  saveFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  orTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax16Child: {
    marginTop: -449,
    marginLeft: -199.3,
    top: "50%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLightblue,
    width: 398,
    height: 898,
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax16Item: {
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
    left: "50%",
  },
  rectangleParent: {
    top: 770,
    left: 70,
  },
  iphone1415ProMax16Inner: {
    top: 353,
    left: 75,
    width: 279,
    height: 299,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  hi: {
    fontSize: 64,
  },
  rahulSagar: {
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
  },
  hiRahulSagarContainer: {
    top: 183,
    left: 51,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  skip1: {
    marginLeft: -18.1,
    fontSize: FontSize.size_base,
    color: "#6d6a6a",
  },
  skip: {
    top: 875,
    left: "50%",
    position: "absolute",
  },
  or: {
    marginLeft: -7.1,
    top: 851,
    fontSize: 11,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  user: {
    top: 356,
    left: 73,
    width: 296,
    height: 286,
    display: "none",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax16: {
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
  },
});

export default IPhone1415ProMax11;
