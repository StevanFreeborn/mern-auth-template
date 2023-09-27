import { expect } from 'chai';
import { invalidEmailMessage, isValidEmail } from '../../validation/email.js';

describe('Email', function () {
  describe('isValidEmail', function () {
    it('should return false if email is not valid', function () {
      expect(isValidEmail('test')).to.be.false;
    });

    it('should return true if email is valid', function () {
      expect(isValidEmail('test@test.com')).to.be.true;
    });
  });

  describe('invalidEmailMessage', function () {
    it('should return expected message', function () {
      expect(invalidEmailMessage).to.equal(
        'email must be a valid email address'
      );
    });
  });
});
