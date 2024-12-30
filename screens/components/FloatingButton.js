import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useClickCount } from "./ClickContext";  

const FloatingButton = () => {
  const { clickCount } = useClickCount(); 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{clickCount} Clicks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default FloatingButton;
