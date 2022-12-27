import { Observable, map } from 'rxjs';

import { Component } from '@angular/core';
import { GameService } from '@services/game.service';
import { GameStatus } from '@models/enums/game-status.enum';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent {
  status$: Observable<GameStatus>;
  isGameOver$: Observable<boolean>;
  isGameSolved$: Observable<boolean>;

  constructor(
    private gameService: GameService,
  ) { 
    this.status$ = this.gameService.getStatus();
    this.isGameOver$ = this.status$.pipe(
      map((status) => status === GameStatus.over),
    );
    this.isGameSolved$ = this.status$.pipe(
      map((status) => status === GameStatus.win),
    );
  }
}
