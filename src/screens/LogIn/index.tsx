import { AuthScreen, Input } from "@components";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@routeModels";
import { TouchableWithoutFeedback } from "react-native";

import * as S from "./styles";

export function LogIn() {
  const { navigate } = useNavigation<propsStack>();

  return (
    <AuthScreen
      formButtonText="Log In"
      title="Authentication"
      nextPage={{
        name: "Sign Up",
        route: "SignUp",
      }}
    >
      <>
        <Input placeholder="Email" />
        <Input placeholder="Password" autoCapitalize="none" secureTextEntry />

        <TouchableWithoutFeedback onPress={() => navigate("ForgotPassword")}>
          <S.ForgotPassword>I forgot my password</S.ForgotPassword>
        </TouchableWithoutFeedback>
      </>
    </AuthScreen>
  );
}
