import { part2 } from './part2';

describe('part2', () => {
  it('given example', () => {
    const a = [3,
      4,
      2,
      1,
      3,
      3]

    const b = [4,
      3,
      5,
      3,
      9,
      3]

    expect(part2(a, b)).toEqual(31)
  })
})