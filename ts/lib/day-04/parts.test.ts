import { search, part1, searchX, part2 } from "./parts"

describe("search", () => {
  it("should find 1 horizontal forwards instance", () => {
    const input = `XMAS
SAMX`
      .split("\n")
      .map((r) => r.split(""))

    expect(search("XMAS".split(""), 0, 0, input)).toBe(1)
  })
  it("should find 1 diagonal forwards instance", () => {
    const input = `X...
.M..
..A.
...S`
      .split("\n")
      .map((r) => r.split(""))

    expect(search("XMAS".split(""), 0, 0, input)).toBe(1)
  })

  it("should find overlapping results", () => {
    const input = `....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX`
      .split("\n")
      .map((r) => r.split(""))

    expect(search("XMAS".split(""), 5, 0, input)).toBe(1)
    expect(search("XMAS".split(""), 0, 4, input)).toBe(1)
    expect(search("XMAS".split(""), 3, 9, input)).toBe(2)
  })
})

describe("part1", () => {
  it("given example no noise", () => {
    // const input = `....XXMAS.
    // .SAMXMS...
    // ...S..A...
    // ..A.A.MS.X
    // XMASAMX.MM
    // X.....XA.A
    // S.S.S.S.SS
    // .A.A.A.A.A
    // ..M.M.M.MM
    // .X.X.XMASX`
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`
      .split("\n")
      .map((r) => r.split(""))

    expect(part1(input)).toBe(18)
  })
})

describe('searchX', () => {
  it('should find 1 instance', () => {
    const input = `M.M
.A.
S.S`.split('\n').map(r => r.split(''))

    expect(searchX('MAS'.split(''), 1, 1, input)).toBe(1)
  })
})
describe('part2', () => {
  it('should find 1 instance', () => {
    const input = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`.split('\n').map(r => r.split(''))

    expect(part2(input)).toBe(9)
  })
  it('should find 1 instance', () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`.split('\n').map(r => r.split(''))

    expect(part2(input)).toBe(9)
  })
});