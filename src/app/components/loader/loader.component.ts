import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('stagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(50, [animate('0.2s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger(50, [animate('0.1s', style({ opacity: 0 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class LoaderComponent {
  grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
