import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, Input  } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { FormPersonaService } from "./formpersona.service";
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FormPersonaComponent } from './formpersona.component';
//import { tap } from 'rxjs/operators';
import { NbWindowService, NbDialogService, NbToastrService} from '@nebular/theme';
import { from } from 'rxjs';
import { Router} from '@angular/router';

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


  private index: number = 0;
  personas: Persona[];
  paginador: any;
  personaSeleccionado: Persona;
  @Input() persona: Persona = new Persona();
  errores: string[];

  @ViewChild('formPersona', { read: TemplateRef, static: false }) escCloseTemplate: TemplateRef<HTMLElement>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: false }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private personaService: PersonaService,
    private formPersonaService: FormPersonaService,
    private activatedRoute: ActivatedRoute,
    private windowService: NbWindowService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private router: Router,
    
    
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
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      visible : true,
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
  onUserRowSelect(event): void {
    console.log(event);    
    this.persona = <Persona> event.data;
    console.log(this.persona);    
  }
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
  editData(event) {
    
    if (window.confirm('Are you sure you want to save Changes?')) {
     /* this.manu = this.manu.filter(obj => obj.nic !== event.data.nic);
      this.manu.push(event.newData);
      this.service.addManufacture({ manufact: this.manu }).subscribe(next => {
        event.confirm.reject();
      });*/
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
    
  }
  
  addData(event): void {    
    this.persona = event.newData;
    console.log(this.persona)
            this.personaService.create(this.persona)
              .subscribe(
                persona => {
                   
                    //this.router.navigate(['/pages/personas']);
                    this.showToast('top-right','success' );
                    event.confirm.resolve(event.newData);
                  //swal('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con éxito`, 'success');
                },
                err => {
                  this.errores = err.error.errors as string[];
                  console.error('Código del error desde el backend: ' + err.status);
                  console.error(err.error.errors);
                }
              );
    /*this.manu.push(data.newData);
    console.log(this.manu);
    this.service.addManufacture({ manufact: this.manu }).subscribe(next => {
      data.confirm.reject();
    });*/
  }
  onCustomAction(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
    //this.router.navigate(['pages/ourPage']);
  }
  abrirModal(persona: Persona)
  {
    if(persona!=null)
    {
      console.log(persona);
      this.personaSeleccionado = persona;
      this.formPersonaService.abrirModal();
    }
    else{
      this.personaSeleccionado = new Persona();
      this.formPersonaService.abrirModal();
      console.log("Esta Vacia");
    }    
  }
  abrirModalconSalida()
  {
    this.open(false);    
  }

  open(closeOnBackdropClick: boolean){
    this.dialogService.open(FormPersonaComponent, {
      context: {
        persona: this.persona,        
      }, closeOnBackdropClick,
    });
  }
  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Toast ${this.index}`,
      { position, status });
  }
}