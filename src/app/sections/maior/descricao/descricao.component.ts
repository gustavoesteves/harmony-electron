import { Component, OnInit } from '@angular/core';
import { Note } from '@tonaljs/tonal';
import { TonalService } from './../../../services/tonal.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {
  ligado = 'button primary small';
  desligado = 'button small';
  btnGrau = this.ligado;
  btnAcorde = this.desligado;
  note = '';
  notes = [
    { note: 'Imaj7' },
    { note: 'IIm7' },
    { note: 'IIIm7' },
    { note: 'IVmaj7' },
    { note: 'V7' },
    { note: 'VIm7' },
    { note: 'VIIm7b5' }
  ];
  notasDescritivas = [
    { note: 'Imaj7' },
    { note: 'IIm7' },
    { note: 'IIIm7' },
    { note: 'IVmaj7' },
    { note: 'V7' },
    { note: 'VIm7' },
    { note: 'VIIm7b5' }
  ];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      this.note = value[value.length - 1];
      this.notasDescritivas[0].note = this.note;
      this.notasDescritivas[1].note = Note.transpose(this.note, '2M');
      this.notasDescritivas[2].note = Note.transpose(this.note, '3M');
      this.notasDescritivas[3].note = Note.transpose(this.note, '4M');
      this.notasDescritivas[4].note = Note.transpose(this.note, '5M');
      this.notasDescritivas[5].note = Note.transpose(this.note, '6M');
      this.notasDescritivas[6].note = Note.transpose(this.note, '7M');
    });
  }

  ngOnInit(): void {
  }

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

}
