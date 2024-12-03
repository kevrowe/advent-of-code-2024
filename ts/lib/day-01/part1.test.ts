import { part1 } from './part1';

describe('part1', () => {
  it('returns sorted value difference', () => {
    expect(part1([1, 2], [2, 3])).toBe(2);
  });
  it('given example', () => {
    const a = [3, 4, 2, 1, 3, 3]
    const b = [4, 3, 5, 3, 9, 3]
    expect(part1(a, b)).toBe(11);
  });
})