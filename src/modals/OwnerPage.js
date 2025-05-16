import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
 export default function OwnerPage({title}){
    const {theme}=useTheme();
    const styles = StyleSheet.create({
        container: {
          width: '100%',
          alignItems: 'center',
          backgroundColor:theme.colors.surface,
          borderTopLeftRadius: theme.radius.medium,
          padding:20
        },
        buttonRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems:"center",
          marginVertical:"5%"
        },
        buttonColumns:{
          flexDirection: 'column',
          justifyContent:"space-between",
          width: '100%',
        },
        sectionTitle: {
            fontFamily:theme.typography.fontFamily.semiBold,
            color: theme.colors.title,
            fontSize: 16,
            fontWeight:theme.typography.fontWeight.bold,
            marginBottom: 6,
          },
          title: {
            fontSize: theme.typography.fontSize.md,
            fontWeight: "bold",
            marginVertical:5,
            marginHorizontal:10,
            color:theme.colors.title,
            fontFamily:theme.typography.fontFamily.semiBold
          },
      });
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttonColumns}>
          <View style={styles.buttonRow}>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='view-dashboard-outline' size={30} color={theme.colors.iconColor} />
          <Text style={styles.sectionTitle}>Dashboard</Text>
          </View>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='home-plus-outline' size={30} color={theme.colors.iconColor} />
          <Text style={styles.sectionTitle}>AddProperty</Text>
          </View>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='home-group' size={30} color={theme.colors.iconColor} />
          <Text style={styles.sectionTitle}>Manage Properties</Text>
          </View>
          </View>
          <View style={styles.buttonRow}>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='account-group-outline' size={30} color={theme.colors.iconColor}/>
          <Text style={styles.sectionTitle}>Tenants</Text>
          </View>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='bank' size={30} color={theme.colors.iconColor} />
          <Text style={styles.sectionTitle}>Payments</Text>
          </View>
          <View style={{alignItems:"center"}}>
          <MaterialCommunityIcons name='bank-minus' size={30} color={theme.colors.iconColor} />
          <Text style={styles.sectionTitle}>Expenses</Text>
          </View>
          </View>
          </View>
        </View>
      );
 }
