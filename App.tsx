import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./components/router";
import BottomRouter from "./components/bottom-tab-touter";
import DrawerRouter from "./components/drawer-router";

export default function App() {
  return <DrawerRouter />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
