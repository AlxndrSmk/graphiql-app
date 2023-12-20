import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email (e.g., user@example.com)')
    .matches(/^.+@.+\..+$/, 'Email address must contain a domain name'),
  password: Yup.string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .test(
      'digit',
      'Must include at least one digit (0-9)',
      (value) => value !== undefined && /[0-9]/.test(value)
    )
    .test(
      'letter',
      'Must include at least one letter',
      (value) => value !== undefined && /[a-zA-Z]/.test(value)
    )
    .test(
      'specialCharacters',
      'Must include at least one special character (!@#$%^&*)',
      (value) => value !== undefined && /[!@#$%^&*]/.test(value)
    )
    .required('Password is required'),
});
