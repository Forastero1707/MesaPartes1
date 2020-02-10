import { Component, TemplateRef, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbDialogService } from '@nebular/theme';
import { dialogoComponent } from './dialogo.component';

@Component({
    selector: 'ngx-registrointerno',
    styleUrls: ['./registrointerno.component.scss'],
    templateUrl: './registrointerno.component.html',
})
export class RegistroInternoComponent {
    constructor(private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private dialogService: NbDialogService,
        //private userService: UserData,
        private breakpointService: NbMediaBreakpointsService) {
    }
    openWithoutBackdropClick() {
        this.open(false);
    }
    open(closeOnBackdropClick: boolean) {
        this.dialogService.open(dialogoComponent, { closeOnBackdropClick });
    }
}
