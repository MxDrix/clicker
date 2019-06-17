/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { UserModel } from '../../models/user.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { UtilsService } from "../../services/utils/utils-service.service";

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    providers: [ AuthService, UtilsService ]
  })
//


/* 
Export
*/
  export class UserPageComponent implements OnInit {

    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private UtilsService: UtilsService
      ) {};
    //

    // Declare status game, score and timer
    public status: Number = 0;
    public nbClick: number = 0;
    public timer: number = 10;
    public progressBar: number = 0;
    public interval;

    /*
    Methods
    */
      public startNewGame = (element) => {
        // Get the current status
        this.status = element.getAttribute('data-status');

        if (this.status == 0) {
          // State => playing game
          this.status = 1;
          this.startTimer();
        }

        if (this.status == 1) {
          // Increment your score
          this.nbClick = this.nbClick + 1;
        }

      }

      public startTimer = () => {
        this.interval = setInterval(() => {
          if(this.timer > 0) {
            this.timer--;
            this.progressBar = this.progressBar + 10;
          } else {
            this.timer = 10;
          }
        },1000);
      }
    //


    /* 
    Hooks
    */
      ngOnInit() { 
        this.AuthService.getUserId().then( apiResponse => console.log(apiResponse.data._id) )
      };
    //
  }
//