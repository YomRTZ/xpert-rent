const typography = {
    fontFamily: {
      extraLight: 'SourceSansPro_200ExtraLight',
      light: 'SourceSansPro_300Light',
      regular: 'SourceSansPro_400Regular',
      semiBold: 'SourceSansPro_600SemiBold',
      bold: 'SourceSansPro_700Bold',
      black: 'SourceSansPro_900Black',
    },
    fontWeight:{
      bold:'700',
      semiBold:'600',
      medium:'500',
      regular:'400'
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    title: (theme) => ({
      fontSize: theme.typography.fontSize.xl,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontWeight: theme.typography.fontWeight.bold,
    }),
    header:(theme)=>({
      fontSize: theme.typography.fontSize.md,
      fontWeight: theme.typography.fontWeight.medium,
      marginVertical:5,
      marginHorizontal:10,
      color:theme.colors.heading,
      fontFamily:theme.typography.fontFamily.semiBold
    }),
    sectionTitle:(theme)=>({
      fontFamily: theme.typography.fontFamily.semiBold,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.md,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: 5,
    }),
    viewAll:(theme)=>({
        color: theme.colors.primary,
        fontSize:theme.typography.fontSize.sm,
        marginHorizontal:10
    })
}
export default typography;
