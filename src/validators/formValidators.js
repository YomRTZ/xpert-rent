export const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const re = /\S+@\S+\.\S+/;
    return re.test(email) ? null : 'Email is invalid';
  };
  
  export const validatePassword = (password) => {
    if (!password) return 'Password is required';
    return password.length >= 6 ? null : 'Password must be at least 6 characters';
  };
  