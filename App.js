import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>🧌 Troll Leader 🧌</Text>
        <Text>Name</Text>
      </View>
      <View style={styles.trollRowContainer}>
        <View style={styles.trollRow}>
          <View style={styles.nameRow}>
            <Text>💩 Ryan:</Text>
            <Text>20</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trollRow}>
          <View style={styles.nameRow}>
            <Text>😇 Max:</Text>
            <Text>20</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  trollRowContainer: {
    width: "100%",
  },
  trollRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 2,
    paddingHorizontal: 20,
  },
  nameRow: {
    flexDirection: "row",
  },
  plus: {
    fontSize: 30,
  },
});
