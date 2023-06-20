import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import axios from "axios";

export default function App() {
  const [ryanPoints, setRyanPoints] = useState(null);
  const [maxPoints, setMaxPoints] = useState(null);

  function fetchTrollLeader() {
    if (ryanPoints > maxPoints) {
      return "Ryan";
    } else if (ryanPoints < maxPoints) {
      return "Max";
    } else {
      return "Tie Game";
    }
  }

  async function fetchLeader() {
    try {
      const response = await axios.get(
        "https://troll-game-server-production.up.railway.app/fetch-points"
      );
      setMaxPoints(response.data.max);
      setRyanPoints(response.data.ryan);
    } catch (error) {
      console.log(error);
    }
    console.log("fetchLeader");
  }

  useEffect(() => {
    fetchLeader();
  }, []);

  async function updatePoints(name) {
    try {
      const response = await axios.get(
        "https://troll-game-server-production.up.railway.app/add-point",
        {
          params: {
            name: name,
          },
        }
      );
      if (name === "ryan") {
        console.log("yes");
        setRyanPoints((prev) => prev + 1);
      } else {
        setMaxPoints((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>🧌 Troll Leader 🧌</Text>
        <Text>{fetchTrollLeader()}</Text>
      </View>
      <View style={styles.trollRowContainer}>
        <View style={styles.trollRow}>
          <View style={styles.nameRow}>
            <Text>💩 Ryan:</Text>
            <Text>{ryanPoints ? ryanPoints : "0"}</Text>
          </View>
          <TouchableOpacity onPress={() => updatePoints("ryan")}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trollRow}>
          <View style={styles.nameRow}>
            <Text>😇 Max:</Text>
            <Text>{maxPoints ? maxPoints : "0"}</Text>
          </View>
          <TouchableOpacity onPress={() => updatePoints("max")}>
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
