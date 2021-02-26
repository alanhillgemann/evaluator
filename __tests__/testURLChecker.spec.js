import {validateURL} from '../src/client/js/urlChecker'

describe('validateURL', () => {
    test('Is defined', () => {
        expect(validateURL).toBeDefined()
    })
    test('Is a function', () => {
        expect(typeof validateURL).toBe('function')
    })
    test('Valid URL returns true', () => {
        expect(validateURL('http://test.com')).toBeTruthy()
    })
    test('Invalid URL returns false', () => {
        expect(validateURL('test.com')).toBeFalsy()
    })
    test('https URL returns false', () => {
        expect(validateURL('https://test.com')).toBeFalsy()
    })
})
