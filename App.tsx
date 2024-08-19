import { StatusBar } from "react-native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";

// importando as customizacoes do tema
import themes from "src/themes";
import Loading from "@components/Loading";
import Home from "@screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  return (
    <ThemeProvider theme={themes}>
      {!fontsLoaded ? <Home /> : <Loading />}
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
