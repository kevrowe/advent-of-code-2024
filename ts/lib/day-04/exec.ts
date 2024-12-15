import { readFileSync } from "fs"
import { part1 } from "./parts"

const input = readFileSync("./data/day-04.txt", "utf-8")
  .split("\n")
  .map((l) => l.split(""))

console.log("Part 1 result is: ")
console.log(part1(input))
