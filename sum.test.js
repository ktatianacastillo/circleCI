const sum = require('./sum');

test ('adds 1 to 2 will be 3', () => {
    expect(sum(1,2)).toBe(3);
});