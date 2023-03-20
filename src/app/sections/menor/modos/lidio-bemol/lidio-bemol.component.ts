import { Component, OnInit } from '@angular/core';
import { Note } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../../services/interfaces/notes.interface';
import { TonalService } from './../../../../services/tonal.service';

@Component({
  selector: 'app-lidio-bemol',
  templateUrl: './lidio-bemol.component.html',
  styleUrls: ['./lidio-bemol.component.css']
})
export class LidioBemolComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  minorMode: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.minorMode = this.GetMinorNaturalMode(note);
    });
  }

  GetMinorNaturalMode(note: string) {
    const minorMode: INotesComplete[] = [];
    let chordNote = '';

    //Lidio b7
    // 1P 2M 3
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
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '2M', '4P', '7m']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4M'),
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Grau: 'IIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5d') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5d', '6m', '4P', '7m']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '4M') + ', ' +
        Note.transpose(chordNote, '6m'),
      Cadência: '',
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
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '2M', '6M', '7M']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Grau: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '2M', '4P', '7m']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4M'),
      Cadência: '',
    });

    // Vm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Grau: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3m') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3m', '5P', '4P', '7m']),
      Extenções: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      NotasExtendidas: Note.transpose(chordNote, '4M'),
      Cadência: '',
    });

    // VI'''maj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Grau: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3M') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7M'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '2M', '4A', '6M', '7M']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: '',
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Grau: 'VII7',
      Acorde: chordNote + '7',
      Notas:
        Note.transpose(chordNote, '1P') + ', ' +
        Note.transpose(chordNote, '3M') + ', ' +
        Note.transpose(chordNote, '5P') + ', ' +
        Note.transpose(chordNote, '7m'),
      Escalas: this.tonalService.GetScales(chordNote, [], [], ['3M', '5P', '2M', '6M', '7m']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      NotasExtendidas:
        Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '6M'),
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}
