import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service.service';
import { ApiResponseModel } from '../../models/api.reponse.model';
import { DataSharingService } from '../../services/data-sharing/data-sharing-service.service';
import { UtilsService } from '../../services/utils/utils-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [ AuthService ],
  styles: []
})
export class HeaderComponent implements OnInit {

  public isUserLoggedIn: boolean;
  public userInformation: Object = {
    data: {
      firstname: ''
    }
  };

  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private DataSharingService: DataSharingService,
    private UtilsService: UtilsService
    ) {

      // Service initialize to update automatically his variables. Here, we use it in the application to 
      // check if the user is logged or not. Then we can display some content or not.
      this.DataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;

        if (value == true) {
          this.AuthService.getUserInformation()
          .then(apiResponse => { this.userInformation = apiResponse; console.log(this.userInformation) })
          .catch(apiResponse => console.error(apiResponse) );
        } else {
          this.userInformation = {
            data: {
              firstname: ''
            }
          };
        }
      });
  }

  // Logout
  public logoutUser = () => {
    this.AuthService.logout()
    .then( (apiResponse: ApiResponseModel) => {
      this.ngOnInit();
      this.Router.navigate(['/']);
      this.DataSharingService.isUserLoggedIn.next(false);

    })
    .catch( (apiResponse: ApiResponseModel) => {
      console.log(apiResponse)
    })
  }

  ngOnInit() { }

}
