import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PublicRoutes = "LogIn" | "SignUp";

export type propsNavigationStack = {
  LogIn: undefined;
  SignUp: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
