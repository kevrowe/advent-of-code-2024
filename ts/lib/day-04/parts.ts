const calc = (
  target: string[],
  x: number,
  y: number,
  offset: number,
  a: string[][]
): number => {
  if (x >= a[0].length || y >= a.length) {
    return 0
  }

  if (a[y][x] === target[offset]) {
    return 1
  }

  return 0
}

const search = (
  target: string[],
  startX: number,
  startY: number,
  a: string[][]
): number => {
  const len = target.length
  let result = [1, 1, 1, 1]

  for (let offset = 0; offset < len; offset++) {
    // VER
    result[0] = calc(target, startX + offset, startY, offset, a)

    // HOR
    result[1] = calc(target, startX, startY + offset, offset, a)

    // DIA
    result[2] = calc(target, startX + offset, startY + offset, offset, a)
    result[3] = calc(target, startX - offset, startY + offset, offset, a)
  }

  return result.filter((e) => e).length
}

const part1 = (input: string[][]) => {
  let count = 0
  let xLen = input[0].length
  let yLen = input.length
  const searchTerm = "XMAS".split("")
  const searchTermReverse = searchTerm.slice(0).reverse()
  const searchLen = searchTerm.length

  for (let x = 0; x < xLen - searchLen; x++) {
    for (let y = 0; y < yLen - searchLen; y++) {
      count += search(searchTerm, x, y, input)
      count += search(searchTermReverse, x, y, input)
    }
  }

  return count
}

export { search, part1 }
