import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: [DashboardComponent],
  providers: []
})

export class DashboardModule {}
