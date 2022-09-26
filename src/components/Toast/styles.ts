import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  padding: 5px 15px;

  align-items: center;
`;

export const Content = styled.View`
  width: 100%;

  background: white;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 10px 15px;

  border-radius: 27px;
`;

export const MessageView = styled.View`
  width: 75%;
`;

interface ITextProps {
  type: "success" | "warning" | string;
}

export const Title = styled.Text<ITextProps>`
  color: ${({ type }) => (type === "success" ? "#329626" : "#B50011")};
  font-size: 15px;
`;

export const SubTitle = styled.Text`
  color: #a2acba;
  font-size: 15px;
`;

export const ButtonClose = styled.Pressable``;

export const IconClose = styled(Ionicons).attrs(() => ({
  name: "close",
  size: 20,
}))`
  color: #424f5cb3;
`;
