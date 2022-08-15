import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PublicRoutes = "LogIn" | "SignUp" | "ForgotPassword";

export type propsNavigationStack = {
  LogIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
