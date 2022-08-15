import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./Public.routes";

export function Routes() {
  const isAuthenticated = false;
  return (
    <NavigationContainer>

      {!isAuthenticated &&

      <PublicRoutes />}
    </NavigationContainer>
  );
}
