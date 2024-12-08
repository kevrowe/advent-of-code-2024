import { search, part1 } from './parts';

describe('search', () => {
  it('should find 1 horizontal forwards instance', () => {
    const input = `XMAS
SAMX`.split('\n').map(r => r.split(''))

    expect(search('XMAS'.split(''), 0, 0, input)).toBe(1)
  })
  it('should find 1 horizontal backwards instance', () => {
    const input = `XMAS
SAMX`.split('\n').map(r => r.split(''))

    expect(search('XMAS'.split(''), 0, 1, input)).toBe(1)
  })
  it('should find 1 diagonal forwards instance', () => {
    const input = `X...
.M..
..A.
...S`.split('\n').map(r => r.split(''))

    expect(search('XMAS'.split(''), 0, 0, input)).toBe(1)
  })
})

describe('part1', () => {
  it.only('given example no noise', () => {
    const input = `....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX`.split('\n').map(r => r.split(''))

    expect(part1(input)).toBe(18)
  })
})