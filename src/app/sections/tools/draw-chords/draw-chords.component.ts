import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IInstruments } from '../../../services/interfaces/instruments.interface';
import { findFingerings } from 'chord-fingering';
import { ChordBox } from 'vexchords';
import { DrawService } from './../../../services/draw.service';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';
import { Chord } from '@tonaljs/tonal';
import { Instrument } from "piano-chart";
import { IPreferences } from '../../../services/interfaces/preferences.interface';
import { InstrumentsDb } from '../../../services/db/instruments.db';

@Component({
  selector: 'app-draw-chords',
  templateUrl: './draw-chords.component.html',
  styleUrls: ['./draw-chords.component.css']
})
export class DrawChordsComponent implements OnInit {
  @ViewChild('drawChordsChart', { static: true }) divDrawChordsChart: ElementRef;

  instruments: IInstruments[] = [];
  menuAcordes = [];
  menuBass = [];
  baixo = '';
  notesTriade = [];
  acorde = '';
  checkedNotes: ICheckedNotes[] = [];
  checkedExtencoes: ICheckedNotes[] = [];
  checkedIntervals: ICheckedNotes[] = [];
  menuAtivo = 'notas';
  btnNotas = 'button primary small';
  btnIntervalos = 'button small';
  _preferences: IPreferences;

  allNotes = [
    { note: 'C', value: 0 },
    { note: 'C#', value: 1 },
    { note: 'Db', value: 1 },
    { note: 'D', value: 2 },
    { note: 'D#', value: 3 },
    { note: 'Eb', value: 3 },
    { note: 'E', value: 4 },
    { note: 'F', value: 5 },
    { note: 'F#', value: 6 },
    { note: 'Gb', value: 6 },
    { note: 'G', value: 7 },
    { note: 'G#', value: 8 },
    { note: 'Ab', value: 8 },
    { note: 'A', value: 9 },
    { note: 'A#', value: 10 },
    { note: 'Bb', value: 10 },
    { note: 'B', value: 11 },
  ];

  constructor(private tonalService: TonalService, private drawService: DrawService) {
    this.tonalService.currentPreferences.subscribe(value => {
      this._preferences = value[value.length - 1];
      this.InitializationChords(value[value.length - 1].acorde);
    });
    this.instruments = InstrumentsDb;
  }

  ngOnInit(): void {
  }

  onSelectInstrument(item: Event): void {
    this.tonalService.pushInstrument((item.target as HTMLInputElement).value, this._preferences);
    // montando acorde
    this.FindAndDrawChords();
  }

  onSelectBass(item: string): void {
    this.baixo = item;
    // montando notas
    this.menuBass.length = 0;
    this.checkedNotes.length = 0;
    let count = 1;
    let _notas = Chord.get(this._preferences.acorde.Acorde);
    for (const item of _notas.notes) {
      this.menuBass.push(item);
      if (item !== this.baixo) {
        this.checkedNotes.push({ note: item, checked: true, value: count++ });
      }
    }
    // montando acorde
    this.FindAndDrawChords();
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else {
      this.checkedNotes.find(value => value.note === note).value = 0;
    }
    this.FindAndDrawChords();
  }

  geraValorExtencoes(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedExtencoes.map(function (o) { return o.value; })) + 1;
      this.checkedExtencoes.find(value => value.note === note).value = max;
    }
    else {
      this.checkedExtencoes.find(value => value.note === note).value = 0;
    }
    this.FindAndDrawChords();
  }

  InitializationChords(value: INotes) {
    if (value.Acorde != '') {
      // montando menu
      // menu baixo
      this.menuBass.length = 0;
      this.checkedNotes.length = 0;
      this.checkedExtencoes.length = 0;
      let count = 1;
      for (const item of Chord.get(value.Acorde).notes) {
        if (count === 1) {
          this.baixo = item;
          this.acorde = item;
        }
        this.menuBass.push(item);
        if (item !== this.baixo) {
          this.checkedNotes.push({ note: item, checked: true, value: count++ });
        }
        count++;
      }

      for (const item of this._preferences.extensao.NotasExtendidas.split(', ')) {
        this.checkedExtencoes.push({ note: item, checked: false, value: 0 });
      }

      // montando acorde
      this.FindAndDrawChords();
      // montando as notas de funções harmonicas
      //this.montaNotasFuncao(value);
    }
  }

  getTriade(): string[] {
    let notesTriade = [];
    notesTriade.push(this.baixo);
    for (const item of this.checkedNotes) {
      if (item.checked) {
        notesTriade.push(item.note);
      }
    }
    for (const item of this.checkedExtencoes) {
      if (item.checked) {
        notesTriade.push(item.note);
      }
    }
    return notesTriade;
  }

  FindAndDrawChords() {
    this.divDrawChordsChart.nativeElement.innerHTML = '';
    let findsChords: string[] = [];
    let notes = this.getTriade();
    if (this._preferences.instrumento.NumStrings > 0) {
      findsChords.push(findFingerings(this.getTriade(), [], this.baixo, this._preferences.instrumento.Notes));

      // verificando se quantidade de acordes esta muito baixa para retirar a quinta    
      if (findsChords[0].length < 10 && notes.length > 3) {
        let quintaFora: string[] = [];
        let contaQuinta = 0;
        for (const note of notes) {
          if (contaQuinta !== 2) { quintaFora.push(note); }
          contaQuinta++;
        }
        findsChords.push(findFingerings(quintaFora, [], this.baixo, this._preferences.instrumento.Notes));
      }
      // imprimindo acordes na tela
      let count = 0;
      for (let i = 0; i < findsChords.length; i++) {
        for (let j = 0; j < findsChords[i].length; j++) {
          if (count < 21) {
            const chordTranslate = this.drawService.GetTranslate(findsChords[i][j]);
            new ChordBox(this.divDrawChordsChart.nativeElement, {
              numStrings: this._preferences.instrumento.NumStrings,
              numFrets: 5
            }).draw({
              chord: chordTranslate.Chord,
              position: chordTranslate.Position,
              tuning: this._preferences.instrumento.Notes
            });
          }
          count++;
        }
      }
    } else {
      let piano = new Instrument(this.divDrawChordsChart.nativeElement);
      piano.create();
      notes.forEach(element => {
        if (this.allNotes.find(value => value.note === element).value >= this.allNotes.find(value => value.note === notes[0]).value) {
          piano.keyDown(element + '3');
        } else {
          piano.keyDown(element + '4');
        }
      });
    }
  }

  changeView(ativo: string) {
    this.menuAtivo = ativo;
    if (ativo === 'intervalos') {
      this.btnNotas = 'button small';
      this.btnIntervalos = 'button primary small';
    }
    else if (ativo === 'notas') {
      this.btnNotas = 'button primary small';
      this.btnIntervalos = 'button small';
    }
  }
}

interface ICheckedNotes {
  note: string;
  checked: boolean;
  value: number;
}
