import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbTreeGridModule,NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FsIconComponent } from './dashboard.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    RouterModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  declarations: [
    DashboardComponent,
    FsIconComponent,
  ],
})
export class DashboardModule { }
