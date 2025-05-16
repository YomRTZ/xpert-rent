//for d/f screensimport { useState } from 'react';

export const useFormValidation = (initialState, validators) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
  
    const handleChange = (key, value) => {
      setValues({ ...values, [key]: value });
      if (validators[key]) {
        const error = validators[key](value);
        setErrors({ ...errors, [key]: error });
      }
    };
  
    const validateAll = () => {
      const newErrors = {};
      Object.keys(validators).forEach((key) => {
        const error = validators[key](values[key]);
        if (error) newErrors[key] = error;
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    return {
      values,
      errors,
      handleChange,
      validateAll,
    };
  };
  