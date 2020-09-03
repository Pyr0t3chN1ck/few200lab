import { Component, OnInit } from '@angular/core';
import { HolidayState } from '../../reducers/list.reducer';
import { Store, select } from '@ngrx/store';
import { HolidayListItem } from '../../models';
import { Observable } from 'rxjs';
import { selectPastHolidayList } from '../../reducers';

@Component({
  selector: 'app-past-holidays',
  templateUrl: './past-holidays.component.html',
  styleUrls: ['./past-holidays.component.scss']
})
export class PastHolidaysComponent implements OnInit {
  items$: Observable<HolidayListItem[]>;

  constructor(private store: Store<HolidayState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectPastHolidayList)
    );
  }

}
