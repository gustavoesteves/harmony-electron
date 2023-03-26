import { Component, OnInit } from '@angular/core';
import { Note } from '@tonaljs/tonal';
import { INotes, INotesComplete } from './../../../services/interfaces/notes.interface';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-acorde-emprestimo',
  templateUrl: './acorde-emprestimo.component.html',
  styleUrls: ['./acorde-emprestimo.component.css']
})
export class AcordeEmprestimoComponent implements OnInit {
  note: string = '';
  header = ['Grau', 'Acorde', 'Notas', 'Função', 'Substituir'];
  dominante: Body[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
    this.tonalService.currentPreferences.subscribe(value => {
      this.note = value[value.length - 1].tonalidade;
      this.dominante = this.loadDominante(value[value.length - 1].tonalidade);
    });
  }

  loadDominante(note: string): Body[] {
    return [
      {
        Grau: '',
        Acorde: {
          Grau: 'VII-7',
          Acorde: Note.transpose(note, '7M') + 'm7',
          Notas:
          Note.transpose(Note.transpose(note, '7M'), '1P') + ', ' +
          Note.transpose(Note.transpose(note, '7M'), '3m') + ', ' +
          Note.transpose(Note.transpose(note, '7M'), '5P') + ', ' +
          Note.transpose(Note.transpose(note, '7M'), '7m'),
        Cadência: '',
          Escalas: '',
          Extenções: '',
          NotasExtendidas: ''
        },
        Notas: '',
        Função: '',
        Substituir: ''
      },
      {
        Grau: '',
        Acorde: {
          Grau: '#IV-7b5',
          Acorde: Note.transpose(note, '4A') + 'm7b5',
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
        Notas: '',
        Função: '',
        Substituir: ''
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
  Função: string,
  Substituir: string
}