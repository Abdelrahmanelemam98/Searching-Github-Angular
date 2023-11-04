import { Component } from '@angular/core';
import { ProfilesService } from 'src/app/profile/services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent {
  data!: any;
  repos!: any;
  username!: string;
  constructor(private profileServeice: ProfilesService) {}
  findProfile() {
    this.profileServeice.updateProfile(this.username);
    this.profileServeice.getProfileInfo().subscribe((response) => {
      console.log(response);
      this.data = response;
    });
    this.profileServeice.getProfileRepos().subscribe((repso) => {
      console.log(repso);
      this.repos = repso;
    });
  }
}
