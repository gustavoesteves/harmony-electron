import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minor-mode',
  templateUrl: './minor-mode.component.html',
  styleUrls: ['./minor-mode.component.css']
})
export class MinorModeComponent implements OnInit {
modos: IModo[] = [
  {Id: 1, Name: 'Natural'},
  {Id: 2, Name: 'Harmônico'},
  {Id: 3, Name: 'Melódico'},
  {Id: 4, Name: 'Dórico'},
  {Id: 5, Name: 'Frígio'},
  {Id: 5, Name: 'Menor Jazz'},
  {Id: 5, Name: 'Lídio #5'},
  {Id: 5, Name: 'Lídio b7'},
  {Id: 5, Name: 'Lócrio ♮2'},
];
modo = 'Natural';

  constructor() { }

  ngOnInit() {
  }

  onSelectModoMenor(item: Event) {
    this.modo = (item.target as HTMLInputElement).value;
  }

}

export interface IModo {
  Id: number;
  Name: string;
}

