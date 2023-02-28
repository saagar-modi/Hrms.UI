import {NgModule} from '@angular/core';
import {AddStudentComponent} from './add-student/add-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {StudentsRoutingModule} from './students-routing.module';
import {DialogService} from '../../services/dialog.service';
import {StudentService} from '../../services/student.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StudentsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    StudentListComponent,
    AddStudentComponent
  ],
  providers: [StudentService, DialogService]
})

export class StudentsModule {}
