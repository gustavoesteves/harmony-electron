import { Component, OnInit } from '@angular/core';
import { Chord, Note, Key } from '@tonaljs/tonal';
import { IPreferences } from '../../../services/interfaces/preferences.interface';
import { TonalService } from '../../../services/tonal.service';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Extenções'];
  majorMode: INotesComplete[] = [];
  _preferences: IPreferences;

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this._preferences = value[value.length - 1];
      this.majorMode = this.GetMajorMode(note);
    });
  }

  GetMajorMode(note: string) {
    const majorMode: INotesComplete[] = [];
    let key = Key.majorKey(note);
    let ext = '';

    for (let index = 0; index < key.grades.length; index++) {
      switch (index) {
        case 0:
          ext = Note.transpose(key.scale[index], '2M') + ', ' + Note.transpose(key.scale[index], '6M');
          break;
        case 1:
          ext = Note.transpose(key.scale[index], '2M') + ', ' + Note.transpose(key.scale[index], '4M');
          break;
        case 2:
          ext = Note.transpose(key.scale[index], '4M');
          break;
        case 3:
          ext = Note.transpose(key.scale[index], '2M') + ', ' +
            Note.transpose(key.scale[index], '4A') + ', ' + Note.transpose(key.scale[index], '6M');
          break;
        case 4:
          ext = Note.transpose(key.scale[index], '2M') + ', ' + Note.transpose(key.scale[index], '6M');
          break;
        case 5:
          ext = Note.transpose(key.scale[index], '2M') + ', ' + Note.transpose(key.scale[index], '4M');
          break;
        case 6:
          ext = Note.transpose(key.scale[index], '4M') + ', ' + Note.transpose(key.scale[index], '6m');
          break;
        default:
          break;
      }
      majorMode.push({
        Grau: key.grades[index],
        Acorde: key.chords[index],
        Notas: Chord.get(key.chords[index]).notes.toString(),
        Escalas: '',
        Extenções: ext,
        NotasExtendidas: ext,
        Cadência: ''
      });
    }

    return majorMode;
  }

  loadChords(chord: INotesComplete) {
    //INotes
    this._preferences.acorde.Acorde = chord.Acorde;
    this._preferences.acorde.Grau = chord.Grau;
    //INotesComplete
    this._preferences.extensao.Cadência = chord.Cadência;
    this._preferences.extensao.Escalas = chord.Escalas;
    this._preferences.extensao.Extenções = chord.Extenções;
    this._preferences.extensao.Notas = chord.Notas;
    this._preferences.extensao.NotasExtendidas = chord.NotasExtendidas;

    this.tonalService.pushPreferences(this._preferences);
  }
}
