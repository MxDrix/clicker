/* 
Imports 
*/
  import { Component } from '@angular/core';
//


/* 
Definition
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      
      <main class="maxWidth marginBottomForFixedFooter">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    `,
  })
//

/* 
Export
*/
  export class AppComponent {
    title = 'ANGclient';
  }
//