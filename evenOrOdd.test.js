const evenOrOdd = require('./evenOrOdd');

test ('number even', () => {
    expect(evenOrOdd(4)).toBe(true);
});

test ('number odd', () => {
    expect(evenOrOdd(5)).toBe(false);
});