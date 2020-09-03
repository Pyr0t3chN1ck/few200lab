import * as fromList from './list.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { HolidayListItem } from '../models';
import * as models from '../models';


export const featureName = 'giftFeature';

export interface HolidayState {
  list: fromList.HolidayState;
}

export const reducers: ActionReducerMap<HolidayState> = {
  list: fromList.reducer
};

const selectFeature = createFeatureSelector<HolidayState>(featureName);

const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);


const selectHolidayListUnfiltered = createSelector(
  selectAllListItems,
  h => [...h.sort((lhs: HolidayListItem, rhs: HolidayListItem) => {
    if (lhs.date > rhs.date) { return 1; }
    if (lhs.date < rhs.date) { return -1; }
    return 0;
  })]
);

export const selectCurrentHolidayList = createSelector(
  selectHolidayListUnfiltered,
  (list) => {
    return list.filter(item => item.date >= new Date());
  }
);

export const selectPastHolidayList = createSelector(
  selectHolidayListUnfiltered,
  (list) => {
    return list.filter(item => item.date < new Date());
  }
);

export const selectDashboardModel = createSelector(
  selectCurrentHolidayList,
  h => {
    return {
      numberOfUpcomingHolidays: h.length,
      numberOfCardsNeeded: h.filter(x => x.cardNeeded && !x.cardCompleted).length,
      numberOfGiftsNeeded: h.filter(x => x.giftNeeded && !x.giftCompleted).length,
    } as models.DashboardSummary;
  }
);
