/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";
  import { UtilsService } from "../../services/utils/utils-service.service";

  // Inner
  import { IdentityModel } from '../../models/identity.model';

  // Definition
  @Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
  })
//


/* Export */
  export class FormRegisterComponent implements OnInit, OnChanges {

    /* 
    Config.
    */
      // Input/Output
      @Input() resetFormData: Boolean
      @Output() sendFormData = new EventEmitter();

      // Declaration
      public form: FormGroup;
      public formData: IdentityModel;
      public passwordError: Boolean = false;
      public toggleFields;

      // Instanciation
      constructor(
        private FormBuilder: FormBuilder,
        private UtilsService: UtilsService
      ) { };
    //


    /* 
    Methods
    */
      // Reset form
      private resetForm = () => {
        // Set validator
        this.form = this.FormBuilder.group({
          email: [undefined, Validators.required],
          firstname: [undefined, Validators.required],
          lastname: [undefined, Validators.required],
          password: [undefined, Validators.required],
          securePassword: [undefined, Validators.required]
        });

        // Set form data obbject
        this.formData = {
          email: undefined,
          firstname: undefined,
          lastname: undefined,
          password: undefined,
          securePassword: undefined
        };
      };

      // Submit form
      public submitForm = () => {
        // Check passwords
        if(this.form.value.password !== this.form.value.securePassword){ this.passwordError = true } 
        else{
          // Set login data
          this.formData = {
            email: this.form.value.email,
            firstname: this.form.value.firstname,
            lastname: this.form.value.lastname,
            password: this.form.value.password,
          }

          // Use event emmiter
          this.sendFormData.emit(this.formData);
        };
      };

      public toggleForm = () => {
        this.toggleFields = document.getElementById('containerRegisterForm');
    
        if (this.toggleFields.style.display == 'none') {
          this.UtilsService.slideDown(this.toggleFields, 500);
        } else {
          this.UtilsService.slideUp(this.toggleFields, 500);
        }
      }
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };

      ngOnChanges(changes){
        // Reset form data when user is registed
        if( !changes.resetFormData.firstChange && changes.resetFormData.currentValue ){
          this.resetForm();
        };
      };
    //
  };
//