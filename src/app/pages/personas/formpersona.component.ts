import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbWindowRef, NbWindowComponent, NbWindowModule, NbDialogRef, NbToastrService } from '@nebular/theme';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { FormPersonaService } from "./formpersona.service";
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'ngx-formpersona',
    styleUrls: ['./formpersona.component.scss',],    
    templateUrl: './formpersona.component.html',
})
export class FormPersonaComponent implements OnInit{
    
        private index: number = 0;
        @Input() persona: Persona;
        errores: string[];
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
            protected ref: NbDialogRef<FormPersonaComponent>,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private toastrService: NbToastrService
            ){ }

        ngOnInit(){
                    
        }
        create(): void {
            console.log(this.persona);
            this.personaService.create(this.persona)
              .subscribe(
                persona => {
                    this.cerrarDialogo();
                    this.router.navigate(['/pages/personas']);
                    this.showToast('top-right','success' , `La Persona ${this.persona.nombres} se ha Guardado Correctamente`);
                  //swal('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con éxito`, 'success');
                },
                err => {
                  this.errores = err.error.errors as string[];
                  console.error('Código del error desde el backend: ' + err.status);
                  console.error(err.error.errors);
                }
              );
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
        }*/
        cerrarModal(){
            this.formPersonaService.cerrarModal();
        }
        cerrarDialogo(){
            this.ref.close(); 
        }
        showToast(position, status, message) {
            this.index += 1;
            this.toastrService.show(
              status || message,
              ` ${message}`,
              { position, status  });
          }
}