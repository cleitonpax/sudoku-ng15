import { AfterContentInit, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { GameService } from '@services/game.service';
import { fadeInOut } from 'src/app/utils/fade-in-out.animation';
import { iBox } from '@models/interfaces/i-box.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    fadeInOut,
    trigger('stagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(50, [animate('0.1s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class GridComponent implements AfterContentInit {
  grid$: Observable<iBox[]> = of([]);

  constructor(private gameService: GameService) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.gameService.initGame();
      this.grid$ = this.gameService.getGrid();
    }, 1000);
  }
}
