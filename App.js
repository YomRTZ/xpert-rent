import { StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContex';
import AppNavigator from './src/navigation/AppNavigator';
export default function App() {
  return (
    <FontProvider>
    <ThemeProvider>
    <StatusBar/>
        <AppNavigator/>
    </ThemeProvider>
    </FontProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
