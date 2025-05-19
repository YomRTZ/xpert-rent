import { ThemeProvider } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContex';
import AppNavigator from './src/navigation/AppNavigator';
import ThemedStatusBar from './src/components/ThemedStatusBar';
import { ModalProvider } from './src/context/ModalContext';
import { FavoritesProvider} from './src/context/FavoritesContext';
import GlobalModalRenderer from './src/components/GlobalModalRenderer';

export default function App() {
  return (
    <FavoritesProvider>
    <ModalProvider>
    <FontProvider>
    <ThemeProvider>
    <ThemedStatusBar />
        <AppNavigator/>
        <GlobalModalRenderer />
    </ThemeProvider>
    </FontProvider>
    </ModalProvider>
    </FavoritesProvider>
  );
}

