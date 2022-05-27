import { reverseString } from './reverseStr';

describe('test for reverseString function', () => {
    const firstStr = "Hello!";
    const revFirstStr = "!olleH";
    const secondStr = "Hello, workld!";
    const revSecondStr = "!dlkrow ,olleH";

    it ('should return reversed "Hello!" and "Hello, world!"', () => {
        expect(reverseString(firstStr)).toBe(`The result is ${revFirstStr}`);
        expect(reverseString(secondStr)).toBe(`The result is ${revSecondStr}`)
    });
})