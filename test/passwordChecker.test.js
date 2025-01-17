const { passwordChecker } = require("../src/passwordChecker");

describe("Password Checker in JavaScript", () => {

    test('It should require minimum 8 characters', () => {
        expect(passwordChecker('abced12')).toBe(false);
        expect(passwordChecker('2')).toBe(false);
        expect(passwordChecker('')).toBe(false);
        expect(passwordChecker('Abcde@..123')).toBe(true);
        expect(passwordChecker('a@12')).toBe(false);
    });

    test('It should contain minimum 1 special character', () => {
        expect(passwordChecker('Abcde1234758')).toBe(false);
        expect(passwordChecker('Abcde@1234758')).toBe(true);
    });

    test('It should contain minimum 1 number', () => {
        expect(passwordChecker('Abcde@eyh')).toBe(false);
        expect(passwordChecker('Abcde@1234758')).toBe(true);
    });

    test('It should not contain IPL in any case', () => {
        expect(passwordChecker('Abcde@ipleyh')).toBe(false);
        expect(passwordChecker('AbcIplde@1234758')).toBe(false);
        expect(passwordChecker('IpL123@ehn')).toBe(false);
        expect(passwordChecker('Abcplde@1234758')).toBe(true);
    });

    test('It should validate long and correct password', () => {
        expect(passwordChecker('Abcde@ipleyh1523testNOtIxPxL')).toBe(false);
        expect(passwordChecker('Abcde@1523testNOtIxPxL')).toBe(true);
    });

});