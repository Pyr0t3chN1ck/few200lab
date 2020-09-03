import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayListItem } from '../../models';
import { Store, select } from '@ngrx/store';
import { selectCurrentHolidayList, HolidayState } from '../../reducers';

@Component({
  selector: 'app-upcoming-holidays',
  templateUrl: './upcoming-holidays.component.html',
  styleUrls: ['./upcoming-holidays.component.scss']
})
export class UpcomingHolidaysComponent implements OnInit {
  items$: Observable<HolidayListItem[]>;

  constructor(private store: Store<HolidayState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectCurrentHolidayList)
    );
  }

}
