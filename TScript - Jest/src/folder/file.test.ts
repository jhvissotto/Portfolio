import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, fdescribe, fit, it, jest, test, xdescribe, xit, xtest } from '@jest/globals'
import { file } from '.'


describe('describe_file', () => {
    test('test_func', () => {
        expect(file.func()).toBe('text')
    })
})