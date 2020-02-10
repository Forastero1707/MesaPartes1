import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroExternoComponent } from './registroexterno/registroexterno.component';
import { RegistroInternoComponent } from './registrointerno/registrointerno.component';
import { PersonasComponent } from './personas/personas.component';
import { FormPersonaComponent } from './personas/formpersona.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'registrointerno',
      component: RegistroInternoComponent,
    },
    {
      path: 'registroexterno',
      component: RegistroExternoComponent,
    },    
    {
      path: 'personas',
      component: PersonasComponent,
      /*children: [
        {
          path: 'personas/page/:page',
          component: PersonasComponent,
        },   
      ]*/
    },
    /*{
      path: 'personas/page',
      component: PersonasComponent,
    },*/    
    {
      path: 'dashboard',
      component: PersonasComponent,
    },   
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'personas/page/:page',
      component: PersonasComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
