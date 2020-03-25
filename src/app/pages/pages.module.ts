import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbMenuModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbSelectModule, NbWindowModule, NbDialogModule, NbTreeGridModule } from '@nebular/theme';
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
import { FormPersonaComponent } from "./personas/formpersona.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';


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
    FormsModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    
  ],
  declarations: [
    PagesComponent,
    RegistroExternoComponent,
    RegistroInternoComponent,   
    //FormPersonaComponent,
    //PersonasComponent
  ],
  //entryComponents: [PaginatorComponent,],
  providers: [PersonaService, { provide: LOCALE_ID, useValue:'es'}]
})


export class PagesModule {
}

