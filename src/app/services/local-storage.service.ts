import {Injectable} from '@angular/core';

@Injectable()

export class LocalStorageService {

  getStrItem(key: string) {
    return localStorage.getItem(key);
  }

  setStrItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  getObjItem(key: string) {
    let dataObj: any = localStorage.getItem(key);
    return JSON.parse(dataObj);
  }

  setObjItem(key: string, objVal: any) {
    return localStorage.setItem(key, JSON.stringify(objVal));
  }

  clearData() {
    return localStorage.clear();
  }
}
