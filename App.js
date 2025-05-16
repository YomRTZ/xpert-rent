import { ThemeProvider } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContex';
import AppNavigator from './src/navigation/AppNavigator';
import ThemedStatusBar from './src/components/ThemedStatusBar';
import { ModalProvider } from './src/context/ModalContext';
import GlobalModalRenderer from './src/components/GlobalModalRenderer';

export default function App() {
  return (
    <ModalProvider>
    <FontProvider>
    <ThemeProvider>
    <ThemedStatusBar />
        <AppNavigator/>
        <GlobalModalRenderer />
    </ThemeProvider>
    </FontProvider>
    </ModalProvider>
  );
}

