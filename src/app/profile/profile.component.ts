import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileservice: any;

  constructor( private profileService: ProfileService ) {
    // this.profileService.getProfileData().subscribe(profile => {
    // //   console.log(profile);
    // });
   }

  ngOnInit() {
  }

}
