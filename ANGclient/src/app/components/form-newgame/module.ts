/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormNewGameComponent } from "./form-newgame.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FormNewGameComponent ],
        imports: [ 
            CommonModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule
        ],
        exports: [ FormNewGameComponent ]
    })

    export class FormNewGameModule {};
//