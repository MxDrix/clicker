/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';

  // Inner
  import { UserModel } from '../../models/user.model';
  import { ClickerService } from '../../services/clicker/clicker-service.service';
  import { UtilsService } from '../../services/utils/utils-service.service';

  // Definition
  @Component({
    selector: 'app-form-newgame',
    templateUrl: './form-newgame.component.html',
    providers: [ ClickerService ]
  })
//


/* Export */
  export class FormNewGameComponent implements OnInit, OnChanges {

    @Input() nbClick: number;
    @Input() timer: number;
    @Input() progressBar: number;
    @Input() time: number;
    /* 
    Config.
    */
      // Declaration
      public form: FormGroup;
      public formData: UserModel;
      public passwordError: Boolean = false;

      // Instanciation
      constructor(
        private FormBuilder: FormBuilder,
        private ClickerService: ClickerService,
        private Router: Router,
        private UtilsService: UtilsService
      ) { };
    //


    /* 
    Methods
    */
        private initForm = () => {
          this.form = this.FormBuilder.group({
            nbClick: [this.nbClick, Validators.required]
          });
        }
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.initForm();
      };

      ngOnChanges(){
        // Check if time is over. If yes, saved data in database and redirect to the score page
        if (this.timer == 0) {
          this.timer = 10000;
          this.ClickerService.newClicker(this.form.value.nbClick)
          .then(apiResponse => {
            this.Router.navigate(['/score']);
            this.UtilsService.flashMessage('success', '' + this.form.value.nbClick + ' clics !');
          })
          .catch(apiResponse => {

          })
        }
      };
    //
  };
//