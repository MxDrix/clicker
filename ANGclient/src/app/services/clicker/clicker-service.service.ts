/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  // import 'rxjs/add/operator/toPromise';
  import { environment } from "../../../environments/environment";
  import { UserModel } from '../../models/user.model';
//


/* 
Definition 
*/
  @Injectable()
  export class ClickerService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient ){};
    
    public getAllClickers = (): Promise<any> => {
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      return this.HttpClient.get(`${environment.apiUrl}/clicker/`, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    }

    public newClicker = (nbClick: Number): Promise<any> => {
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      return this.HttpClient.post(`${environment.apiUrl}/clicker/`, { nbClick }, { headers: myHeader} )
      .toPromise().then(this.getData).catch(this.handleError);
    }

    // Get the API response
    private getData(res: any){
      return res || {};
    };

    // Get the API error
    private handleError(err: any){
      return Promise.reject(err.error);
    };
  };
//