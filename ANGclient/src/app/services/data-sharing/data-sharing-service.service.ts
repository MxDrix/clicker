/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, from } from 'rxjs';

  import { AuthService } from '../auth/auth-service.service';
//


/* 
Definition 
*/
  @Injectable()
  export class DataSharingService {

    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private AuthService: AuthService) {
      this.AuthService.getUserId()
      .then( apiResponse => this.isUserLoggedIn.next(true) )
      .catch( apiReponse => this.isUserLoggedIn.next(false) )
    };

  };
//