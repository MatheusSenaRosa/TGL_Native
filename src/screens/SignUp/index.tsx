import { AuthScreen, Input } from "@components";

export function SignUp() {
  return (
    <AuthScreen title="Registration" formButtonText="Register">
      <>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </>
    </AuthScreen>
  );
}
