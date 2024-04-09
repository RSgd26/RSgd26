import * as React from "react";
import { StyleSheet, View, Pressable, Text, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax7}>
      <LinearGradient
        style={[styles.iphone1415ProMax7Child, styles.childPosition]}
        locations={[0, 0.6, 1]}
        colors={["#50c9dc", "#5687b1", "#5b538f"]}
      />
      <Image
        style={[styles.iphone1415ProMax7Item, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-35.png")}
      />
      <Pressable
        style={[styles.iphone1415ProMax7Inner, styles.childPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax15")}
      />
      <Text style={styles.accept}>Accept</Text>
      <Pressable
        style={[styles.ellipseParent, styles.rightIconLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax18")}
      >
        <Image
          style={[styles.groupChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-56.png")}
        />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right7.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax7Child1, styles.childPosition]} />
      <Text
        style={[styles.termsAndConditions, styles.termsAndConditionsClr]}
      >{`Terms and Conditions `}</Text>
      <Text
        style={[styles.laborLawsAreContainer, styles.termsAndConditionsClr]}
      >
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text
            style={styles.laborLawsAre}
          >{` Labor laws are crucial for ensuring fair treatment of employees and maintaining a healthy work environment. Here are some important labor laws in India that every employee should be aware of:

`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>
            Minimum Wages Act, 1948:
          </Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            This act ensures that workers receive a minimum wage for their
            labor, protecting them from exploitation
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>
            Employees’ Provident Fund (EPF) Act:
          </Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            It establishes a mandatory provident fund for employees,
            contributing to their financial security after retirement
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>Code on Wages Act:</Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            This comprehensive legislation consolidates four existing acts
            related to wages and working conditions
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>Maternity Benefit Act:</Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            It provides maternity leave and benefits to pregnant women,
            promoting their well-being during pregnancy and childbirth
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>
            Industrial Disputes Act:
          </Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            Governs matters related to disputes between employers and employees,
            including layoffs, retrenchment, and compensation1
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
Employees’ State Insurance (ESI) Act: Ensures medical and financial assistance to employees during sickness, maternity, or disability.
`}</Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.minimumWagesActTypo}>
            Payment of Gratuity Act:
          </Text>
          <Text style={styles.laborLawsAre}>
            {" "}
            Provides for gratuity payments to employees after completing a
            certain period of service with an employer
          </Text>
        </Text>
        <Text style={styles.laborLawsAreCrucialForEns}>
          <Text style={styles.laborLawsAre}>{`.
Remember, understanding these laws empowers employees to assert their rights and contributes to a harmonious workplace.
`}</Text>
        </Text>
        <Text style={styles.weAreFollowing}>
          {" "}
          We are following the rules and guidelines.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  rightIconLayout: {
    height: 58,
    position: "absolute",
  },
  termsAndConditionsClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  iphone1415ProMax7Child: {
    top: -51,
    left: -73,
    borderRadius: Border.br_18xl,
    width: 518,
    height: 1020,
    backgroundColor: "transparent",
  },
  iphone1415ProMax7Item: {
    left: 347,
    width: 53,
    height: 55,
    top: 28,
  },
  iphone1415ProMax7Inner: {
    top: 833,
    left: 223,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkorange,
    width: 170,
    height: 50,
  },
  accept: {
    top: 842,
    left: 258,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_7xl,
    position: "absolute",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  groupChild: {
    top: 3,
    left: 5,
    width: 59,
    height: 51,
  },
  rightIcon: {
    top: 0,
    left: 0,
    width: 62,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
  ellipseParent: {
    left: 35,
    width: 64,
    top: 28,
  },
  rectangleView: {
    top: 104,
    left: 37,
    borderRadius: Border.br_3xs,
    backgroundColor: "#f4f4f4",
    width: 361,
    height: 666,
  },
  iphone1415ProMax7Child1: {
    top: 792,
    left: 40,
    backgroundColor: Color.colorGainsboro,
    width: 30,
    height: 28,
  },
  termsAndConditions: {
    top: 124,
    left: 45,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_7xl,
    color: Color.colorBlack,
  },
  laborLawsAre: {
    fontFamily: FontFamily.interRegular,
  },
  laborLawsAreCrucialForEns: {
    fontSize: FontSize.size_smi,
  },
  minimumWagesActTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  weAreFollowing: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  laborLawsAreContainer: {
    top: 167,
    left: 55,
    width: 319,
    height: 582,
  },
  iphone1415ProMax7: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
});

export default IPhone1415ProMax16;
