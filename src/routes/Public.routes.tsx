import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogIn, SignUp } from "@screens";
import { propsNavigationStack } from "./models";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export function PublicRoutes() {
  return (
    <Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
      <Screen name="LogIn" component={LogIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
