import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-registroexterno',
    styleUrls: ['./registroexterno.component.scss'],
    templateUrl: './registroexterno.component.html',
})
export class RegistroExternoComponent {
    constructor(private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        //private userService: UserData,
        private breakpointService: NbMediaBreakpointsService) {
    }
}