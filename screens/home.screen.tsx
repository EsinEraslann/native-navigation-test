import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import MySafeAreaView from "../components/my-safearea";

const HomeScreen = () => {
  const nav = useNavigation();

  const { top } = useSafeAreaInsets();

  return (
    <MySafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Ürünlere Git"
          onPress={() => {
            nav.navigate("Products");
          }}
        />
      </View>
    </MySafeAreaView>
  );
};

export default HomeScreen;
