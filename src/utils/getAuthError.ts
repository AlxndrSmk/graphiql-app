import { CustomError } from '@/types/types';

export const getAuthError = (e: unknown): string => {
  const error = e as CustomError;

  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'The email address is already in use';
    case 'auth/invalid-email':
      return 'The email address is not valid.';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed.';
    case 'auth/user-not-found':
      return 'User not found!';
    case 'auth/wrong-password':
      return 'Wrong username or password!';
    default:
      return error.message;
  }
};
