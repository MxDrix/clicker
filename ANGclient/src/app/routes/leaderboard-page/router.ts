/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { LeaderboardPageComponent } from './leaderboard-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: LeaderboardPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//