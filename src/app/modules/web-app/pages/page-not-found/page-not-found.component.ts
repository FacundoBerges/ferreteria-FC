import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  private _timeout?: ReturnType<typeof setTimeout>;
  private _interval?: ReturnType<typeof setInterval>;
  public secondsLeft = 5;

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this._timeout = setTimeout(() => {
      this._router.navigate(['/']);
    }, 5000);

    this._interval = setInterval(() => {
      this.secondsLeft -= 1;
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (this._timeout) clearTimeout(this._timeout);
    if (this._interval) clearInterval(this._interval);
  }
}
