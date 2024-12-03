import { readFileSync } from 'fs';
import { part1 } from './part1';
import { part2 } from './part2';

const input = readFileSync('./data/day-01.txt', 'utf8');
const a: number[] = [], b: number[] = [];

input.split('\n').forEach((line) => {
  const [x, y] = line.split(/\s\s\s/).map(Number);
  a.push(x);
  b.push(y);
})

console.log('Part 1 result is:')
console.log(part1(a, b));

console.log('Part 2 result is:')
console.log(part2(a, b));