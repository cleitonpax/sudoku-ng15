export function filterBoxList(list: number[], start: number, boxRows: number): number[] {
  return [...list].filter(
    (number, index) => index >= start && index < start + boxRows
  );
}