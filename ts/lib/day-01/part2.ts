const part2 = (a: number[], b: number[]) => {
  const map: { [k: number]: number } = {}

  for (let i = 0; i < b.length; i++) {
    map[b[i]] = (map[b[i]] || 0) + 1
  }

  let similaritySum = 0

  for (let i = 0; i < a.length; i++) {
    similaritySum += a[i] * (map[a[i]] || 0)
  }

  return similaritySum
}

export { part2 }