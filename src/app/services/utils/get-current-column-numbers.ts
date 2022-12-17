export function getCurrentColumnNumbers(columnNumber: number, solution: number[][]): number[] {
  const column: number[] = [];
  for (var row = 0; row < solution.length; row++) {
    var currentColumn = solution[row][columnNumber];

    if (currentColumn) {
      column.push(currentColumn);
    }
  }
  return column;
}