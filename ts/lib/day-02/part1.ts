const safeStep = (a: number, b: number) => {
  return a - b <= 3 && a - b > 0
}

const part1 = (reports: number[][], dampen = false) => {
  let safe = 0

  for (let report of reports) {
    const increasing = report[0] < report[1]
    let reportSafe = true
    let dampened = !dampen

    for (let i = 0; i < report.length - 1; i++) {
      if ((increasing && !safeStep(report[i + 1], report[i]))
        || (!increasing && !safeStep(report[i], report[i + 1]))
      ) {
        if (dampened) {
          reportSafe = false
        } else {
          dampened = true
        }
      }
    }

    if (reportSafe) {
      safe++
    }
  }

  return safe
}

export { part1 }