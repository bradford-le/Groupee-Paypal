import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {

  activities;

  constructor(private activityApi: ActivityService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activityApi.getActivity()
      .subscribe((activities)=>{
        this.activities = activities;
      })
  }

}
