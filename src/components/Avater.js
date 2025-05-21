import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
const Avatar = ({
  name,
  role,
  avatarStyle,
  nameStyle,
  roleStyle,
  imageStyle,
}) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#4a6fa5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textContainer: {
      flexDirection: 'column',
    },
    name: {
      fontSize: 12,
      fontWeight: 'bold',
      color: theme.colors.heading,
    },
    role: {
      fontSize: 10,
      color: theme.colors.title,
    },
  });

  return (
    <View style={styles.container}>
      <View style={[styles.avatar, avatarStyle]}>
        <Image
          source={{ uri:'https://img.freepik.com/premium-photo/memoji-african-american-man-white-background-emoji_826801-6860.jpg?semt=ais_hybrid&w=740'}}
          style={[styles.image, imageStyle]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, nameStyle]}>{name}</Text>
        <Text style={[styles.role, roleStyle]}>{role}</Text>
      </View>
    </View>
  );
};

export default Avatar;
