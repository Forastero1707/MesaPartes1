import { NgModule, LOCALE_ID } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; //
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistroExternoComponent } from './registroexterno/registroexterno.component';
import { RegistroInternoComponent } from './registrointerno/registrointerno.component';
//import { FormPersonaComponent } from './personas/formpersona.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasModule } from './personas/personas.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PersonaService } from './personas/persona.service';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    PersonasModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
    RouterModule,
    NbWindowModule,
    
    
  ],
  declarations: [
    PagesComponent,
    RegistroExternoComponent,
    RegistroInternoComponent,
    
   
    //FormPersonaComponent
    //PersonasComponent
  ],
  //entryComponents: [PaginatorComponent,],
  providers: [PersonaService, { provide: LOCALE_ID, useValue:'es'}]
})


export class PagesModule {
}

