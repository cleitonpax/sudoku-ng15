import { Component, Input } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() type: 'over' | 'win' | null = null;

  constructor(private gameService: GameService) {}

  restart() {
    this.gameService.restartGame();
  }
}
