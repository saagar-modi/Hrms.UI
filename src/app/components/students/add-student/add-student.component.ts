import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../../services/student.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  title: string = 'Add Student';
  divisionOptions = ['A', 'B', 'C'];
  studentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public studentService: StudentService,
              public dialogRef: MatDialogRef<AddStudentComponent>, @Inject(MAT_DIALOG_DATA) public studentData: any) {
  }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      studentStd: ['', Validators.required],
      studentAdmissionDate: ['', Validators.required],
      studentDivision: ['', Validators.required],
      studentContactNo: ['', Validators.required],
      studentAddress: ['', Validators.required]
    });

    if (this.studentData && this.studentData.id) {
      this.title = 'Update Student';
      this.studentForm.controls['studentName'].setValue(this.studentData.studentName);
      this.studentForm.controls['studentStd'].setValue(this.studentData.studentStd);
      this.studentForm.controls['studentAdmissionDate'].setValue(this.studentData.studentAdmissionDate);
      this.studentForm.controls['studentDivision'].setValue(this.studentData.studentDivision);
      this.studentForm.controls['studentContactNo'].setValue(this.studentData.studentContactNo);
      this.studentForm.controls['studentAddress'].setValue(this.studentData.studentAddress);
    }
  }

  addStudent() {
    if (this.studentForm.valid) {
      if (this.studentData && this.studentData.id) {
        this.updateStudent();
      } else {
        this.createStudent();
      }
    }
  }

  createStudent() {
    this.studentService.addStudent(this.studentForm.value).subscribe({
      next:(res) => {
        this.studentForm.reset();
        this.dialogRef.close();
      },
      error: (err) => {
        alert(JSON.stringify(err));
      }
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentForm.value, this.studentData.id).subscribe({
      next:(res) => {
        this.studentForm.reset();
        this.dialogRef.close({id: this.studentData.id});
      },
      error: (err) => {
        alert(JSON.stringify(err));
      }
    });
  }
}
