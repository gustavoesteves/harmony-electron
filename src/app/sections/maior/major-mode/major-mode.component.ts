import { Component, OnInit } from '@angular/core';
import { Chord, Note, Key } from '@tonaljs/tonal';
import { DataService } from '../../../services/data.service';
import { IPreferences } from '../../../services/interfaces/preferences.interface';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Extenções'];
  majorMode: INotesComplete[] = [];
  _preferences: IPreferences[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this._preferences = this.dataService.get('preferences');
    this.majorMode = this.GetMajorMode(this._preferences[0].tonalidade);
    /*
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.majorMode = this.GetMajorMode(note);
    });
    */
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

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }
}
