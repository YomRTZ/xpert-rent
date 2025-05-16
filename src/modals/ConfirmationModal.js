import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfirmationModal = ({ title, onConfirm, onCancel }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.buttonRow}>
      <Button title="Cancel" onPress={onCancel} />
      <Button title="Confirm" onPress={onConfirm} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ConfirmationModal;
