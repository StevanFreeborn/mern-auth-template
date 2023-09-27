import { expect } from 'chai';
import {
  invalidPasswordMessage,
  isValidPassword,
} from '../../validation/password.js';

describe('Password', function () {
  describe('isValidPassword', function () {
    it('should return false if password is less then 8 characters', function () {
      expect(isValidPassword('aA1!')).to.be.false;
    });

    it('should return false if password does not contain an uppercase letter', function () {
      expect(isValidPassword('a1!aaaaaaaa')).to.be.false;
    });

    it('should return false if password does not contain a lowercase letter', function () {
      expect(isValidPassword('A1!AAAAAAAA')).to.be.false;
    });

    it('should return false if password does not contain a number', function () {
      expect(isValidPassword('aA!aaaaaaaa')).to.be.false;
    });

    it('should return false if password does not contain a special character', function () {
      expect(isValidPassword('aA1aaaaaaaa')).to.be.false;
    });
  });

  describe('invalidPasswordMessage', function () {
    it('should return expected message', function () {
      expect(invalidPasswordMessage).to.equal(
        'password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'
      );
    });
  });
});
