import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';
import { fadeInOut } from 'src/app/utils/fade-in-out.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOut,
  ]
})
export class HomeComponent {

}
