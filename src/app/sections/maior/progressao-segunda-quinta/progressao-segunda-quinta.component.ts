import { Component, OnInit } from '@angular/core';
import { note, Note, Chord } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-progressao-segunda-quinta',
  templateUrl: './progressao-segunda-quinta.component.html',
  styleUrls: ['./progressao-segunda-quinta.component.css']
})
export class ProgressaoSegundaQuintaComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções', 'Cadência'];
  twoFiveSecondaryDominant: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.twoFiveSecondaryDominant = this.GetTwoFiveSecondaryDominant(note);
    });
  }

  ngOnInit(): void {
  }

  GetTwoFiveSecondaryDominant(note: string) {
    const result: INotesComplete[] = [];
    let changeNote = '';

    // II de V7/II
    changeNote = Note.transpose(note, '3M');
    result.push({
      Grau: 'II- de V/II',
      Acorde: changeNote + 'm7',
      Notas: Chord.get(changeNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5P', '7m', '4P', '6m']),
      Extenções: '(11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7'
    });

    result.push({
      Grau: 'II- b5 de V/II',
      Acorde: changeNote + 'm7b5',
      Notas: Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ')',
      NotasExtendidas: '',
      Cadência:
        changeNote + 'm7b5' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7'
    });

    changeNote = Note.transpose(note, '4A');
    result.push({
      Grau: 'II- de V/III',
      Acorde: changeNote + 'm7',
      Notas: Chord.get(changeNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5P', '7m', '4P', '6m']),
      Extenções: '(11, b13) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7'
    });

    result.push({
      Grau: 'II- b5 de V/III',
      Acorde: changeNote + 'm7b5',
      Notas: Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(11, b13) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6m') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7b5' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7'
    });

    changeNote = Note.transpose(note, '5P');
    result.push({
      Grau: 'II- de V/IV',
      Acorde: changeNote + 'm7',
      Notas: Chord.get(changeNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5P', '7m', '4P', '6m']),
      Extenções: '(9, 13) <br>' +
        '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'Maj7'
    });

    result.push({
      Grau: 'II- b5 de V/IV',
      Acorde: changeNote + 'm7b5',
      Notas: Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5d', '7m', '4P', '6m']),
      Extenções: '(9, 13) <br>' +
        '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7b5' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'Maj7'
    });

    changeNote = Note.transpose(note, '6M');
    result.push({
      Grau: 'II- de V/V',
      Acorde: changeNote + 'm7',
      Notas: Chord.get(changeNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5P', '7m', '4P', '2M']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '4P') + ')',
      NotasExtendidas: '',
      Cadência: changeNote + 'm7' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7'
    });

    result.push({
      Grau: 'II- b5 de V/V',
      Acorde: changeNote + 'm7b5',
      Notas: Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5d', '7m', '4P', '2M']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '4P') + ')',
      Cadência: changeNote + 'm7b5' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7',
      NotasExtendidas: '',
    });

    changeNote = Note.transpose(note, '7M');
    result.push({
      Grau: 'II- de V/VI',
      Acorde: changeNote + 'm7',
      Notas: Chord.get(changeNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5P', '7m', '6m', '2m']),
      Extenções: '(9, b13) <br>' +
        '(' + Note.transpose(changeNote, '2m') + ', ' + Note.transpose(changeNote, '6m') + ')',
      Cadência: changeNote + 'm7' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7',
      NotasExtendidas: '',
    });

    result.push({
      Grau: 'II- de V/VI',
      Acorde: changeNote + 'm7b5',
      Notas: Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3m', '5d', '7m', '6m', '2m']),
      Extenções: '(9, b13) <br>' +
        '(' + Note.transpose(changeNote, '2m') + ', ' + Note.transpose(changeNote, '6m') + ')',
      Cadência: changeNote + 'm7b5' + ' &#8594; ' +
        Note.transpose(changeNote, '4P') + '7 &#8594; ' +
        Note.transpose(changeNote, '7m') + 'm7',
      NotasExtendidas: '',
    });

    return result;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}
