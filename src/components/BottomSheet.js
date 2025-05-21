import React, { forwardRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View } from 'react-native';

const BottomSheet = forwardRef(({ children, height = 350, backgroundColor }, ref) => {
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
