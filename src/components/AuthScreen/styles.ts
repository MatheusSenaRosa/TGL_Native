import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const Logo = styled.View`
  width: 210px;

  align-items: center;
`;

export const Title = styled.Text`
  color: #707070;
  font-size: 50px;
  font-style: italic;

  font-weight: bold;
  text-align: center;
`;

export const GreenWrapper = styled.View`
  margin: 10px 0 6px 0;
  border-radius: 15px;
  background-color: #b5c401;

  width: 95px;
  height: 28px;

  justify-content: center;
  align-items: center;
`;

export const MiddleText = styled.Text`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: white;
`;

export const Wrapper = styled.View`
  margin-top: 20px;
  width: 260px;
  align-items: center;
`;

export const FormTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  font-style: italic;
  color: #707070;

  margin-bottom: 10px;
`;

export const Form = styled.View`
  border: 1px solid #dddddd;
  border-radius: 14px;

  width: 100%;
  overflow: hidden;
`;

export const Submit = styled.View`
  margin-top: auto;
  height: 70px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubmitText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
  color: #b5c401;
`;

export const RightArrow = styled(Feather)`
  font-size: 25px;
  margin-left: 5px;
`;

export const NextPageButton = styled.View`
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
`;

export const NextPageText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
  color: #707070;
`;

export const LeftArrow = styled(Feather)`
  font-size: 25px;
  margin-right: 5px;
`;

export const GoBackButton = styled.View`
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
`;

export const GoBackText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
  color: #707070;
`;
