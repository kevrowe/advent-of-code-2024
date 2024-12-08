const search = (target: string[], startX: number, startY: number, a: string[][]): number => {
  let count = 0
  const len = target.length
  const xLen = a[0].length
  const yLen = a.length
  let cursor = 0

  for (let x = startX; x < Math.min(startX + len, xLen); x++) {
    if (a[startY][x] === target[cursor] || a[startY][x] === target[len - cursor - 1]) {
      cursor += 1
    }

    if (cursor === len - 1) {
      console.log('start hor', startX, startY)
      count += 1
      cursor = 0
    }
  }

  cursor = 0

  for (let offset = 0; offset < Math.min(len, xLen, yLen); offset++) {
    const char = a[startY + offset][startX + offset]

    if (char === target[cursor]
      || char === target[len - cursor - 1]) {
      cursor += 1
    }

    if (cursor === len - 1) {
      console.log('start dia', startX, startY)
      count += 1
      cursor = 0
    }
  }

  cursor = 0

  for (let y = startY; y < Math.min(startY + len, yLen); y++) {
    if (a[y][startX] === target[cursor]
      || a[y][startX] === target[len - cursor - 1]) {
      cursor += 1
    }

    if (cursor === len - 1) {
      console.log('start ver', startX, startY)
      count += 1
      cursor = 0
    }
  }

  return count
}

const part1 = (input: string[][]) => {
  let count = 0
  let xLen = input[0].length
  let yLen = input.length
  const searchTerm = 'XMAS'.split('')
  const searchLen = searchTerm.length

  for (let x = 0; x < xLen - searchLen; x++) {
    for (let y = 0; y < yLen - searchLen; y++) {
      count += search(searchTerm, x, y, input)
    }
  }

  return count
}

export { search, part1 }