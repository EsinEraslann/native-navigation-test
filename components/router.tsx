import { Modal, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home.screen";
import ProductsScreen from "../screens/products.screen";

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        animation: "flip",
      }}>
        <Stack.Screen
          options={{
            presentation: "modal",
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
        options={{
            presentation: "modal",
          }}
          name="Products"
          component={ProductsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
