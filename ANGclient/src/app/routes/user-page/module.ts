/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { UserPageComponent } from './user-page.component';
    import { FormNewGameModule } from '../../components/form-newgame/module';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
            FormNewGameModule
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//