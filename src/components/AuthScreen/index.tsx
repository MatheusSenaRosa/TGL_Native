import {
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack, PublicRoutes } from "@routeModels";

import * as S from "./styles";

type Props = {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  formButtonText: string;
  title: string;
  nextPage?: {
    name: string;
    route: PublicRoutes;
  };
};

export function AuthScreen({
  children,
  nextPage,
  formButtonText,
  title,
}: Props) {
  const { goBack, navigate } = useNavigation<propsStack>();

  return (
    <S.Container>
      <ScrollView>
        <S.KeyboardAvoidingView behavior="padding">
          <S.Logo>
            <S.Title>The Greatest App</S.Title>
            <S.GreenWrapper>
              <S.MiddleText>for</S.MiddleText>
            </S.GreenWrapper>
            <S.Title>LOTTERY</S.Title>
          </S.Logo>

          <S.Wrapper>
            <S.FormTitle>{title}</S.FormTitle>
            <S.Form>
              {children}
              <TouchableNativeFeedback>
                <S.Submit>
                  <S.SubmitText>{formButtonText}</S.SubmitText>
                  <S.RightArrow name="arrow-right" color="#B5C401" />
                </S.Submit>
              </TouchableNativeFeedback>
            </S.Form>

            {nextPage ? (
              <TouchableWithoutFeedback
                onPress={() => navigate(nextPage.route)}
              >
                <S.NextPageButton>
                  <S.NextPageText>{nextPage.name}</S.NextPageText>
                  <S.RightArrow name="arrow-right" color="#707070" />
                </S.NextPageButton>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={goBack}>
                <S.GoBackButton>
                  <S.LeftArrow name="arrow-left" color="#707070" />
                  <S.GoBackText>Back</S.GoBackText>
                </S.GoBackButton>
              </TouchableWithoutFeedback>
            )}
          </S.Wrapper>
        </S.KeyboardAvoidingView>
      </ScrollView>
    </S.Container>
  );
}
