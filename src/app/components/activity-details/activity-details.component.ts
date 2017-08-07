import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css'],
})
export class ActivityDetailsComponent implements OnInit {

  activity: any;
  
  constructor(private activityApi: ActivityService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activity = {
      host:'',
      name:'',
      members: [],
      state:'',
      payments:[]
    };
    this.route.params.subscribe(params => {
      this.getActivityDetails(params['id']);
    });
  }

  getActivityDetails(id){
    this.activityApi.get(id)
      .subscribe((activity)=>{
        this.activity = activity;
        console.log('getactivitydetails',activity);
      });
  }

  deleteActivity(){
    if(window.confirm('Are you sure?')) {
      console.log('delete',this.activity._id);
      this.activityApi.remove(this.activity._id)
        .subscribe(()=>{
          this.router.navigate(['']);
        });
    }
  }
}
