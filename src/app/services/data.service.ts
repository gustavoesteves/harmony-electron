import { Injectable } from '@angular/core';
import { IPreferences } from './interfaces/preferences.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
  }

  public send(val: string, arr: IPreferences[] ): void {
    localStorage.setItem(val, JSON.stringify(arr));
  }

  public get(val: string): IPreferences[] {
    return JSON.parse(localStorage.getItem(val));
  }

}
