/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { LeaderboardPageComponent } from './leaderboard-page.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ LeaderboardPageComponent ],
        imports: [ 
            CommonModule, 
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//