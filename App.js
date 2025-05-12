import { ThemeProvider } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContex';
import AppNavigator from './src/navigation/AppNavigator';
import ThemedStatusBar from './src/components/ThemedStatusBar';
export default function App() {
  return (
    <FontProvider>
    <ThemeProvider>
    <ThemedStatusBar />
        <AppNavigator/>
    </ThemeProvider>
    </FontProvider>
  );
}

