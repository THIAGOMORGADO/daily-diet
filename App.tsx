import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components';

// importando as customizacoes do tema
import themes from 'src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
  <ThemeProvider theme={themes}>
    <View style={styles.container}>
      {!fontsLoaded ? <Text>Fons Carregado com sucesso...</Text> : <Text>Fonts nao Carregadas </Text>} 
      <StatusBar style="auto" />
    </View>
  </ThemeProvider>  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
