import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LocalStorageService} from './services/local-storage.service';
import {DialogService} from './services/dialog.service';
import {StudentService} from './services/student.service';
import {NavComponent} from './components/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DashboardLayoutComponent} from './layout/dashboard.layout.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardLayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatBadgeModule

    ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
