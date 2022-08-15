import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { ForgotPassword, LogIn, SignUp } from "@screens";
import { Easing } from "react-native";
import { propsNavigationStack } from "./models";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export function PublicRoutes() {
  return (
    <Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: {
            animation: "spring",
            config: {
              stiffness: 1000,
              damping: 50,
              overshootClamping: false,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 200,
              easing: Easing.linear,
            },
          },
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Screen name="LogIn" component={LogIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
