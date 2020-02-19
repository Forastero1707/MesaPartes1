import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonasComponent } from './personas.component';
import { FormPersonaComponent } from './formpersona.component';
import { RouterModule} from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbWindowModule, NbDialogModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PaginatorComponent } from './../paginator/paginator.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,    
    RouterModule,
    NbDialogModule.forChild(),
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbWindowModule,    
    FormsModule,  
  ],

  declarations: [
    FormPersonaComponent,
    PersonasComponent,    
    PaginatorComponent,
  ],
//  entryComponents: [FormPersonaComponent],
})


export class PersonasModule { }