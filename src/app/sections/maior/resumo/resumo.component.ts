import { Component, OnInit } from '@angular/core';
import { Note } from '@tonaljs/tonal';
import { INotes } from './../../../services/interfaces/notes.interface';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  header = ['Grau', 'Acorde'];
  headerResolve = ['Grau', 'Acorde', 'Resolve'];
  headerResumoFuncao = ['Resolve', 'Dominante', 'Subdominante', 'Diminuto'];
  headerFuncaoGrau = ['Grau', 'Acorde', 'Grau Dom', 'Acorde', 'Grau Sub', 'Acorde', 'Grau Dim'];
  majorList: INotes[] = [];
  majorListDominanteSecundaria: INotes[] = [];
  majorListProgressao: INotes[] = [];
  majorSubdominante: INotes[] = [];
  majorDiminuto: INotes[] = [];
  majorListHomonimo: INotes[] = [];
  notes: INotes[] = [];
  
  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this.majorList = this.GetMajorMode(note);
      this.majorListDominanteSecundaria = this.GetDominanteSecundaria(note);
      this.majorListProgressao = this.GetProgressao(note);
      this.majorSubdominante = this.GetSubdominante(note);
      this.majorDiminuto = this.GetDiminuto(note);
      this.notes = this.GetProgression(note);
    });
  }

  GetProgression(note: string) {
    const _result: INotes[] = [];

    _result.push({
      Grau: 'I',
      Acorde: note + 'Maj7'
    });

    _result.push({
      Grau: 'II',
      Acorde: Note.transpose(note, '2M') + 'm7'
    });

    _result.push({
      Grau: 'III',
      Acorde: Note.transpose(note, '3M') + 'm7'
    });

    _result.push({
      Grau: 'IV',
      Acorde: Note.transpose(note, '4P') + 'Maj7'
    });

    _result.push({
      Grau: 'V',
      Acorde: Note.transpose(note, '5P') + '7'
    });

    _result.push({
      Grau: 'VI',
      Acorde: Note.transpose(note, '6M') + 'm7'
    });

    _result.push({
      Grau: 'VII',
      Acorde: Note.transpose(note, '7M') + 'm7b5'
    });

    return _result;
  }

  GetMajorMode(note: string) {
    const majorMode: INotes[] = [];
    let chordNote = '';

    // Imaj7
    majorMode.push({
      Grau: 'I',
      Acorde: note + 'maj7'
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    majorMode.push({
      Grau: 'II-',
      Acorde: chordNote + 'm7'
    });

    // IIIm7
    chordNote = Note.transpose(note, '3M');
    majorMode.push({
      Grau: 'III-',
      Acorde: chordNote + 'm7'
    });

    // IVmaj7
    chordNote = Note.transpose(note, '4M');
    majorMode.push({
      Grau: 'IV',
      Acorde: chordNote + 'maj7'
    });

    // V7
    chordNote = Note.transpose(note, '5M');
    majorMode.push({
      Grau: 'V',
      Acorde: chordNote + '7'
    });

    // VIm7
    chordNote = Note.transpose(note, '6M');
    majorMode.push({
      Grau: 'VI-',
      Acorde: chordNote + 'm7'
    });

    // VIm7
    chordNote = Note.transpose(note, '7M');
    majorMode.push({
      Grau: 'VII- b5',
      Acorde: chordNote + 'm7b5'
    });

    return majorMode;
  }

  GetDominanteSecundaria(note: string) {
    const majorMode: INoteResolve[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'V/IV',
      Acorde: note + '7',
      Resolve: Note.transpose(note, '4P') + 'maj7'
    });

    majorMode.push({
      Grau: 'V/V',
      Acorde: Note.transpose(note, '2M') + '7',
      Resolve: Note.transpose(note, '5P') + '7'
    });

    majorMode.push({
      Grau: 'V/VI',
      Acorde: Note.transpose(note, '3M') + '7',
      Resolve: Note.transpose(note, '6M') + 'm7'
    });

    majorMode.push({
      Grau: 'V/II',
      Acorde: Note.transpose(note, '6M') + '7',
      Resolve: Note.transpose(note, '2M') + 'm7'
    });

    majorMode.push({
      Grau: 'V/III ou V7b5/III',
      Acorde: Note.transpose(note, '7M') + '7',
      Resolve: Note.transpose(note, '3M') + 'm7'
    });

    return majorMode;
  }

  GetProgressao(note: string) {
    const majorMode: INoteResolve[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'II-7b5' + ' &#8594; ' + 'V/II ',
      Acorde: Note.transpose(note, '3M') + 'm7b5',
      Resolve: Note.transpose(note, '6M') + '7'
    });

    majorMode.push({
      Grau: 'II-7b5' + ' &#8594; ' + 'V/III',
      Acorde: Note.transpose(note, '4A') + 'm7b5',
      Resolve: Note.transpose(note, '7M') + '7'
    });

    majorMode.push({
      Grau: 'II-' + ' &#8594; ' + 'V/IV',
      Acorde: Note.transpose(note, '5P') + 'm7',
      Resolve: note + '7'
    });

    majorMode.push({
      Grau: 'II-' + ' &#8594; ' + 'V/V' ,
      Acorde: Note.transpose(note, '6M') + 'm7',
      Resolve: Note.transpose(note, '2M') + '7'
    });

    majorMode.push({
      Grau: 'II-7b5' + ' &#8594; ' + 'V/VI',
      Acorde: Note.transpose(note, '7M') + 'm7b5',
      Resolve: Note.transpose(note, '3M') + '7'
    });
    
    return majorMode;
  }

  GetSubdominante(note: string) {
    const majorMode: INoteResolve[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'SubV/II',
      Acorde: Note.transpose(note, '3m') + '7',
      Resolve: Note.transpose(note, '2M') + 'm7'
    });

    majorMode.push({
      Grau: 'SubV/III',
      Acorde: Note.transpose(note, '4P') + '7',
      Resolve: Note.transpose(note, '3M') + 'm7'
    });

    majorMode.push({
      Grau: 'SubV/IV',
      Acorde: Note.transpose(note, '5d') + '7',
      Resolve: Note.transpose(note, '4P') + 'maj7'
    });

    majorMode.push({
      Grau: 'SubV/V',
      Acorde: Note.transpose(note, '6m') + '7',
      Resolve: Note.transpose(note, '5P') + '7'
    });

    majorMode.push({
      Grau: 'SubV/VI',
      Acorde: Note.transpose(note, '7m') + '7',
      Resolve: Note.transpose(note, '6M') + 'm7'
    });

    return majorMode;
  }

  GetDiminuto(note: string) {
    const majorMode: INoteResolve[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'DimV',
      Acorde: Note.transpose(note, '7M') + 'dim',
      Resolve: note + 'maj7'
    });

    majorMode.push({
      Grau: 'DimV/II',
      Acorde: Note.transpose(note, '1A') + 'dim',
      Resolve: Note.transpose(note, '2M') + 'm7'
    });

    majorMode.push({
      Grau: 'DimV/III',
      Acorde: Note.transpose(note, '2A') + 'dim',
      Resolve: Note.transpose(note, '3M') + 'm7'
    });

    majorMode.push({
      Grau: 'DimV/IV',
      Acorde: Note.transpose(note, '3M') + 'dim',
      Resolve: Note.transpose(note, '4P') + 'maj7'
    });

    majorMode.push({
      Grau: 'DimV/V',
      Acorde: Note.transpose(note, '4A') + 'dim',
      Resolve: Note.transpose(note, '5P') + '7'
    });

    majorMode.push({
      Grau: 'DimV/VI',
      Acorde: Note.transpose(note, '5A') + 'dim',
      Resolve: Note.transpose(note, '6M') + 'm7'
    });

    return majorMode;
  }

  loadChords(chord: INotes) {
    //this.tonalService.pushChord(chord);
  }

}

interface INoteResolve extends INotes {
  Resolve: string;
}