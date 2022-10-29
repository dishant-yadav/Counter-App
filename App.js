import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  // logic to store the data in localstorage
  
  const reloadStatus = window.performance.getEntriesByType("navigation")[0].type;
  if (reloadStatus === "reload") {
  //   localStorage.setItem("counter", counter);
  // }

  // setCounter(localStorage.getItem("counter"));

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{counter}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setCounter(counter + 10);
        }}
      >
        <Text style={styles.buttonTextStyle}>Increment (+10)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setCounter(0);
        }}
      >
        <Text style={styles.buttonTextStyle}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          if (!counter <= 0) setCounter(counter - 10);
        }}
      >
        <Text style={styles.buttonTextStyle}>Decrement (-10)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: "64px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  buttonTextStyle: {
    fontSize: "32px",
    fontWeight: "600",
    color: "white",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    width: "270px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "10px",
    marginBottom: "10px",
  },
});

export default App;
