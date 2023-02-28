import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  getStudentList() {
    return this.httpClient.get('http://localhost:3000/studentList');
  }

  addStudent(data: any) {
    return this.httpClient.post('http://localhost:3000/studentList/', data);
  }

  updateStudent(data: any, id: number) {
    return this.httpClient.put(`http://localhost:3000/studentList/${id}`, data);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(`http://localhost:3000/studentList/${id}`);
  }
}
