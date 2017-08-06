import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities;

  constructor(private activityApi: ActivityService) { }

  ngOnInit() {
    this.activityApi.getActivity()
      .subscribe((activities)=>{
        this.activities = activities;
      })
  }

}
