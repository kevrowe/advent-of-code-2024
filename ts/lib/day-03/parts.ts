const part1 = (input: string) => {
  const pattern = /(mul\((\d+),(\d+)\))/g
  let match = pattern.exec(input)
  let total = 0

  while (match) {
    const [, , a, b] = match

    total += parseInt(a) * parseInt(b)

    match = pattern.exec(input)
  }

  return total
}

const part2 = (input: string) => {
  const pattern = /(mul\((\d+),(\d+)\))/g
  const switches = /(do\(\))|(don\'t\(\))/g

  let switchMatch = switches.exec(input)
  let patternMatch = pattern.exec(input)
  let execute = true
  let result = 0

  while (patternMatch) {
    if (switchMatch && patternMatch.index > switchMatch?.index) {
      execute = switchMatch?.[2] === undefined
      switchMatch = switches.exec(input)
    }

    if (execute) {
      const [, , a, b] = patternMatch
      result += parseInt(a) * parseInt(b)
    }

    patternMatch = pattern.exec(input)
  }

  return result
}

export { part1, part2 }