import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardSummary } from '../../models';
import { HolidayState } from '../../reducers/list.reducer';
import { Store, select } from '@ngrx/store';
import { selectDashboardModel } from '../../reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  model$: Observable<DashboardSummary>;

  constructor(private store: Store<HolidayState>) { }

  ngOnInit(): void {
    this.model$ = this.store.pipe(
      select(selectDashboardModel)
    );
  }

}
