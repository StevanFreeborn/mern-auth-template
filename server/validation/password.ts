export function isValidPassword(password: string) {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return passwordRegex.test(password);
}

export const invalidPasswordMessage =
  'password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long';
