import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as holidayActions from '../actions/list-actions';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class HolidayAppEffects {
  constructor(private actions$: Actions) { }

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => holidayActions.loadHolidayData())
    )
  );
}
