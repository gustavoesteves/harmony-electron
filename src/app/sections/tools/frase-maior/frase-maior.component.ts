import { Component, OnInit } from '@angular/core';
import { TonalService } from './../../../services/tonal.service';
import { Note } from '@tonaljs/tonal';
import { Modo } from './../../../services/enums/modo.enum';

@Component({
  selector: 'app-frase-maior',
  templateUrl: './frase-maior.component.html',
  styleUrls: ['./frase-maior.component.css']
})
export class FraseMaiorComponent implements OnInit {
  // botoes
  ligado = 'button primary small';
  desligado = 'button small';
  btnGrau = this.ligado;
  btnAcorde = this.desligado;
  modoNatural = this.ligado;
  modoSetima = this.desligado;
  modoInversao = this.desligado;
  modoAlteracao = this.desligado;
  modoSecundaria = this.desligado;
  modoSub = this.desligado;
  comp4 = 'button primary small';
  comp6 = 'button small';
  comp8 = 'button small';
  comp12 = 'button small';
  comp16 = 'button small';
  final1 = 'button primary small';
  final5 = 'button small';
  // tables
  notes = [
    { note: 'Imaj7' },
    { note: 'IIm7' },
    { note: 'IIIm7' },
    { note: 'IVmaj7' },
    { note: 'V7' },
    { note: 'VIm7' },
    { note: 'VIIm7b5' }
  ];
  header = ['Compasso', 'Acorde'];
  fraseGerada = [];
  // outras variaveis
  note = '';
  modoFrase: Modo = Modo.Natural;
  compNumber = 4;
  finalNote = 0;

  constructor(private tonalService: TonalService) {
    this.tonalService.currentPreferences.subscribe(value => {
      this.note = value[value.length - 1].tonalidade;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Tratamento de botoes e artefatos da tela
   */

  changeView(ativo: string) {
    if (ativo === 'acorde') {
      this.btnGrau = 'button small';
      this.btnAcorde = 'button primary small';
      this.changeAcorde();
    }
    else if (ativo === 'grau') {
      this.btnGrau = 'button primary small';
      this.btnAcorde = 'button small';
      this.changeGrau();
    }
  }

  changeFinalization(value: number) {
    this.finalNote = value;
    if (value === 0) {
      this.final1 = 'button primary small';
      this.final5 = 'button small';
    } else if (value === 4) {
      this.final1 = 'button small';
      this.final5 = 'button primary small';
    }
  }

  changeModoFrase(modo: Modo) {
    this.modoFrase = modo;
    if (modo === Modo.Natural) {
      this.modoNatural = 'button primary small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Setima) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button primary small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Inversão) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button primary small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Alteração) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button primary small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Secundária) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button primary small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Subdominante) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button primary small';
    }
  }

  changeCompasso(value: number) {
    if (value === 4) {
      this.comp4 = 'button primary small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 4;
    }
    else if (value === 6) {
      this.comp4 = 'button small';
      this.comp6 = 'button primary small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 6;
    }
    else if (value === 8) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button primary small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 8;
    }
    else if (value === 12) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button primary small';
      this.comp16 = 'button small';
      this.compNumber = 12;
    }
    else if (value === 16) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button primary small';
      this.compNumber = 16;
    }
  }

  changeAcorde() {
    this.notes[0].note = this.note + 'maj7';
    this.notes[1].note = Note.transpose(this.note, '2M') + 'm7';
    this.notes[2].note = Note.transpose(this.note, '3M') + 'm7';
    this.notes[3].note = Note.transpose(this.note, '4M') + 'maj7';
    this.notes[4].note = Note.transpose(this.note, '5M') + '7';
    this.notes[5].note = Note.transpose(this.note, '6M') + 'm7';
    this.notes[6].note = Note.transpose(this.note, '7M') + 'm7b5';
  }

  changeGrau() {
    this.notes[0].note = 'Imaj7';
    this.notes[1].note = 'IIm7';
    this.notes[2].note = 'IIIm7';
    this.notes[3].note = 'IVmaj7';
    this.notes[4].note = 'V7';
    this.notes[5].note = 'VIm7';
    this.notes[6].note = 'VIIm7b5';
  }

  /**
   * Construtor de frases
   */

