import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  options = this.formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 43,
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
