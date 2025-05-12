import { useTheme } from "../context/ThemeContext";
import { StatusBar } from "react-native";
export default function ThemedStatusBar(){
    const {theme}=useTheme();
    return (
        <StatusBar
          barStyle={theme.colors.surface}
          backgroundColor={theme.colors.surface}
        />
      );
}