export interface HolidayListItem {
  id: string;
  name: string;
  holiday: string;
  date: Date;
  giftNeeded: boolean;
  cardNeeded: boolean;
  giftCompleted: boolean;
  cardCompleted: boolean;
}
