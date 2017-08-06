import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  activity = {
    host: '',
    name: '',
    members: [],
    state: ''
  };
  member = '';

  constructor(private activityAPI: ActivityService,private router: Router) { }

  ngOnInit() {
  }

  submitForm(){
  	this.activityAPI.add(this.activity)
  		.subscribe((res)=>{
  			console.log(res)
  			this.router.navigate(['/activity'])		
  		})
  	console.log(this.activity)
  }

  addMember() {
    this.activity.members.push(this.member);
    this.member = '';
  }
}
