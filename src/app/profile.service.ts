import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http' ;
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


// i will export this to profile ts (class)
  private username: string;
  private clientId = 'f190063789417e8c6ca9';
  private clientSectret = '1ccd3fd56ada87a5ab0d0b037339e679cfe6d351';
  http: any;


  constructor( http: Http) {
    console.log(' Service is now ready ' );
    this. username = 'Geerocktricks';
   }
   getProfileData() {
     // tslint:disable-next-line:max-line-length
     return this. http.get('https://api.github.com/users/' + this.username + '?client_id =' + this.clientId + '&client_secret =' + this.clientSectret)
     .map(res => res.json());
   }
}
