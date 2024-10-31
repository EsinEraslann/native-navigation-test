import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home.screen";
import ProductsScreen from "../screens/products.screen";

const Drawer = createDrawerNavigator();
const DrawerRouter = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Products" component={ProductsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRouter;
