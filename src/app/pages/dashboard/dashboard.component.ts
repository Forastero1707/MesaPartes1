import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DashboardComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
      id: {
        title: 'DNI',
        type: 'number',
      },
      firstName: {
        title: 'Nombres',
        type: 'string',
      },
      lastName: {
        title: 'Apellidos',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Edad',
        type: 'number',
      },
    },
  };
  data = [
    {
      id: 1,
      firstName: 'Jhames',
      lastName: 'Galindo',
      username: 'Jhs',
      email: 'jhames@april.biz',
      age: 15,
    },
    {
      id: 2,
      firstName: 'Jhames',
      lastName: 'Galindo',
      username: 'Jhs',
      email: 'jhames@april.biz',
      age: 15,
    },
  ];
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
