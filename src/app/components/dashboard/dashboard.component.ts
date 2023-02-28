import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getInitials(firstName:string, lastName:string) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

}
