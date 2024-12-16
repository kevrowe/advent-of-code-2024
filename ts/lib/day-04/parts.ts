const calc = (
  target: string[],
  x: number,
  y: number,
  offset: number,
  a: string[][]
): boolean => {
  if (x >= a[0].length || y >= a.length || x < 0 || y < 0) {
    return false
  }

  if (a[y][x] === target[offset]) {
    return true
  }

  return false
}

const search = (
  target: string[],
  startX: number,
  startY: number,
  a: string[][]
): number => {
  const len = target.length
  let result: boolean[] = new Array(8).fill(true)

  for (let offset = 0; offset < len; offset++) {
    // HOR
    result[0] = result[0] && calc(target, startX + offset, startY, offset, a)
    result[1] = result[1] && calc(target, startX - offset, startY, offset, a)

    // VER
    result[2] = result[2] && calc(target, startX, startY + offset, offset, a)
    result[3] = result[3] && calc(target, startX, startY - offset, offset, a)

    // DIA
    result[4] = result[4] && calc(target, startX + offset, startY + offset, offset, a)
    result[5] = result[5] && calc(target, startX - offset, startY + offset, offset, a)
    result[6] = result[6] && calc(target, startX + offset, startY - offset, offset, a)
    result[7] = result[7] && calc(target, startX - offset, startY - offset, offset, a)
  }

  return result.filter((e) => e).length
}

const part1 = (input: string[][]) => {
  let count = 0
  let xLen = input[0].length
  let yLen = input.length
  const searchTerm = "XMAS".split("")

  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      count += search(searchTerm, x, y, input)
    }
  }

  return count
}

export { search, part1 }
