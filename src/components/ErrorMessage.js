import React from 'react';
import { Text } from 'react-native';

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <Text style={{ color: 'red', fontSize: 12 }}>{message}</Text>;
}
