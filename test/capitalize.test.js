const capitalize = require('../tasks/capitalize'); // Adjust the path as needed

describe('capitalize function', () => {
    test('should capitalize the first character of a string', () => {
        const input = 'hello';
        const result = capitalize(input);
        expect(result).toBe('Hello');
    });

    test('should capitalize the first character of an empty string', () => {
        const input = '';
        const result = capitalize(input);
        expect(result).toBe('');
    });

    test('should return an empty string for non-string input', () => {
        const input = 123;
        const result = capitalize(input);
        expect(result).toBe('');
    });
});
