import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ErrorsService } from 'src/app/services/errors.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy {
  errors$: Observable<number>;
  maxErrors = 4;
  private subscription$: Subscription;

  constructor(
    private errorsService: ErrorsService,
    private gameService: GameService,
  ) { 
    this.errors$ = this.errorsService.getErrors();
    this.subscription$ = this.errors$.subscribe((errors) => {
      if (errors > this.maxErrors) {
        this.gameService.gameOver();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  
}
