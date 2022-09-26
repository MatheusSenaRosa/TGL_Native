import "react-native-gesture-handler";
import Toast, { ToastConfig } from "react-native-toast-message";
import { Routes } from "@routes";
import { ToastComponent } from "@components";

const toastConfig: ToastConfig = {
  success: (props) => <ToastComponent {...props} />,
  warning: (props) => <ToastComponent {...props} />,
};

export default function App() {
  return (
    <>
      <Routes />
      <Toast config={toastConfig} />
    </>
  );
}
