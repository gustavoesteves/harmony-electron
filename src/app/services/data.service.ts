import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
  }

  public send(val: string, arr: []): void {
    localStorage.setItem(val, JSON.stringify(arr));
  }

  public get(val: string): [] {
    return JSON.parse(localStorage.getItem(val));
  }

}