  loadChords(chord: number) {
    const chords = [];
    let count = 0;
    switch (chord) {
      case 0:
        chords.push(this.note);
        if (this.modoFrase > 1) {
          chords.push(this.note + 'maj7');
        }
        if (this.modoFrase > 2) {
          chords.push(this.note + '/' + Note.transpose(this.note, '3M'));
          chords.push(this.note + '/' + Note.transpose(this.note, '5M'));
          chords.push(this.note + '/' + Note.transpose(this.note, '7M'));
        }
        if (this.modoFrase > 3) {
          chords.push(this.note + 'maj9');
          chords.push(this.note + 'maj13');
          chords.push(this.note + '6');
          chords.push(this.note + '6/9');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + this.note + '7' + '&#8594;' + Note.transpose(this.note, '4M') + 'maj7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 1:
        chords.push(Note.transpose(this.note, '2M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '2M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '2M') + 'm' + '/' + Note.transpose(this.note, '4M'));
          chords.push(Note.transpose(this.note, '2M') + 'm' + '/' + Note.transpose(this.note, '6M'));
          chords.push(Note.transpose(this.note, '2M') + 'm' + '/' + Note.transpose(this.note, '1M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '2M') + 'm9');
          chords.push(Note.transpose(this.note, '2M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '2M') + '7' + '&#8594;' + Note.transpose(this.note, '5M') + '7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 2:
        chords.push(Note.transpose(this.note, '3M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '3M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '3M') + 'm' + '/' + Note.transpose(this.note, '5M'));
          chords.push(Note.transpose(this.note, '3M') + 'm' + '/' + Note.transpose(this.note, '7M'));
          chords.push(Note.transpose(this.note, '3M') + 'm' + '/' + Note.transpose(this.note, '2M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '3M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '3M') + '7' + '&#8594;' + Note.transpose(this.note, '6M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 3:
        chords.push(Note.transpose(this.note, '4M'));
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '4M') + 'maj7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '6M'));
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '1M'));
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '3M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '4M') + 'maj9');
          chords.push(Note.transpose(this.note, '4M') + 'maj13');
          chords.push(Note.transpose(this.note, '4M') + '6');
          chords.push(Note.transpose(this.note, '4M') + '6/9');
          chords.push(Note.transpose(this.note, '4M') + 'maj7#11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '4M') + '7' + '&#8594;' + Note.transpose(this.note, '3M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 4:
        chords.push(Note.transpose(this.note, '5M'));
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '5M') + '7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '5M') + '/' + Note.transpose(this.note, '7M'));
          chords.push(Note.transpose(this.note, '5M') + '/' + Note.transpose(this.note, '2M'));
          chords.push(Note.transpose(this.note, '5M') + '/' + Note.transpose(this.note, '4M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '5M') + '6');
          chords.push(Note.transpose(this.note, '5M') + '9');
          chords.push(Note.transpose(this.note, '5M') + '6/9');
        }
        if (this.modoFrase > 4) {
          chords.push(Note.transpose(this.note, '5M') + '7');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 5:
        chords.push(Note.transpose(this.note, '6M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '6M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '6M') + 'm' + '/' + Note.transpose(this.note, '1M'));
          chords.push(Note.transpose(this.note, '6M') + 'm' + '/' + Note.transpose(this.note, '3M'));
          chords.push(Note.transpose(this.note, '6M') + 'm' + '/' + Note.transpose(this.note, '5M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '6M') + 'm9');
          chords.push(Note.transpose(this.note, '6M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '6M') + '7' + '&#8594;' + Note.transpose(this.note, '2M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 6:
        chords.push(Note.transpose(this.note, '7M') + 'dim');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '7M') + 'm7b5');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '7M') + 'dim' + '/' + Note.transpose(this.note, '2M'));
          chords.push(Note.transpose(this.note, '7M') + 'dim' + '/' + Note.transpose(this.note, '4M'));
          chords.push(Note.transpose(this.note, '7M') + 'dim' + '/' + Note.transpose(this.note, '6M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '7M') + 'm9b5');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '7M') + '7' + '&#8594;' + Note.transpose(this.note, '3M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
    }
  }

  fraseGenarator() {
    this.fraseGerada = [];
    let firstChord = Math.floor(Math.random() * 6);
    let finalizaTonica = 0;
    this.fraseGerada.push({ Compasso: 1, Acorde: this.loadChords(firstChord) });
    for (let index = 1; index < this.compNumber; index++) {
      if (index === (this.compNumber - 2)) {
        if (this.finalNote === 0) {
          // verificando o antipenultimo acorde
          switch (firstChord) {
            case 0:
              finalizaTonica = Math.floor(Math.random() * 4);
              switch (finalizaTonica) {
                case 0:
                  firstChord = this.findNext(0);
                  break;
                case 1:
                  firstChord = this.findNext(1);
                  break;
                case 1:
                  firstChord = this.findNext(4);
                  break;
                case 1:
                  firstChord = this.findNext(6);
                  break;
              }
              break;
            case 1:
              firstChord = 4;
              break;
            case 2:
              finalizaTonica = Math.floor(Math.random() * 2);
              switch (finalizaTonica) {
                case 0:
                  firstChord = this.findNext(1);
                  break;
                case 1:
                  firstChord = this.findNext(3);
                  break;
              }
              break;
            case 3:
              firstChord = 1;
              break;
            case 4:
              firstChord = 5;
              break;
            case 5:
              finalizaTonica = Math.floor(Math.random() * 2);
              switch (finalizaTonica) {
                case 0:
                  firstChord = this.findNext(1);
                  break;
                case 1:
                  firstChord = this.findNext(3);
                  break;
              }
              break;
            case 6:

              break;
          }
        }
        else if (this.finalNote === 4) { }
      }
      else if (index === (this.compNumber - 1)) {
        firstChord = this.finalNote;
      }
      else {
        firstChord = this.findNext(firstChord);
      }
      this.fraseGerada.push({ Compasso: index + 1, Acorde: this.loadChords(firstChord) });
    }
  }

  findNext(chord: number) {
    if (this.modoFrase === Modo.Secundária) {
      switch (chord) {
        case 0:
          chord = 3;
          break;
        case 1:
          chord = 4;
          break;
        case 2:
          chord = 5;
          break;
        case 3:
          chord = 2;
          break;
        case 5:
          chord = 1;
          break;
        case 6:
          chord = 2;
          break;
      }
    }
    if (chord !== 0) {
      if (chord === 1) {
        // I V
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 0;
          case 1:
            return 4;
          default:
            break;
        }
      }
      if (chord === 2) {
        // II IV VI
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            return 1;
          case 1:
            return 3;
          case 2:
            return 5;
          default:
            break;
        }
      }
      if (chord === 3) {
        // I II 
        return Math.floor(Math.random() * 2);
      }
      if (chord === 4) {
        // I VI VII
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            return 0;
          case 1:
            return 5;
          case 2:
            return 6;
          default:
            break;
        }
      }
      if (chord === 5) {
        // II IV
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 1;
          case 1:
            return 3;
          default:
            break;
        }
      }
      if (chord === 6) {
        // I VI
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 0;
          case 1:
            return 5;
          default:
            break;
        }
      }
    }
    else {
      return Math.floor(Math.random() * 6);
    }

  }

}
