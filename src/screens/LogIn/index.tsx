import { AuthScreen, Input } from "@components";
import { TouchableWithoutFeedback } from "react-native";
import * as S from "./styles";

export function LogIn() {
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
        <Input placeholder="Password" />

        <TouchableWithoutFeedback>
          <S.ForgotPassword>I forgot my password</S.ForgotPassword>
        </TouchableWithoutFeedback>
      </>
    </AuthScreen>
  );
}
