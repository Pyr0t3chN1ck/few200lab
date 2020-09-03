import { Actions, ofType, createEffect, } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/list-actions';
import { environment } from '../../../../environments/environment'; // ALWAYS IMPORT THIS ONE! ANGULAR WILL FIGURE IT OUT!
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';
import { of } from 'rxjs';

const holidays: ListEntity[] = [
  {
    id: '1',
    title: 'Sue Jones Celebrates Birthday',
    date: new Date(2020, 8, 13),
    giftNeeded: false,
    cardNeeded: true,
    giftCompleted: false,
    cardCompleted: true,
  },
  {
    id: '2',
    title: 'Bob Smith Celebrates Christmas',
    date: new Date(2020, 11, 25),
    giftNeeded: true,
    cardNeeded: true,
    giftCompleted: false,
    cardCompleted: false,
  },
  {
    id: '3',
    title: 'Jeff Gonzalez Celebrates Birthday',
    date: new Date(2020, 3, 20),
    giftNeeded: false,
    cardNeeded: true,
    giftCompleted: false,
    cardCompleted: true,
  }
];

@Injectable()
export class ListEffects {
  constructor(private actions$: Actions) { }

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadHolidayData),
      map(() => actions.loadHolidayDataSucceeded({ payload: holidays }))
    )
  );
}
