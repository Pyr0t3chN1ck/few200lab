import { Actions, ofType, createEffect, } from '@ngrx/effects';
import * as actions from '../actions/list-actions';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';
import { of } from 'rxjs';

const holidays: ListEntity[] = [
  {
    id: '1',
    name: 'Sue Jones',
    holiday: 'Birthday',
    date: new Date(2020, 8, 13),
    giftNeeded: false,
    cardNeeded: true,
    giftCompleted: false,
    cardCompleted: true,
  },
  {
    id: '2',
    name: 'Bob Smith',
    holiday: 'Christmas',
    date: new Date(2020, 11, 25),
    giftNeeded: true,
    cardNeeded: true,
    giftCompleted: false,
    cardCompleted: false,
  },
  {
    id: '3',
    name: 'Jeff Gonzalez',
    holiday: 'Birthday',
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
