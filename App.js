import { StackNavigation } from "./Screens/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return ( 
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

