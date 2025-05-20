import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = forwardRef(({ children, snapPoints = ['50%'], backgroundStyle }, ref) => {
  const bottomSheetRef = useRef(null);
// Expose open/close methods to parent via ref
  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backgroundStyle={backgroundStyle}
      enablePanDownToClose
    >
      <View style={styles.content}>
        {children}
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: 20,
      minHeight: 200, 
    },
  });
  

export default CustomBottomSheet;
