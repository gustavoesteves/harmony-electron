import { Component, OnInit } from '@angular/core';
import { Note, transpose } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-harmonia-negativa',
  templateUrl: './harmonia-negativa.component.html',
  styleUrls: ['./harmonia-negativa.component.css']
})
export class HarmoniaNegativaComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas'];
  maior: Body[] = [];
  tonica: Body[] = [];
  dominante: Body[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
    this.tonalService.currentPreferences.subscribe(value => {
      this.maior = this.loadMaior(value[value.length - 1].tonalidade);
      this.dominante = this.loadDominante(value[value.length - 1].tonalidade);
      this.tonica = this.loadTonica(value[value.length - 1].tonalidade);
    });
  }

  loadMaior(note: string): Body[] {
    return [
      {
        Grau: 'I',
        Acorde: {
          Grau: 'I',
          Acorde: note + 'maj7',
          Notas:
            Note.transpose(note, '1P') + ', ' +
            Note.transpose(note, '3M') + ', ' +
            Note.transpose(note, '5P') + ', ' +
            Note.transpose(note, '7M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'II-',
        Acorde: {
          Grau: 'II',
          Acorde: Note.transpose(note, '2M') + 'm7',
          Notas:
            Note.transpose(Note.transpose(note, '2M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '7m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'III-',
        Acorde: {
          Grau: 'III',
          Acorde: Note.transpose(note, '3M') + 'm7',
          Notas:
            Note.transpose(Note.transpose(note, '3M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '3M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '3M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '3M'), '7m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'IV',
        Acorde: {
          Grau: 'IV',
          Acorde: Note.transpose(note, '4M') + 'maj7',
          Notas:
            Note.transpose(Note.transpose(note, '4M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '7M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'V',
        Acorde: {
          Grau: 'V',
          Acorde: Note.transpose(note, '5M') + '7',
          Notas:
            Note.transpose(Note.transpose(note, '5M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '5M'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '5M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '5M'), '7m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VI-',
        Acorde: {
          Grau: 'VI',
          Acorde: Note.transpose(note, '6M') + 'm7',
          Notas:
            Note.transpose(Note.transpose(note, '6M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '6M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '6M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '6M'), '7m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VII-b5',
        Acorde: {
          Grau: 'VII',
          Acorde: Note.transpose(note, '7M') + 'm7b5',
          Notas:
            Note.transpose(Note.transpose(note, '7M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '7M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '7M'), '5d') + ', ' +
            Note.transpose(Note.transpose(note, '7M'), '7m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      }
    ];
  }

  loadDominante(note: string): Body[] {
    return [
      {
        Grau: 'I',
        Acorde: {
          Grau: 'I',
          Acorde: note + 'mb6',
          Notas:
            Note.transpose(note, '1P') + ', ' +
            Note.transpose(note, '3m') + ', ' +
            Note.transpose(note, '5P') + ', ' +
            Note.transpose(note, '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'II-',
        Acorde: {
          Grau: 'II',
          Acorde: Note.transpose(note, '7m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '7m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'III-',
        Acorde: {
          Grau: 'III',
          Acorde: Note.transpose(note, '6m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '6m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'IV',
        Acorde: {
          Grau: 'IV',
          Acorde: Note.transpose(note, '5P') + 'mb6',
          Notas:
            Note.transpose(Note.transpose(note, '5P'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'V',
        Acorde: {
          Grau: 'V',
          Acorde: Note.transpose(note, '4P') + 'm6',
          Notas:
            Note.transpose(Note.transpose(note, '4P'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '4P'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '4P'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '4P'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VI-',
        Acorde: {
          Grau: 'VI',
          Acorde: Note.transpose(note, '3m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '3m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VII-b5',
        Acorde: {
          Grau: 'VII',
          Acorde: Note.transpose(note, '2M') + 'dim7addb13',
          Notas:
            Note.transpose(Note.transpose(note, '2M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '5d') + ', ' +
            Note.transpose(Note.transpose(note, '2M'), '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      }
    ];
  }

  loadTonica(note: string): Body[] {
    return [
      {
        Grau: 'I',
        Acorde: {
          Grau: 'I',
          Acorde: Note.transpose(note, '4M') + 'mb6',
          Notas:
            Note.transpose(Note.transpose(note, '4M'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '4M'), '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'II-',
        Acorde: {
          Grau: 'II',
          Acorde: Note.transpose(note, '3m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '3m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '3m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'III-',
        Acorde: {
          Grau: 'III',
          Acorde: Note.transpose(note, '2m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '2m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '2m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '2m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '2m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'IV',
        Acorde: {
          Grau: 'IV',
          Acorde: note + 'mb6',
          Notas:
            Note.transpose(note, '1P') + ', ' +
            Note.transpose(note, '3m') + ', ' +
            Note.transpose(note, '5P') + ', ' +
            Note.transpose(note, '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'V',
        Acorde: {
          Grau: 'V',
          Acorde: Note.transpose(note, '2m') + 'm6',
          Notas:
            Note.transpose(Note.transpose(note, '7m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '7m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VI-',
        Acorde: {
          Grau: 'VI',
          Acorde: Note.transpose(note, '6m') + '6',
          Notas:
            Note.transpose(Note.transpose(note, '6m'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '3M') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '5P') + ', ' +
            Note.transpose(Note.transpose(note, '6m'), '6M'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      },
      {
        Grau: 'VII-b5',
        Acorde: {
          Grau: 'VII',
          Acorde: Note.transpose(note, '5P') + 'dim7addb13',
          Notas:
            Note.transpose(Note.transpose(note, '5P'), '1P') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '3m') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '5d') + ', ' +
            Note.transpose(Note.transpose(note, '5P'), '6m'),
          Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: ''
      }
    ];
  }

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }

}

interface Body {
  Grau: string,
  Acorde: INotesComplete,
  Notas: string,
};
