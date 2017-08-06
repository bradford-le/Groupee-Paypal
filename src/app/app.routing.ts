import {ActivityListComponent} from './components/activity-list/activity-list.component';
import {ActivityComponent} from './components/activity/activity.component';
import {HomeComponent} from './components/home/home.component';
import {AddActivityComponent} from './components/add-activity/add-activity.component';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';

import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'activity',component: ActivityListComponent},
  {path: 'activity/new',component: AddActivityComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent}
];
