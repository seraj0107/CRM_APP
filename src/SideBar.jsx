import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity 
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";
  
const SideBar = ({ navigation, route }) => {
    const { handleLogout } = route.params;
  return (
    <>
      <View style={{ height: "100%", backgroundColor: "lightblue" }}>
       
      
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        {/* <Text
          style={{
            top: 60,
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Account
        </Text> */}
        <ScrollView>
          {/* user details top section */}
          <View
           
          >
            <View style={styles.userDetailsContainer}>
              <View style={styles.profiletext}>
                <Text style={styles.textname}>Seraj</Text>
                <Text style={styles.textemail}>aserajbrm01@gmail.com</Text>
              </View>
              <View style={styles.profilecontainer}>
                <Image
                  style={styles.profileimage}
                  source={{
                    uri: "https://c4.wallpaperflare.com/wallpaper/116/943/740/the-explosion-superhero-tony-stark-tony-stark-wallpaper-preview.jpg",
                  }}
                />
              </View>
            </View>
          </View>

          {/*second part */}

          <View style={styles.secondcontainer}>
            <TouchableOpacity style={styles.iagecontainer}>
              <Image
                style={styles.Logoadr}
                source={{
                 
                }}
              />
              <Text style={styles.textservicebottomside}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainersecond}>
              <Image
                style={styles.Logoadrsecond}
                source={{
                    // add hear image url
                }}
              />
              <Text style={styles.textservicebottomsidesecond}>
                {/* Current Loan */}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainersecond}>
              <Image
                style={styles.Logoadrthird}
                source={{
// add hear image url
                }}
              />
              <Text style={styles.textservicebottomsidethird}>
                {/* Insta Loan */}
                </Text>
            </TouchableOpacity>
          </View>

          {/* third part */}

          <View style={styles.thirdcontainer}>
            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <MaterialCommunityIcons
                  name="wallet-giftcard"
                  size={35}
                  color="green"
                />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* Coupons */}
              </Text>
              <Text
                style={{ left: responsiveWidth(46), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <Entypo name="slideshare" size={35} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* refer a friend & get rs 300 */}
              </Text>
              <Text
                style={{ left: responsiveWidth(18), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <Entypo name="location-pin" size={35} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* find a store */}
              </Text>
              <Text
                style={{ left: responsiveWidth(42), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <FontAwesome6 name="arrows-rotate" size={32} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* transactions */}
              </Text>
              <Text
                style={{ left: responsiveWidth(40), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <MaterialCommunityIcons
                  name="crosshairs-gps"
                  size={35}
                  color="green"
                />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* track request */}
              </Text>
              <Text
                style={{ left: responsiveWidth(38), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                {" "}
                <FontAwesome name="calculator" size={30} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* EMI calculator */}
              </Text>
              <Text
                style={{ left: responsiveWidth(37), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                <FontAwesome6 name="users-gear" size={30} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* find nearest delear */}
              </Text>
              <Text
                style={{ left: responsiveWidth(28), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textthirdcontainer}>
              <Text
                style={{
                  left: responsiveWidth(1.5),
                  top: responsiveHeight(0.5),
                }}
              >
                <MaterialIcons name="man-4" size={35} color="green" />
              </Text>
              <Text
                style={{
                  left: responsiveWidth(8),
                  fontSize: responsiveFontSize(1.8),
                  top: responsiveHeight(1),
                  fontWeight: "700",
                }}
              >
                {/* Expense manager */}
              </Text>
              <Text
                style={{ left: responsiveWidth(30), top: responsiveHeight(1) }}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={35}
                  color="orange"
                />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logout}>
            <TouchableOpacity onPress={handleLogout}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: responsiveFontSize(1.8),
                  fontWeight: "700",
                  color: "grey",
                }}
              >
                SIGN OUT
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: responsiveFontSize(1.3),
                  fontWeight: "300",
                  color: "grey",
                }}
              >
                version 18.8.8
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};


export const styles = StyleSheet.create({

    maincontainersidebar: {
      backgroundColor: "lightblue"
  
  
    },
    //user Profile section
    userDetailsContainer: {
      // paddingTop: "100%",
      display: "flex",
      marginTop: responsiveHeight(1),
      margin: "5%",
      height: responsiveHeight(12),
      width: responsiveWidth(89),
      borderRadius: 30,
      backgroundColor: '#04214f',
      // Custom shadow effect
      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 6,
      elevation: 8,
    },
  
    profilecontainer: {
      //marginTop: 5,
      bottom: 22,
      marginLeft: responsiveWidth(2.7),
      width: responsiveWidth(6.5),
      height: responsiveHeight(6.5),
      borderRadius: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 8,
    },
    profileimage: {
      width: responsiveWidth(7),
      height: responsiveHeight(7),
      borderRadius: 100,
      padding: 15,
      aspectRatio: 1,
  
  
    },
    profiletext: {
  
  
  
    },
    textname: {
      textAlign: "center",
      right: responsiveWidth(8),
      top: responsiveHeight(3),
      fontSize: responsiveFontSize(2),
      fontWeight: "900",
      color: "white"
  
    },
  
    textemail: {
      textAlign: "center",
      top: responsiveHeight(3),
      fontWeight: "300",
      color: "white",
      fontSize: responsiveFontSize(1.8),
    },
  
  
    //second container
  
    secondcontainer: {
      flexDirection: "row",
      height: responsiveHeight(10),
      width: responsiveWidth(83),
      left: responsiveWidth(8.7),
      borderRadius: 10,
      marginBottom: responsiveHeight(4),
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 8,
    },
    textthirdcontainer: {
      marginTop: responsiveHeight(2)
    },
  
    Logoadr: {
      width: responsiveWidth(15),
      height: responsiveHeight(4),
      resizeMode: "cover",
      left: 10,
      top: 5
  
  
    },
    textservicebottomside: {
      left: responsiveWidth(2),
  
      top: responsiveHeight(1),
      fontWeight: "500"
    },
  
    imagecontainer: {
      width: 50,
      height: 45,
      borderRadius: 30,
      left: 20,
      top: 5,
      backgroundColor: "red"
    },
    textservicebottomsidesecond: {
      left: responsiveWidth(17),
  
      // top: 10,
      fontWeight: "500"
    },
  
    Logoadrsecond: {
      width: responsiveWidth(13),
      height: responsiveHeight(5),
      resizeMode: "cover",
      left: responsiveWidth(22),
  
 },
    textservicebottomsidethird: {
      left: responsiveWidth(25),
  
      // top: 10,
      fontWeight: "500"
    },
  
    Logoadrthird: {
      width: responsiveWidth(11),
      height: responsiveHeight(5),
      resizeMode: "cover",
      left: responsiveWidth(27),
      top: responsiveHeight(0.5)
  
  
    },
  
    //third part
  
    thirdcontainer: {
      width: responsiveWidth(85),
      height: "auto",
  
      paddingBottom: 10,
      backgroundColor: "white",
      left: responsiveWidth(8.6),
      borderRadius: 10,
      marginBottom: responsiveHeight(2),
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 8,
    },
    textthirdcontainer: {
      marginTop: 20,
      flexDirection: "row",
    },
  
    //logout
  
    logout: {
      marginTop: responsiveHeight(3),
      marginBottom: responsiveHeight(5)
    }
  
  })

export default SideBar;