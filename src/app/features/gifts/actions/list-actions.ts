import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';
const currentId = 0;

export const loadHolidayData = createAction(
  '[holiday] loading holiday data'
);

export const loadHolidayDataSucceeded = createAction(
  '[holiday] loading holiday data succeeded',
  props<{ payload: ListEntity[] }>()
);

export const toggleGiftCompleted = createAction(
  '[holiday] toggle gift completed',
  props<{ payload: ListEntity }>()
);

export const toggleCardCompleted = createAction(
  '[holiday] toggle card completed',
  props<{ payload: ListEntity }>()
);
