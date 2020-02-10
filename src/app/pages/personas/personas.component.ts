import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
//import { FormPersonaComponent } from './formpersona.component';
//import { tap } from 'rxjs/operators';
import { NbWindowService } from '@nebular/theme';
import { from } from 'rxjs';
@Component({
  selector: 'ngx-personas',
  styleUrls: ['./personas.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  /*template: `
    <button (click)="openWindowWithBackdrop()" nbButton>Open window with backdrop</button>
    <button (click)="openWindowWithoutBackdrop()" nbButton>Open window without backdrop</button>

    <ng-template #disabledEsc>
      Disabled close on escape click.
    </ng-template>
    <ng-template #escClose>
      Click escape to close.
    </ng-template>
  `,*/
  templateUrl: './personas.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class PersonasComponent implements OnInit {

  personas: Persona[];
  paginador: any;
  personaSeleccionado: Persona;
  

  @ViewChild('escClose', { read: TemplateRef, static: false }) escCloseTemplate: TemplateRef<HTMLElement>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: false }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private windowService: NbWindowService,
     ){  }

  ngOnInit(){   
       
       this.activatedRoute.paramMap.subscribe ( paramas => {
        let page: number = +paramas.get('page');
        
        if(!page){
          page = 0;
        }
        
       this.personaService.getPersonas(page)
        .pipe(
          tap(response => {
            console.log('PersonasComponent: tap 3');
            (response.content as Persona[]).forEach(persona => {
              console.log(persona.nombres);
            });
          })          
        ).subscribe(response => {
          this.personas = response.content as Persona[];
          this.paginador = response;
        });
        }
       );        
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      visible : false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      dni: {
        title: 'DNI',
        type: 'string',
      },
      appaterno: {
        title: 'Apellido Paterno',
        type: 'string',
      },
      apmaterno: {
        title: 'Apellido Materno',
        type: 'string',
      },
      nombres: {
        title: 'Nombres',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      direccion: {
        title: 'Direccion',
        type: 'string',
      },
      telefono: {
        title: 'Telefono',
        type: 'string',
      },
    },
  };   
  
  //source = this.personaService.getPersonas(0); 
  
  /*@ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;*/
  /*openWindowForm() {
    this.windowService.open(FormPersonaComponent, );
  }*/

  openWindowWithBackdrop() {
    this.windowService.open(
      this.escCloseTemplate,
      { title: 'Window with backdrop', hasBackdrop: true },
    );
  }

  openWindowWithoutBackdrop() {
    this.windowService.open(
      this.disabledEscTemplate,
      { title: 'Window without backdrop', hasBackdrop: false, closeOnEsc: false },
    );
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  abrirModal(persona: Persona)
  {
    //this.personaSeleccionado = persona;
    console.log(persona.dni);
  }
}