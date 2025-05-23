import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { useField } from 'formik';
import { useTheme } from '../context/ThemeContext';
export default function FormLink({name,...props}){
    const [field,meta]=useField(name);
    const {theme}=useTheme();
    const styles = StyleSheet.create({
        input: {
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 6,
          marginBottom: 10,
        },
      });
    return(
        <>
        <TextInput 
        value={field.value}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        style={[styles.input, { borderColor: theme.colors.border, backgroundColor: theme.colors.surface }]}
        placeholderTextColor={theme.colors.title}
        {...props}
        />
        {meta.touched && meta.error && (
        <Text style={{ color: 'red', fontSize: 12 }}>{meta.error}</Text>
      )}
        </>
    );
};
