import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HomeComponent } from './components/home/home.component';

import {routes} from './app.routing';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { ActivityService } from './services/activity.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityComponent,
    HomeComponent,
    AddActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
