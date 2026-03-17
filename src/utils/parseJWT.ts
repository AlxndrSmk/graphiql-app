import { ParsedToken } from 'firebase/auth';

export const parseJWT = (token: string): ParsedToken => {
  const base64Url: string = token.split('.')[1];
  const base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload: string = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};
