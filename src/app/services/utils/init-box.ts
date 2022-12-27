import { iBox } from "@models/interfaces/i-box.interface";
import { iGridProps } from "@models/interfaces/i-grid-props.interface";
import { initCel } from "./init-cell";

export function initBox(box: number, gridProps: iGridProps): iBox {
  // List of cels for each box
  const cels = [];

  // Loop for each cel...
  for (let cel = 1; cel < gridProps.boxCols * gridProps.boxRows + 1; cel++) {
    const boxRow = Math.floor((box - 1) / gridProps.gridBoxesCols);
    const boxCol = (box - 1) % gridProps.gridBoxesCols;
    const row =
      Math.floor((cel - 1) / gridProps.boxCols) + boxRow * gridProps.boxRows;
    const col = ((cel - 1) % gridProps.boxCols) + boxCol * gridProps.boxCols;
    const value = gridProps.solution[row][col];
    const newCel = initCel(box, cel, value, gridProps.filterId);
    cels.push(newCel);
  }

  return {
    id: box,
    cels: cels,
  };
}
