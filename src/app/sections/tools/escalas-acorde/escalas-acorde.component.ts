import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-escalas-acorde',
  templateUrl: './escalas-acorde.component.html',
  styleUrls: ['./escalas-acorde.component.css']
})
export class EscalasAcordeComponent implements OnInit {
  // notas checadas
  checkedNotes = [
    { note: 'C', checked: false, value: '1P' },
    { note: 'Db', checked: false, value: '2m' },
    { note: 'D', checked: false, value: '2M' },
    { note: 'Eb', checked: false, value: '3m' },
    { note: 'E', checked: false, value: '3M' },
    { note: 'F', checked: false, value: '4P' },
    { note: 'Gb', checked: false, value: '5d' },
    { note: 'G', checked: false, value: '5P' },
    { note: 'Ab', checked: false, value: '6m' },
    { note: 'A', checked: false, value: '6M' },
    { note: 'Bb', checked: false, value: '7m' },
    { note: 'B', checked: false, value: '7M' },
  ];
  cycleOfFourth = [
    'A', 'Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'
  ];
  cycleOfFifth = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
  ];
  notesTriade = [];
  menuAtivo = 'notas';
  escalas = [];
  menuBass = [
    'A', 'A#', 'Bb', 'B', 'Cb', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'
  ];
  baixo = '';
  header = ['Escalas'];

  constructor(private tonalService: TonalService) {
    this.baixo = this.menuBass[0];
    this.setCheckNotes();
  }

  ngOnInit(): void {
  }

  setCheckNotes() {
    if (this.baixo.search(/#/g) >= 0) {
      this.getScale(this.cycleOfFifth);      
    } else if (this.baixo.search(/b/g) >= 0 || this.baixo === 'F') {
      this.getScale(this.cycleOfFourth);
    } else {
      this.getScale(this.cycleOfFifth);
    }
  }

  getScale(scale: string[]) {
    let _scale = scale.slice(scale.indexOf(this.baixo), scale.length);
    if (scale.slice(0, scale.indexOf(this.baixo)).length > 0) {
      for (let index = 0; index < scale.slice(0, scale.indexOf(this.baixo)).length; index++) {
        _scale.push(scale[index]);
      }
    }
    for (let index = 0; index < this.checkedNotes.length; index++) {
      this.checkedNotes[index].note = _scale[index];
    }
  }

  onSelectBass(item: string) {
    this.baixo = item;
    this.setCheckNotes();
  }

  gravaValor(status: boolean, note: string) {
    this.notesTriade.length = 0;
    for (const item of this.checkedNotes) {
      if (item.checked) {
        this.notesTriade.push(item.value);
      }
    }
  }

  pesquisandoEscalas() {
    this.escalas = [];
    this.escalas.push({ Escalas: this.tonalService.GetScales(this.baixo, [], [], this.notesTriade) });
  }

}
