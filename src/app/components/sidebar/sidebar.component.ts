import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    badge?: string;
    param: {};
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '', param: {}},
    // {path: 'profile', title: 'My Profile', icon: 'person', class: '', param: {}},
    {path: 'user-list', title: 'User List', icon: 'supervisor_account', class: '', param: {}},
    {path: 'branch/list', title: 'Branch list', icon: 'home', class: '', param: {}},
    //
    // {path: 'database/select-list', title: 'Select List Configuration', icon: 'content_paste', class: '', param: {}},
    // {path: 'database/page-title', title: 'Page Title', icon: 'content_paste', class: '', param: {}},
    // {path: 'module/room', title: 'Room', icon: 'forward', class: '', badge: 'room', param: {}},
    // {path: 'module/advertisement', title: 'Advertisement', icon: 'forward', class: '', badge: 'advertisement', param: {}},
    // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' , param: {}},
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' , param: {}},
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' , param: {}},
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' , param: {}},
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' , param: {}},
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' , param: {}},
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    sideMenu: any[];

    constructor(public userService: UserService) {

    }

    ngOnInit() {
        this.sideMenu = ROUTES.filter(menuItem => menuItem);
        this.sideMenu[1].param = {id: this.userService.userData.id};

        if(this.userService.userData.get_previledge.value == "master"){
            this.sideMenu.push(
                {
                    path: 'branch/configure/web', title: 'Configure Master Web', icon: 'library_books', class: '', param: {id: -1}
                },
            )
        }
        // if(this.userService.userData.get_previledge);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
