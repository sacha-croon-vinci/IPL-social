const {passwordChecker} = require("/src/passwordChecker");

describe("Password Checker in javaScript ", () => {

    test('It should require minimum 8 characters'),() => {
        expect(passwordChecker('abced12')).toBe(false);
        expect(passwordChecker('2')).toBe(false);
        expect(passwordChecker('')).toBe(false);
        expect(passwordChecker('Abcde..123')).toBe(true);
        expect(passwordChecker('a@12')).toBe(false);
    }

    test('It should contains minimum 1 special character',() =>{
        expect(passwordChecker('Abcde1234758')).toBe(False)
        expect(passwordChecker('Abcde@1234758')).toBe(True)
    })

    test('It should contains minimum 1 number',() =>{
        expect(passwordChecker('Abcde@eyh')).toBe(False)
        expect(passwordChecker('Abcde@1234758')).toBe(True)
    })

    test('It should not contains IPL in any cases ',() =>{
        expect(passwordChecker('Abcde@ipleyh')).toBe(False)
        expect(passwordChecker('AbcIplde@1234758')).toBe(False)
        expect(passwordChecker('IpL123@ehn')).toBe(False)
        expect(passwordChecker('Abcplde@1234758')).toBe(True)
    })

    test('It should Validate long and correct password ',() =>{
        expect(passwordChecker('Abcde@ipleyh1523testNOtIxPxL')).toBe(True)
        
    })



})