import { BehaviorSubject, Observable } from 'rxjs';

import { ErrorsService } from './errors.service';
import { GameStatus } from '@models/enums/game-status.enum';
import { Injectable } from '@angular/core';
import { getCurrentBoxNumbers } from './utils/get-current-box-numbers';
import { getCurrentColumnNumbers } from './utils/get-current-column-numbers';
import { getCurrentRowNumbers } from './utils/get-current-row-numbers';
import { getFilterRandomNumber } from './utils/get-filter-random-number';
import { getRandomArray } from './utils/get-random-array';
import { iBox } from '@models/interfaces/i-box.interface';
import { iGridProps } from '@models/interfaces/i-grid-props.interface';
import { initBox } from './utils/init-box';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private boxCols = 3;
  private boxRows = 3;
  private filterId = getFilterRandomNumber();
  private grid: iBox[] = [];
  private gridBoxesCols = 3;
  private gridBoxesRows = 3;
  private solution: number[][] = [];
  private status$ = new BehaviorSubject<GameStatus>(GameStatus.init);
  private grid$ = new BehaviorSubject<iBox[]>(this.grid);
  
  constructor(
    private errorsService: ErrorsService,
  ) { }

  gameOver(): void {
    this.status$.next(GameStatus.over);
  }

  getGrid(): Observable<iBox[]> {
    return this.grid$.asObservable();
  }

  getStatus(): Observable<GameStatus> {
    return this.status$.asObservable();
  }

  initGame(): void {
    this.errorsService.newGame();
    this.status$.next(GameStatus.init);
   
    new Promise((resolve) => {
      let isValid = false;

      for (let i = 0; i < 20000; i++) {
        this.populateGrid(i);
        isValid = this.validateGrid();

        if (isValid) {
          console.log('sucesso ', i, this.solution, this.grid);
          this.initBoard();
          break;
        }
      }
      
      if (!isValid) {
        console.log('erro ', this.solution);
      }

      this.grid$.next(this.grid);
      this.status$.next(GameStatus.playing);

      resolve(this.grid);
    })
  }

  restartGame(): void {
    this.status$.next(GameStatus.init);
    this.grid$.next([]);
    this.errorsService.newGame();

    setTimeout(() => {
      this.initGame();
    }
    , 1000);
  }

  validateSolution(): void {
    if (this.validateGame()) {
      this.status$.next(GameStatus.win);
    }
  }

  private initBoard() {
    this.grid = [];
    // Loop for each box...
    for (let box = 1; box < this.gridBoxesCols * this.gridBoxesRows + 1; box++) {
      const gridProps: iGridProps = {
        filterId: this.filterId,
        boxCols: this.boxCols,
        boxRows: this.boxRows,
        gridBoxesCols: this.gridBoxesCols,
        gridBoxesRows: this.gridBoxesRows,
        solution: this.solution,
      };
      const newBox = initBox(box, gridProps);
      this.grid.push(newBox);
    }
  }

  private populateGrid(iteration: number): void {
    this.solution = [];

    for (var row = 0; row < this.gridBoxesRows * this.boxRows; row++) {
      this.solution.push([]);

      let randomList = getRandomArray();
      const rowList = this.solution[row];
      const gridProps: iGridProps = {
        filterId: this.filterId,
        boxCols: this.boxCols,
        boxRows: this.boxRows,
        gridBoxesCols: this.gridBoxesCols,
        gridBoxesRows: this.gridBoxesRows,
        solution: this.solution,
      };

      // loop for columns
      for (var col = 0; col < this.gridBoxesCols * this.boxCols; col++) {
        // condition only for the ROW 0, the numbers are random
        if (row === 0) {
          const randomNumber = randomList.pop();
          rowList.push(randomNumber!);
        } else {
          // condition for all the ROWS FROM 1 TO 8
          // get the number from the previous row
          const currentRowNumbers = getCurrentRowNumbers(row, this.solution);
          // get the number from the previous column
          const currentColumnNumbers = getCurrentColumnNumbers(col, this.solution);
          // get the number from the previous box
          const currentBoxNumbers = getCurrentBoxNumbers(row, col, gridProps);
          const currentNumbers = [
            ...currentRowNumbers,
            ...currentColumnNumbers,
            ...currentBoxNumbers,
          ];
          const takenNumbers = new Set(currentNumbers);
          const availableNumbers = randomList.filter(
            (number: number) => !takenNumbers.has(number)
          );
          const randomNumber = availableNumbers.pop();
          randomList = randomList.filter((number: number) => number !== randomNumber);
          rowList.push(randomNumber!);
          console.log('test ', iteration, this.solution);
        }
      }
    }
  }

  private validateGame(): boolean {
    const boxes = [];

    for (var i = 0; i < this.gridBoxesRows * this.boxRows; i++) {
      var box = this.grid[i];
      boxes.push(!box.cels.some((cel) => cel.isEditable));
    }

    return !boxes.some(box => box === false);
  }

  private validateGrid(): boolean {
    for (var i = 0; i < this.gridBoxesRows * this.boxRows; i++) {
      var row = this.solution[i];
      var rowSet = new Set(row);
      // @ts-ignore
      if (rowSet.has(undefined)) {
        return false;
      }
    }
    return true;
  }
  
}
