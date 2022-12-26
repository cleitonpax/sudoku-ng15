import { FILTER_BOARDS } from '../../models/consts/filter-boards.const';
import { iCel } from '../../models/interfaces/i-cel.interface';

export function initCel(
  box: number,
  cel: number,
  randomNumber: number,
  filterId: number
): iCel {
  const isEditable = FILTER_BOARDS[filterId][box - 1][cel - 1] === 0;

  return {
    id: cel,
    value: randomNumber,
    placeholder: isEditable ? null : randomNumber,
    isEditable: isEditable,
    isSelected: false,
  };
}
