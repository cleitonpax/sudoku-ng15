import { BehaviorSubject, Observable } from 'rxjs';

import { ErrorsService } from './errors.service';
import { GameStatus } from '@models/enums/game-status.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getFilterRandomNumber } from './utils/get-filter-random-number';
import { iBox } from '@models/interfaces/i-box.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private boxRows = 3;
  private filterId = getFilterRandomNumber();
  private grid: iBox[] = [];
  private gridBoxesRows = 3;
  private status$ = new BehaviorSubject<GameStatus>(GameStatus.init);
  private grid$ = new BehaviorSubject<iBox[]>(this.grid);
  private api = 'https://294c-2804-7f0-bd82-86aa-b16-7d95-e397-99bc.sa.ngrok.io/sudoku-game';

  constructor(private errorsService: ErrorsService, private http: HttpClient) {}

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

    this.http.get(this.api).subscribe({
      next: (data: any) => {
        this.status$.next(GameStatus.playing);
        this.grid$.next(data);
      },
      error: (error) => {
          alert('Error: ' + error.message)
          this.status$.next(GameStatus.init);
      }
    });
  }

  restartGame(): void {
    this.status$.next(GameStatus.init);
    this.grid$.next([]);
    this.errorsService.newGame();

    setTimeout(() => {
      this.initGame();
    }, 1000);
  }

  validateSolution(): void {
    if (this.validateGame()) {
      this.status$.next(GameStatus.win);
    }
  }

  private validateGame(): boolean {
    const boxes = [];

    for (let i = 0; i < this.gridBoxesRows * this.boxRows; i++) {
      let box = this.grid[i];
      boxes.push(!box.cels.some((cel) => cel.isEditable));
    }

    return !boxes.some((box) => box === false);
  }
}
