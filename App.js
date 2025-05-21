import { ThemeProvider } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContex';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritesProvider} from './src/context/FavoritesContext';
export default function App() {
  return (
    <FavoritesProvider>
    <FontProvider>
    <ThemeProvider>
        <AppNavigator/>
    </ThemeProvider>
    </FontProvider>
    </FavoritesProvider>
  );
}

