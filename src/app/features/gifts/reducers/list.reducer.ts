import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list-actions';

export interface ListEntity {
  id: string;
  title: string;
  date: Date;
  giftNeeded: boolean;
  cardNeeded: boolean;
  giftCompleted: boolean;
  cardCompleted: boolean;
}

export interface HolidayState extends EntityState<ListEntity> { }

export const adapter = createEntityAdapter<ListEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadHolidayDataSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.toggleGiftCompleted, (s, a) =>
    adapter.updateOne({ id: a.payload.id, changes: { giftCompleted: !a.payload.giftCompleted } }, s)),
  on(actions.toggleCardCompleted, (s, a) =>
    adapter.updateOne({ id: a.payload.id, changes: { cardCompleted: !a.payload.cardCompleted } }, s))
);

export function reducer(state: HolidayState = initialState, action: Action): HolidayState {
  return reducerFunction(state, action);
}
