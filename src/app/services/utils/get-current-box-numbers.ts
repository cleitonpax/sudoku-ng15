import { filterBoxList } from "./filter-box-list";
import { getCurrentColumnNumbers } from "./get-current-column-numbers";
import { getCurrentRowNumbers } from "./get-current-row-numbers";
import { iGridProps } from "src/app/models/interfaces/i-grid-props.interface";

export function getCurrentBoxNumbers(
  rowNumber: number,
  columnNumber: number,
  gridProps: iGridProps
): number[] {
  var rowOffset = Math.floor(rowNumber / gridProps.boxRows);
  var colOffset = Math.floor(columnNumber / gridProps.boxCols); // offset from box to box in the grid
  var boxNumber = rowOffset * gridProps.gridBoxesCols + colOffset;
  var columnOne = (boxNumber % gridProps.gridBoxesCols) * gridProps.boxCols;
  var rowOne = Math.floor(boxNumber / gridProps.gridBoxesCols) * gridProps.boxCols;
  var boxColumnNumbers = [];
  var boxRowNumbers = [];

  for (var i = 0; i < gridProps.boxCols; i++) {
    var currentCol = getCurrentColumnNumbers(columnOne + i, gridProps.solution);
    boxColumnNumbers.push(...filterBoxList(currentCol, rowOne, gridProps.boxRows));
  }

  for (var i = 0; i < gridProps.boxRows; i++) {
    var currentRow = getCurrentRowNumbers(rowOne + i, gridProps.solution);
    boxRowNumbers.push(...filterBoxList(currentRow, columnOne, gridProps.boxRows));
  }

  return [...boxColumnNumbers, ...boxRowNumbers];
}