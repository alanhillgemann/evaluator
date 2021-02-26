import {handleSubmit} from '../src/client/js/formHandler'

describe('handleSubmit', () => {
    test('Is defined', () => {
        expect(handleSubmit).toBeDefined()
    })
    test('Is a function', () => {
        expect(typeof handleSubmit).toBe('function')
    })
})
