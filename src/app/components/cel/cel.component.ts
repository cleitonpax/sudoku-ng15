import { Component, Input } from '@angular/core';

import { ErrorsService } from '@services/errors.service';
import { GameService } from '@services/game.service';
import { iCel } from '@models/interfaces/i-cel.interface';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.scss']
})
export class CelComponent {
  @Input() cel: iCel = {
    value: 0,
    id: 0,
    isEditable: false,
    isSelected: false,
    placeholder: null,
  };
  inputValue = 0;

  get isEditable(): boolean {
    return this.cel.isEditable;
  }

  get styles(): string {
    const isSolved = this.cel.placeholder === this.cel.value && this.cel.placeholder !== null
      ? ' solved '
      : null;
    const isError = this.cel.placeholder !== null && this.cel.placeholder !== this.cel.value
      ? ' error '
      : null;
    const isSelected = this.cel?.isSelected
      ? ' active '
      : null;

    return isSolved || isError || isSelected || '';
  }

  constructor(
    private errorsService: ErrorsService,
    private gameService: GameService,
  ) { }

  click() {
    this.cel.isSelected = !this.cel.isSelected;
  }

  unselectCel() {
    this.cel.isSelected = false;
  } 

  chooseNumber(value: number) {
    if (this.cel.value === value) {
      this.cel.isEditable = false;
      this.gameService.validateSolution();
    } else {
      this.errorsService.addError();
    }
    
    this.cel.placeholder = value;
  }
}
