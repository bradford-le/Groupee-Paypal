import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css'],
})
export class ActivityDetailsComponent implements OnInit {

  activity: any;s
  member ='';

  states=[
    {name: "OPEN", view: "OPEN"},
    {name: "REQUEST PAYMENTS",view: "REQUEST PAYMENTS"},
    {name: "PAYOUTS",view: "SENDING PAYOUTS"},
    {name: "DONE",view: "DONE"}
   ];
  
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

  addMember() {
    this.activity.members.push(this.member);
    this.member = '';
  }

  submitForm(){
    console.log(this.activity);
    this.activityApi.edit(this.activity)
      .subscribe(()=>{
        //or put if statement here to route to Paypal API?
        // example if state change this.router.navigate(['/paypalCreate'])??
        this.router.navigate(['/activity']);
      });
    console.log(this.activity.state);
    if(this.activity.state === "REQUEST PAYMENTS"){
      console.log("FIRE OFF ALGORITHM!");
      //How can we call paypal API?
    } else if(this.activity.state === "PAYOUTS"){
      console.log("FIRE OFF PAYOUTS PAYPAL");
    } else if(this.activity.state === "DONE"){
      console.log("Make event uneditable");
    }
  }
}
