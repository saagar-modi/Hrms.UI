import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Injectable()

export class DialogService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(component: any, data?: any) {
    return this.dialog.open(component, {
      width: '50%',
      data: data
    });
  }
}
