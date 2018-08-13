import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {UserService} from './service/user/user.service';
import {ApiService} from './service/api/api.service';
import {HttpClientModule} from '@angular/common/http';

import {PipeModule} from './pipe/pipe.module';
import {LoginComponent} from './page/login/login.component';
import {MyLocalStorageService} from './service/my-local-storage/my-local-storage.service';
import {HelperService} from './service/helper/helper.service';
import {DirectiveModule} from './directive/directive.module';
import {ProfileComponent} from './page/profile/profile.component';
import {UserComponent} from './page/module/user/user.component';
import { BranchComponent } from './page/module/branch/branchList/branch.component';
import { BranchDetailComponent } from './page/module/branch/branch-detail/branch-detail.component';
import { AbsenceListComponent } from './page/module/absence/absence-list/absence-list.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ThreadListComponent } from './page/thread/thread-list/thread-list.component';
import { ThreadDetailComponent } from './page/thread/thread-detail/thread-detail.component';
import { ConfigureBranchDetailComponent } from './page/module/configure-branch/configure-branch-detail/configure-branch-detail.component';
import {DataTablesModule} from 'angular-datatables';
import { AbsenceBarcodeComponent } from './page/absence-barcode/absence-barcode.component';
import { AutofocusDirective } from './directive/autofocus/autofocus.directive';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        LoginComponent,
        ProfileComponent,
        UserComponent,
        BranchComponent,
        BranchDetailComponent,
        AbsenceListComponent,
        ThreadListComponent,
        ThreadDetailComponent,
        ConfigureBranchDetailComponent,
        AbsenceBarcodeComponent,



    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        PipeModule,
        DirectiveModule,
        ...AppModule.module,


    ],
    providers: [
        UserService,
        ApiService,
        MyLocalStorageService,
        HelperService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},



    ],

    bootstrap: [AppComponent],


})
export class AppModule {

    public static module = [
        // MatDatepickerModule, BrowserAnimationsModule
    ]
}
