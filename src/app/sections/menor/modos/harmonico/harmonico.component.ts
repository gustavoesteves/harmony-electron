import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../../services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-harmonico',
  templateUrl: './harmonico.component.html',
  styleUrls: ['./harmonico.component.css']
})
export class HarmonicoComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  harmonicMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this.harmonicMode = this.GetMinorHarmonicMode(note);
    });
  }

  ngOnInit(): void {
  }

  GetMinorHarmonicMode(note: string) {
    const minorMode: INotesComplete[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Grau: 'ImMaj7',
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '2M', '4P', '7M']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Grau: 'IIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '6M', '4P', '7m']),
      Extenções: '(11, 13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Grau: 'IIImaj7#5',
      Acorde: chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5A', '2M', '4P', '7M']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4P') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Grau: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '2M', '4A', '7m']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4A') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // V7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Grau: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], []),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Grau: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], []),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M')
        + ', ' + Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Grau: 'VIIdim7',
      Acorde: chordNote + 'dim7',
      Notas: Chord.get(chordNote + 'dim7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, [], [], []),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }

}
