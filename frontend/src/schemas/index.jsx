import * as Yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;

export const loginSchema = Yup.object({
  email: Yup.string().matches(emailRegex, 'Please enter a valid email address').required('Email is required'),
  
  password: Yup.string().matches(passwordRegex,'Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character').required('Password is required'),
});
