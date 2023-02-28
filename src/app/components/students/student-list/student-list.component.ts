import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DialogService} from '../../../services/dialog.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {AddStudentComponent} from '../add-student/add-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  title = 'studentMgmt';
  isLocalDataExists: boolean = false;
  studentData: any = {};
  displayedColumns: string[] = ['studentName', 'studentStd', 'studentAdmissionDate', 'studentDivision', 'studentContactNo', 'studentAddress', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialogService: DialogService, public studentService: StudentService,
              public matDialog: MatDialog, public localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.getAllStudents();
    let studentObj = {
      firstName: 'Vishal',
      lastName: 'Vaghela',
      rollNo: '62',
      contactNo: '8901234856'
    };

    let studentLocalData = this.localStorageService.getObjItem('studentData');

    this.isLocalDataExists = studentLocalData && studentLocalData.firstName != null;

    if (this.isLocalDataExists) {
      this.studentData = studentLocalData;
    } else {
      this.localStorageService.setObjItem('studentData', studentObj);
      this.studentData = this.localStorageService.getObjItem('studentData');
    }

    setTimeout(() => {
      this.localStorageService.clearData();
    }, 2000);
  }

  getAllStudents() {
    this.studentService.getStudentList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {

      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editStudent(studentData: any) {
    this.dialogService.openDialog(AddStudentComponent, studentData).afterClosed().subscribe(res => {
      if(res && res.id) {
        this.getAllStudents();
      }
    });

  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe({
      next:(res) => {
        this.getAllStudents();
      },
      error: (err) => {
        alert(JSON.stringify(err));
      }
    });
  }

  addStudent() {
    this.dialogService.openDialog(AddStudentComponent).afterClosed().subscribe(res => {
      this.getAllStudents();
    });
  }
}
