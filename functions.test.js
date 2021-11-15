const functionsJS = require('./functions')
const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply, 
} = require('./functions')

test('function is returning the integer 2', () => {
    expect(returnTwo()).toBe(2);
});

test('function is returning the correct', () => {
    expect(greeting('James')).toBe('Hello, James');
});

test('function is adding values correctly', () => {
    expect(add(5,5)).toBe(10);
});

test('function is subtracting values correctly', () => {
    expect(subtract(10,5)).toBe(5);
});

test('function is multiplying values correctly', () => {
    expect(multiply(5,5)).toBe(25);
});

