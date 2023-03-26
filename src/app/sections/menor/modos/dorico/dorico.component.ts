import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../../services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-dorico',
  templateUrl: './dorico.component.html',
  styleUrls: ['./dorico.component.css']
})
export class DoricoComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  dorianMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this.dorianMode = this.GetMinorDorianMode(note);
    });
  }

  ngOnInit(): void {
  }

  GetMinorDorianMode(note: string) {
    const minorMode: INotesComplete[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Grau: 'Im7',
      Acorde: chordNote + 'm7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2M', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4M'),
      Cadência: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Grau: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2m', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2m') + ', ' +
        Note.transpose(chordNote, '4M'),
      Cadência: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Grau: 'IIImaj7',
      Acorde: chordNote + 'maj7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3M') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7M'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7M', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Grau: 'IV7',
      Acorde: chordNote + '7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3M') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7m', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Grau: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2M', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4M'),
      Cadência: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Grau: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5d') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '4M') + ', ' +
        Note.transpose(chordNote, '6m'),
      Cadência: ''
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Grau: 'VIImaj7',
      Acorde: chordNote + 'maj7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3M') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7M'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7M', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: ''
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }

}
