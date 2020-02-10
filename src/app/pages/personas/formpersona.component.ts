import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbWindowRef, NbWindowComponent, NbWindowModule } from '@nebular/theme';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector: 'ngx-formpersona',
    //styleUrls: ['./formpersona.component.scss'],
    templateUrl: './formpersona.component.html',
})
export class FormPersonaComponent implements OnInit{
    

        @Input() persona: Persona;
        //private persona: Persona = new Persona()
        private titulo:string = "Crear Cliente"
        progreso: number = 0;

        constructor(private sidebarService: NbSidebarService,
            private menuService: NbMenuService,
            private themeService: NbThemeService,
            //private userService: UserData,
            private breakpointService: NbMediaBreakpointsService,
            private personaService: PersonaService,
            private activatedRoute: ActivatedRoute
            //public windowRef: NbWindowRef,
            //public windowsComponent: NbWindowModule
            ){ }

        ngOnInit(){
        
        }

        public create(){
            console.log("Clicked!")
            console.log(this.persona);
        }
    
        
    

        
}