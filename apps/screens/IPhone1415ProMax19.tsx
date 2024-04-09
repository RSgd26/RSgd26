import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax19 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415ProMax3, styles.userIconTransform]}>
      <LinearGradient
        style={[styles.iphone1415ProMax3Child, styles.iphone1415ShadowBox]}
        locations={[0, 0.56, 1]}
        colors={["#50c9dc", "#5685b0", "#5b538f"]}
      />
      <View
        style={[styles.iphone1415ProMax3Item, styles.rectangleViewBorder]}
      />
      <View
        style={[styles.iphone1415ProMax3Inner, styles.iphone1415ShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <View
        style={[
          styles.iphone1415ProMax3Child1,
          styles.rectanglePressableLayout,
        ]}
      />
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax")}
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
        source={require("../assets/group-38.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax18")}
      />
      <Text style={[styles.labour, styles.labourTypo]}>LABOUR</Text>
      <Pressable
        style={styles.customers}
        onPress={() => navigation.navigate("IPhone1415ProMax17")}
      >
        <Text
          style={[styles.customers1, styles.labourTypo]}
        >{`CUSTOMERS `}</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.iphone1415ProMax3Child2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.labourIcon}
        contentFit="cover"
        source={require("../assets/labour.png")}
      />
      <Image
        style={[styles.userIcon, styles.userIconTransform]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userIconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
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
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_15xl,
    left: 24,
    borderWidth: 6,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectanglePressableLayout: {
    height: 160,
    width: 306,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    backgroundColor: Color.colorWhite,
  },
  rightIconLayout: {
    height: 66,
    position: "absolute",
  },
  labourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseIconPosition: {
    height: 75,
    left: 78,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax3Child: {
    marginTop: -501.9,
    marginLeft: -275.3,
    backgroundColor: "transparent",
  },
  iphone1415ProMax3Item: {
    top: 164,
    height: 344,
  },
  iphone1415ProMax3Inner: {
    marginTop: -3.9,
    marginLeft: -274.6,
    backgroundColor: Color.colorLightsteelblue,
  },
  rectangleView: {
    top: 366,
    backgroundColor: Color.colorLavender,
    height: 440,
  },
  iphone1415ProMax3Child1: {
    top: 527,
    left: 61,
    borderColor: Color.colorDarkorange,
    borderWidth: 6,
    width: 306,
    borderRadius: Border.br_11xl,
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
    top: 57,
    left: 36,
    width: 62,
  },
  groupIcon: {
    top: 62,
    left: 340,
    width: 53,
    height: 55,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rectanglePressable: {
    top: 289,
    left: 60,
    borderColor: "#5a669c",
    borderWidth: 7,
  },
  labour: {
    top: 350,
    left: 174,
    fontSize: FontSize.size_17xl,
    color: "#163a2a",
    width: 163,
    height: 56,
    position: "absolute",
  },
  customers1: {
    fontSize: 30,
    color: "#173a2a",
  },
  customers: {
    left: 155,
    top: 592,
    position: "absolute",
  },
  ellipseIcon: {
    top: 331,
    width: 66,
  },
  iphone1415ProMax3Child2: {
    top: 569,
    width: 69,
  },
  labourIcon: {
    top: 333,
    width: 65,
    height: 65,
    left: 78,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    overflow: "hidden",
  },
  userIcon: {
    top: 575,
    left: 84,
    width: 57,
    height: 57,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax3: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 932,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax19;
