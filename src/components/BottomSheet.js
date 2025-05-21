import React, { forwardRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
const BottomSheet = forwardRef(({ children, height = 350, backgroundColor }, ref) => {
const {theme}=useTheme();
  return (
    <RBSheet
      ref={ref}
      useNativeDriver={false}
      draggable={true}
      customStyles={{
        draggableIcon: {
          backgroundColor: '#000',
        },
        container: {
          height,
          backgroundColor:theme.colors.background
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </RBSheet>
  );
});

export default BottomSheet;
