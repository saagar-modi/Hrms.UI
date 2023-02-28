import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatSidenav;

  // constructor() {
  // }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }
  constructor(private router:Router) {}
  goToPage(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }



}
