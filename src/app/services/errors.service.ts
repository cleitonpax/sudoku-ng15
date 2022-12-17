import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private errors = 0;
  private errors$ = new BehaviorSubject<number>(this.errors);

  constructor(
  ) { }

  newGame(): void {
    this.errors = 0;
    this.errors$.next(this.errors);
  }

  getErrors(): Observable<number> {
    return this.errors$.asObservable();
  }

  addError(): void {
    this.errors$.next(++this.errors);
  }
}
