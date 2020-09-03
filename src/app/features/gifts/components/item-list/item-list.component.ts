import { Component, OnInit, Input } from '@angular/core';
import { HolidayListItem } from '../../models';
import { Store } from '@ngrx/store';
import { toggleGiftCompleted, toggleCardCompleted } from '../../actions/list-actions';
import { ListEntity } from '../../reducers/list.reducer';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items: HolidayListItem[] = [];

  constructor(private store: Store<HolidayListItem>) { }

  ngOnInit(): void {
  }

  markGift(payload: ListEntity): void {
    this.store.dispatch(toggleGiftCompleted({ payload }));
  }

  markCard(payload: ListEntity): void {
    this.store.dispatch(toggleCardCompleted({ payload }));
  }
}
