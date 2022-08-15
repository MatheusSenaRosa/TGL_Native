import { AuthScreen, Input } from "@components";

export function ForgotPassword() {
  return (
    <AuthScreen formButtonText="Send link" title="Reset password">
      <Input placeholder="Email" />
    </AuthScreen>
  );
}
