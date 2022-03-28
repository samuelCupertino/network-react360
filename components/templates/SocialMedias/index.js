import React from "react";
import { StyleSheet, Text, View } from "react-360";

export const SocialMedias = () => (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>Seja bem vindo ao dev_verso</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
