/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  // Inner
  import { UserModel } from '../../models/user.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { UtilsService } from "../../services/utils/utils-service.service";
  import { DataSharingService } from '../../services/data-sharing/data-sharing-service.service';

  // Definition
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [ AuthService ]
  })
//


/* 
Export
*/
  export class HomePageComponent implements OnInit {

    /* 
    Config.
    */
      // Register form data
      public resetFormDataRegister: Boolean = false;

      // Login form data
      public resetFormDataLogin: Boolean = false;

      // IsLogged
      public isUserLoggedIn: boolean;

      // Module injection
      constructor(
        private AuthService: AuthService,
        private Router: Router,
        private UtilsService: UtilsService,
        private DataSharingService: DataSharingService
      ) {
        this.DataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
        });

      };
    //


    /*
    Methods
    */
      // Register new user
      public registerUser = (data: UserModel) => {
        // Send user data
        this.AuthService.register(data)
        .then( (apiResponse: ApiResponseModel) => {
          this.UtilsService.flashMessage('success', 'Vous vous êtes inscrit avec succès.');

          // Reset form data
          this.resetFormDataRegister = true;
        })
        .catch( (apiResponse: ApiResponseModel) => {
          if (apiResponse.error == 'Identity already exist') {
            this.UtilsService.flashMessage('error', 'Cette adresse email est déjà utilisée.');
          } else {
            this.UtilsService.flashMessage('error', 'Une erreur est survenue durant l\'inscription.');
          }
        })
      };

      // Connnect new user
      public connectUser = (data: UserModel) => {
        // Send user data
        this.AuthService.login(data)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.Router.navigate(['/me']);
          this.UtilsService.flashMessage('success', 'Vous vous êtes connectés avec succès.');
          this.DataSharingService.isUserLoggedIn.next(true);

          // Reset form data
          this.resetFormDataLogin = true;
        })
        .catch( (apiResponse: ApiResponseModel) => {
          if (apiResponse.error == 'Unknow identity') {
            this.UtilsService.flashMessage('error', 'Combinaison email et mot de passe invalide.');
          } else {
            this.UtilsService.flashMessage('error', 'Une erreur est survenue durant la connexion.');
          }
        })
      };

    //


    /* 
    Hooks
    */
      ngOnInit() { 
        if (this.isUserLoggedIn == true) {
          this.Router.navigate(['/me']);
        }
      }
    //
  };
//