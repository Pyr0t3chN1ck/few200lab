import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './gifts.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpcomingHolidaysComponent } from './components/upcoming-holidays/upcoming-holidays.component';
import { CreateComponent } from './components/create/create.component';
import { PastHolidaysComponent } from './components/past-holidays/past-holidays.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, featureName } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HolidayAppEffects } from './effects/app.effects';
import { ListEffects } from './effects/list.effects';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'gifts',
    component: GiftsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'holidays',
        component: UpcomingHolidaysComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'past',
        component: PastHolidaysComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    GiftsComponent,
    DashboardComponent,
    UpcomingHolidaysComponent,
    CreateComponent,
    PastHolidaysComponent,
    ItemListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([HolidayAppEffects, ListEffects]),
    ReactiveFormsModule,
  ]
})
export class GiftsModule { }
