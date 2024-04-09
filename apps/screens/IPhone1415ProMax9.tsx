import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415ProMax26, styles.iconTransform]}>
      <Image
        style={[styles.iphone1415ProMax26Child, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-376.png")}
      />
      <View style={[styles.iphone1415ProMax26Item, styles.iphone1415Layout]} />
      <Image
        style={styles.x1Icon}
        contentFit="cover"
        source={require("../assets/12-4x-1.png")}
      />
      <Image
        style={[styles.iconHome, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-home.png")}
      />
      <Image
        style={[styles.iconHome1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-home.png")}
      />
      <Image
        style={[styles.iconPerson, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-person.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
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
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iphone1415ProMax26Inner, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.chatIcon, styles.iconTransform]}
        contentFit="cover"
        source={require("../assets/chat.png")}
      />
      <Text style={[styles.chat, styles.chatFlexBox]}>Chat</Text>
      <Text style={[styles.call, styles.chatFlexBox]}>Call</Text>
      <Image
        style={[styles.callIcon, styles.iconTransform]}
        contentFit="cover"
        source={require("../assets/call.png")}
      />
      <Text style={[styles.guddu, styles.chatFlexBox]}> Guddu</Text>
      <Text style={[styles.mistry, styles.mistryClr]}> Mistry</Text>
      <Image
        style={[styles.rupeeSignIcon, styles.iconTransform]}
        contentFit="cover"
        source={require("../assets/rupee-sign.png")}
      />
      <Text style={[styles.text, styles.chatFlexBox]}>750</Text>
      <Text style={[styles.perDay, styles.ageTypo]}>Per Day</Text>
      <Text style={[styles.description, styles.ageTypo]}>{`Description
`}</Text>
      <View
        style={[styles.iphone1415ProMax26Child1, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.age24GenderContainer, styles.chatFlexBox]}>
        <Text style={[styles.age, styles.ageTypo]}>{`Age: `}</Text>
        <Text style={styles.text1}>{`24
`}</Text>
        <Text style={[styles.age, styles.ageTypo]}>{`Gender: `}</Text>
        <Text style={styles.text1}>{`Male
`}</Text>
        <Text style={[styles.age, styles.ageTypo]}>{`Skill: `}</Text>
        <Text style={styles.text1}>{`Mistry , Palestra expert
`}</Text>
        <Text style={[styles.age, styles.ageTypo]}>{` 
About Work:





`}</Text>
      </Text>
      <View
        style={[styles.iphone1415ProMax26Child2, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.manduwalaDehradun, styles.chatFlexBox]}>{`Manduwala,
Dehradun`}</Text>
      <Image
        style={[styles.vectorIcon6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={styles.iphone1415ProMax26Child3}
        contentFit="cover"
        source={require("../assets/rectangle-68.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTransform: {
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415Layout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iconLayout: {
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
  rectangleViewLayout: {
    height: 50,
    width: 170,
    backgroundColor: Color.colorDarkorange,
    top: 858,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  chatFlexBox: {
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  mistryClr: {
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ageTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  iphone1415ChildLayout: {
    width: 340,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax26Child: {
    marginTop: -176,
    marginLeft: -223.3,
    top: "50%",
    left: "50%",
    width: 430,
    height: 646,
  },
  iphone1415ProMax26Item: {
    top: 842,
    left: -22,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 491,
    height: 102,
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
    maxHeight: "100%",
    maxWidth: "100%",
    height: "5.92%",
  },
  iconHome1: {
    top: "331.65%",
    right: "1234.23%",
    bottom: "-237.58%",
    left: "-1148.91%",
    width: "14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "5.92%",
  },
  iconPerson: {
    height: "6.77%",
    top: "343.99%",
    right: "1170.05%",
    bottom: "-250.76%",
    left: "-1084.72%",
    width: "14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  icon: {
    height: "100%",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
  },
  wrapper: {
    left: 0,
    top: 27,
    width: 60,
    height: 66,
    position: "absolute",
  },
  iphone1415ProMax26Inner: {
    left: 31,
  },
  rectangleView: {
    left: 230,
  },
  rectangleIcon: {
    top: 11,
    left: 107,
    width: 215,
    height: 279,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  vectorIcon5: {
    height: "3.97%",
    width: "8.14%",
    top: "4.4%",
    right: "4.02%",
    bottom: "91.63%",
    left: "87.84%",
  },
  chatIcon: {
    left: 64,
    width: 25,
    height: 25,
    top: 870,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  chat: {
    left: 104,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 870,
  },
  call: {
    top: 871,
    left: 318,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  callIcon: {
    top: 867,
    left: 273,
    width: 32,
    height: 32,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  guddu: {
    top: 312,
    left: 33,
    width: 303,
    height: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  mistry: {
    top: 341,
    left: 38,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
  rupeeSignIcon: {
    top: 377,
    left: 30,
    width: 26,
    height: 28,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  text: {
    top: 369,
    left: 56,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  perDay: {
    top: 386,
    left: 135,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  description: {
    top: 455,
    left: 37,
    width: 142,
    height: 20,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax26Child1: {
    top: 496,
    left: 43,
    height: 224,
  },
  age: {
    color: Color.colorBlack,
  },
  text1: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
  },
  age24GenderContainer: {
    top: 502,
    left: 49,
    width: 330,
    height: 211,
  },
  iphone1415ProMax26Child2: {
    top: 741,
    left: 44,
    height: 94,
  },
  manduwalaDehradun: {
    top: 756,
    left: 94,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  vectorIcon6: {
    height: "2.58%",
    width: "4.65%",
    top: "81.12%",
    right: "81%",
    bottom: "16.31%",
    left: "14.35%",
  },
  iphone1415ProMax26Child3: {
    top: 750,
    left: 232,
    width: 140,
    height: 70,
    borderRadius: Border.br_8xs,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax26: {
    borderRadius: Border.br_21xl,
    backgroundColor: "#e8ebeb",
    flex: 1,
    height: 932,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    width: "100%",
  },
});

export default IPhone1415ProMax9;
