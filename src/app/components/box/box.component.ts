import { Component, Input } from '@angular/core';

import { iBox } from '../../models/interfaces/i-box.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() box?: iBox;
}
