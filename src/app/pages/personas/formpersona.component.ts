import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbWindowRef, NbWindowComponent, NbWindowModule, NbDialogRef } from '@nebular/theme';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { FormPersonaService } from "./formpersona.service";
import { from } from 'rxjs';


@Component({
    selector: 'ngx-formpersona',
    styleUrls: ['./formpersona.component.scss',],    
    templateUrl: './formpersona.component.html',
})
export class FormPersonaComponent implements OnInit{
    

        @Input() persona: Persona;

        //private persona: Persona = new Persona()
        private titulo:string = "Crear Cliente"
       // progreso: number = 0;

        constructor(/*private sidebarService: NbSidebarService,
            private menuService: NbMenuService,
            private themeService: NbThemeService,
            //private userService: UserData,
            private breakpointService: NbMediaBreakpointsService,
            private personaService: PersonaService,
            private router: Router,
            private activatedRoute: ActivatedRoute*/
            //public windowRef: NbWindowRef,
            //public windowsComponent: NbWindowModule
            private personaService: PersonaService,
            //private router: Router,
            private formPersonaService: FormPersonaService,
            protected ref: NbDialogRef<FormPersonaComponent>
            ){ }

        ngOnInit(){
                    
        }
        /*cargarPersona(): void{
            this.activatedRoute.params.subscribe(params => {
                let dni = params['id']
                if(dni){
                    this.personaService.getPersona(dni).subscribe((persona) => this.persona = persona);
                }
            })
        }*/
        /*public create(): void{
            this.personaService.create(this.persona).subscribe(
                response => this.router.navigate(['/personas'])
            )
        }   */
        cerrarModal(){
            this.formPersonaService.cerrarModal();
        }
        cerrarDialogo(){
            this.ref.close();
        }
}