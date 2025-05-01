 const shadows = {
    flat: {
     elevation: 0,
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      useCase: "Flat elements",
    },
    low: {
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 2,
      useCase: "Buttons, chips",
    },
    medium: {
      elevation: 4, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      useCase: "Cards",
    },
    high: {
      elevation: 8, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      useCase: "Dialogs, modals",
    },
    floating: {
      elevation: 12, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      useCase: "Floating elements",
    },
  };
  
  export default shadows;
  
  