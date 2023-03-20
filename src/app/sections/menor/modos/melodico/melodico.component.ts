import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../../services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-melodico',
  templateUrl: './melodico.component.html',
  styleUrls: ['./melodico.component.css']
})
export class MelodicoComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  melodicMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.melodicMode = this.GetMinorMelodicMode(note);
    });
  }

  ngOnInit(): void {
  }

  GetMinorMelodicMode(note: string) {
    const minorMode: INotesComplete[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Grau: 'ImMaj7',
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7M', '4P', '2M']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Grau: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '7m', '2m', '4P']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Grau: 'IIImaj7#5',
      Acorde: chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5A', '7M', '2M', '4A']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4A') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Grau: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7m', '2M', '6M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Grau: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '7m', '2M', '6m']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Grau: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Grau: 'VIIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '7m', '4d']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4d') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}
