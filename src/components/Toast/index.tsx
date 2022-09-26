import { ToastConfig } from "react-native-toast-message";

import { IconSuccess, IconWarning } from "@assets";
import {
  Container,
  Title,
  SubTitle,
  MessageView,
  Content,
  ButtonClose,
  IconClose,
} from "./styles";

interface IToastProps extends ToastConfig {
  [key: string]: any;
}

export function ToastComponent({
  type,
  text1,
  text2,
  ...rest
}: IToastProps): JSX.Element {
  return (
    <Container>
      <Content>
        {type === "success" && <IconSuccess />}
        {type === "warning" && <IconWarning />}
        <MessageView>
          <Title type={type}>{text1}</Title>
          {text2 ? <SubTitle>{text2}</SubTitle> : null}
        </MessageView>
        <ButtonClose onPress={rest.hide}>
          <IconClose />
        </ButtonClose>
      </Content>
    </Container>
  );
}
