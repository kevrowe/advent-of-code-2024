const part1 = (a1: number[], a2: number[]) => {
  const a1s = a1.sort()
  const a2s = a2.sort()

  return a1s.reduce((acc, val, i) => {
    const max = Math.max(val, a2s[i])
    const min = Math.min(val, a2s[i])
    acc += max - min
    return acc
  }, 0)
}

export { part1 }