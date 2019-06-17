/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  // import 'rxjs/add/operator/toPromise';
  import { environment } from "../../../environments/environment";
  import { UserModel } from '../../models/user.model';
  import { CookieService } from 'ngx-cookie-service';
  import { JwtHelperService } from '@auth0/angular-jwt';
//


/* 
Definition 
*/
  @Injectable()
  export class AuthService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient, private CookieService: CookieService ){};
    
    // Function to register a user
    public register(userData: UserModel): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/register`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to register a user
    public identityValidation( _id: String, password: String ): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');
      const userData = {
        _id: _id,
        password: password
      }

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/identity-validation`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to connect a user
    public login(userData: UserModel): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/login`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to reset password
    public restPassword(password: String, newPassword: String): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/password`, { password, newPassword }, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    public logout(): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      return this.HttpClient.get(`${environment.apiUrl}/auth/logout`, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    }

    // Function to get user identity from server
    public getUserId(): Promise<any>{
      // POST '/auth/login'
      return this.HttpClient.get(`${environment.apiUrl}/auth`)
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to get user information
    public getUserInformation(): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      const userId = this.getAccessToken();

      return this.HttpClient.get(`${environment.apiUrl}/auth/${userId}`)
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

    // Get data from decoded token
    private getAccessToken() {
      const access_token = this.CookieService.get('ClickerToken');
      const jwtHelper = new JwtHelperService();

      const decodedToken = jwtHelper.decodeToken(access_token);

      return decodedToken._id;
    }
  };
//