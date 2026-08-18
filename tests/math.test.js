const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('subtrai 5 - 3 igual a 2', () => {
    expect(math.subtract(5, 3)).toBe(2);
});

test('multiplica 4 * 3 igual a 12', () => {
    expect(math.multiply(4, 3)).toBe(12);
});

test('divide 10 / 2 igual a 5', () => {
    expect(math.divide(10, 2)).toBe(5);
});

test('soma números negativos', () => {
    expect(math.add(-2, -3)).toBe(-5);
});

test('subtrai números negativos', () => {
    expect(math.subtract(-5, -3)).toBe(-2);
});

test('multiplica número negativo', () => {
    expect(math.multiply(-4, 3)).toBe(-12);
});

test('soma com zero', () => {
    expect(math.add(5, 0)).toBe(5);
});
