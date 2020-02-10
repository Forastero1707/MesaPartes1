/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PaginatorComponent } from './pages/paginator/paginator.component';
//import { PersonaService } from './pages/personas/persona.service'
import { CommonModule } from '@angular/common';
import { NbCardModule, NbThemeModule, NbLayoutModule, NbListModule} from '@nebular/theme';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  
  
} from '@nebular/theme';


@NgModule({
  declarations: [AppComponent,  /* FormPersonaComponent, PersonaService*/],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    
    ThemeModule.forRoot(),

   /* CommonModule,
    NbThemeModule,
    NbCardModule,
    NbLayoutModule,
    NbListModule,*/
  

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
 // entryComponents: [FormPersonaComponent],
 // providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
