import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  private username: string;
  private clientId = '20e535249bd3cc3d3a66';
  private clientSecret = '9c0a5081f52e7a53702cefcaa47f534a49ca18e5';

  constructor(private http: HttpClient) {
    console.log('service is ready');
    this.username = 'Abdelrahmanelemam98';
  }

  getProfileInfo() {
    return this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '?client_id=' +
          this.clientId +
          '&client_secret=' +
          this.clientSecret
      )
      .pipe(map((res: any) => res));
  }
  getProfileRepos() {
    return this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '/repos?client_id=' +
          this.clientId +
          '&client_secret=' +
          this.clientSecret
      )
      .pipe(map((res: any) => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
