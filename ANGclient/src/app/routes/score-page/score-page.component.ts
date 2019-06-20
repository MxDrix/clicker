/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { UserModel } from '../../models/user.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { ClickerService } from "../../services/clicker/clicker-service.service";
  import { UtilsService } from "../../services/utils/utils-service.service";

  // Definition
  @Component({
    selector: 'app-score-page',
    templateUrl: './score-page.component.html',
    providers: [ AuthService, ClickerService, UtilsService ]
  })
//


/* 
Export
*/
  export class ScorePageComponent implements OnInit {

    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private ClickerService: ClickerService,
        private UtilsService: UtilsService
      ) {};
    //

    public allClickersArray = [];

    /*
    Methods
    */
      public getAllClickers = () => {
        this.ClickerService.getAllClickers()
        .then(response => {
          this.allClickersArray = this.UtilsService.sortByKey(response.data, 'nbClick');
        })
        .catch(response => console.error(response) );
      }
    //


    /* 
    Hooks
    */
      ngOnInit() { 
        this.AuthService.getUserId().then( console.log );
        this.getAllClickers();
      };
    //
  }
//