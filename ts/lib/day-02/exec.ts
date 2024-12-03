import { readFileSync } from 'fs';
import { part1 } from './part1';

const input = readFileSync('./data/day-02.txt', 'utf8');

const reports = input.split('\n').map(line => line.split(' ').map(Number))

console.log('Part 1 result is:')
console.log(part1(reports));

console.log('Part 2 result is:')
console.log(part1(reports, true));