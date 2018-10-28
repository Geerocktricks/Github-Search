import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http' ;
import 'rxjs/add/operator/maps';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


// i will export this to profile ts (class)
  private username: string;
  private clientId = 'f190063789417e8c6ca9';
  private clientSectret = '1ccd3fd56ada87a5ab0d0b037339e679cfe6d351';


  constructor(_http: Http) {

   }
}
