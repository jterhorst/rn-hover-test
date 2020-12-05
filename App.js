import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import Hoverable from "./components/Hoverable";

const createLogger = (...msg) => () => {
  console.log(...msg);
};

const App = props => {

  const [selectedSlide, setSelectedSlide] = useState(false);

  const toggleSlideSelection = () => {
    let isSelected = selectedSlide;
    isSelected = !isSelected;
    setSelectedSlide(isSelected);
    createLogger("clicked slide");
  }

  return (
    <View style={styles.app}>
      <Hoverable onHoverIn={createLogger("in")} onHoverOut={createLogger("out")}>
        {isHovered => {
          var stateStyle = styles.slideIdle;
          if (selectedSlide) {
            stateStyle = styles.slideSelected;
          } else if (isHovered) {
            stateStyle = styles.slideHover;
          }
          // stateStyle = stateStyle + styles.slide;
          // console.log("styles: " + JSON.stringify(stateStyle))
          return (
            <TouchableHighlight activeOpacity={1.0} underlayColor="lightGray" onPress={toggleSlideSelection}>
              <View style={stateStyle}>

              </View>
            </TouchableHighlight>
          )
        }}
      </Hoverable>
    </View>
    // <View style={styles.app}>
    //   <Hoverable
    //     onHoverIn={createLogger("in")}
    //     onHoverOut={createLogger("out")}
    //   >
    //     {isHovered => (
    //       <TouchableOpacity
    //         accessible={true}
    //         activeOpacity={0.5}
    //         onPress={() => {}}
    //         style={[styles.header, isHovered && { backgroundColor: "#333" }]}
    //       >
    //         <View>
    //           <Hoverable
    //             onHoverIn={createLogger("in-image")}
    //             onHoverOut={createLogger("out-image")}
    //           >
    //             {isHovered => (
    //               <Image
    //               accessibilityLabel="React logo"
    //               source={require('./assets/icon.png')}
    //               resizeMode="contain"
    //               style={styles.logo}
    //             />
    //             )}
    //           </Hoverable>
    //           <Text style={styles.title}>Welcome to React</Text>
    //         </View>
    //       </TouchableOpacity>
    //     )}
    //   </Hoverable>
    //   <Text style={styles.intro}>
    //     To get started, edit{" "}
    //     <Hoverable>
    //       {hover => (
    //         <Text
    //           accessibilityRole="link"
    //           href="#"
    //           style={[styles.code, styles.link, hover && styles.linkHover]}
    //         >
    //           src/App/index.js
    //         </Text>
    //       )}
    //     </Hoverable>{" "}
    //     and save to reload.
    //   </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    
  },
  slideIdle: {
    width: 150,
    height: 80,
    backgroundColor: "black"
  },
  slideHover: {
    width: 150,
    height: 80,
    backgroundColor: "gray"
  },
  slideSelected: {
    width: 150,
    height: 80,
    backgroundColor: "blue"
  }
  // logo: {
  //   height: 80,
  //   width: 80
  // },
  // header: {
  //   backgroundColor: "#222",
  //   padding: 20
  // },
  // title: {
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   marginVertical: 10,
  //   textAlign: "center"
  // },
  // intro: {
  //   fontSize: 15,
  //   marginVertical: 10,
  //   textAlign: "center"
  // },
  // code: {
  //   fontFamily: "Courier"
  // },
  // link: {
  //   color: "blue"
  // },
  // linkHover: {
  //   textDecorationLine: "underline"
  // }
});

export default App;
