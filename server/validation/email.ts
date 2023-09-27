import * as emailValidator from 'email-validator';

export function isValidateEmail(email: string) {
  return emailValidator.validate(email);
}

export const invalidEmailMessage = 'email must be a valid email address';
