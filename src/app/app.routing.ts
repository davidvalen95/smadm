import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {UserComponent} from './page/module/user/user.component';
import {BranchComponent} from './page/module/branch/branchList/branch.component';
import {BranchDetailComponent} from './page/module/branch/branch-detail/branch-detail.component';
import {AbsenceListComponent} from './page/module/absence/absence-list/absence-list.component';
import {ThreadDetailComponent} from './page/thread/thread-detail/thread-detail.component';
import {ConfigureBranchDetailComponent} from './page/module/configure-branch/configure-branch-detail/configure-branch-detail.component';
import {AbsenceBarcodeComponent} from './page/absence-barcode/absence-barcode.component';




const routes: Routes =[
    { path: 'absence/barcode',       component: AbsenceBarcodeComponent },
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path: 'user-list',   component: UserComponent },
    { path: 'branch/list',   component: BranchComponent },
    { path: 'branch/detail',   component: BranchDetailComponent },
    { path: 'branch/configure/web',   component:ConfigureBranchDetailComponent },
    { path: 'thread/detail',   component: ThreadDetailComponent },
    { path: 'absence/list',   component: AbsenceListComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
