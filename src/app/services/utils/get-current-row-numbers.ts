export function getCurrentRowNumbers(rowNumber: number, solution: number[][]): number[] {
  return solution[rowNumber] || [];
}