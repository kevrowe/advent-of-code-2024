import { readFileSync } from "fs"
import { part1, part2 } from "./parts"

const input = readFileSync("./data/day-04.txt", "utf-8")
  .split("\n")
  .map((l) => l.split(""))

console.log("Part 1 result is: ")
console.log(part1(input))

console.log("Part 2 result is: ")
console.log(part2(input))
