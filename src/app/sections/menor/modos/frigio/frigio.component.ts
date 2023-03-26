import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../../services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-frigio',
  templateUrl: './frigio.component.html',
  styleUrls: ['./frigio.component.css']
})
export class FrigioComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  phrygianMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this.phrygianMode = this.GetMinorPhrygianMode(note);
    });
  }

  ngOnInit(): void {
  }

  GetMinorPhrygianMode(note: string) {
    const minorMode: INotesComplete[] = [];
    let chordNote = '';

    /* O modo
    '1P', '2m', '3m', '4P', '5P', '6m', '7m'
    */
    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Grau: 'Im7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2m', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2m');
    minorMode.push({
      Grau: 'IImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7M', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Grau: 'III7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7m', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Grau: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2M', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Grau: 'Vm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Grau: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7M', '2M', '4P', '6M']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4P') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Grau: 'VIIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2M', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }

}
