import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HolidayState } from '../../reducers/list.reducer';
import * as actions from '../../actions/list-actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<HolidayState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      holiday: ['', [Validators.required]],
      date: ['', [Validators.required]],
      cardNeeded: [false],
      giftNeeded: [false]
    });
  }

  get name(): AbstractControl { return this.form.get('name'); }
  get holiday(): AbstractControl { return this.form.get('holiday'); }
  get date(): AbstractControl { return this.form.get('date'); }
  get cardNeeded(): AbstractControl { return this.form.get('cardNeeded'); }
  get giftNeeded(): AbstractControl { return this.form.get('giftNeeded'); }

  submit(): void {
    // this.store.dispatch(actions.addedHolidayItem(this.form.value));
    this.form.reset();
  }
}
