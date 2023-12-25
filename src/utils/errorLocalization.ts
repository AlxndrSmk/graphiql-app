import { LangContext } from '@/types/types';

const errorLocalization = (
  error: string | undefined,
  context: LangContext
): string | null => {
  if (!error) return null;

  switch (error) {
    case 'Email is required':
      return context.getConstants().emailRequired;
    case 'Enter a valid email (e.g., user@example.com)':
      return context.getConstants().emailValid;
    case 'Email address must contain a domain name':
      return context.getConstants().emailDomain;
    case 'Password should be of minimum 8 characters length':
      return context.getConstants().passwordLength;
    case 'Must include at least one digit (0-9)':
      return context.getConstants().passwordDigit;
    case 'Must include at least one letter':
      return context.getConstants().passwordLetter;
    case 'Must include at least one special character (!@#$%^&*)':
      return context.getConstants().passwordCharacters;
    case 'Password is required':
      return context.getConstants().passwordCharacters;
    default:
      return null;
  }
};

export default errorLocalization;
