import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IInstruments } from './../../../services/interfaces/instruments.interface';
import { InstrumentsDb } from './../../../services/db/instruments.db';
import { DrawService } from './../../../services/draw.service';
import { ChordBox } from 'vexchords';

@Component({
  selector: 'app-construtor-escalas',
  templateUrl: './construtor-escalas.component.html',
  styleUrls: ['./construtor-escalas.component.css']
})
export class ConstrutorEscalasComponent implements OnInit {
  @ViewChild('drawChordsChart', { static: true }) divDrawChordsChart: ElementRef;
  instruments: IInstruments[] = InstrumentsDb;
  instrument: IInstruments = InstrumentsDb[0];
  // notas checadas
  checkedNotes = [
    { id: 0, note: 'C', checked: false, value: 0 },
    { id: 1, note: 'C#', checked: false, value: 0 },
    { id: 1, note: 'Db', checked: false, value: 0 },
    { id: 2, note: 'D', checked: false, value: 0 },
    { id: 3, note: 'D#', checked: false, value: 0 },
    { id: 3, note: 'Eb', checked: false, value: 0 },
    { id: 4, note: 'E', checked: false, value: 0 },
    { id: 5, note: 'F', checked: false, value: 0 },
    { id: 6, note: 'F#', checked: false, value: 0 },
    { id: 6, note: 'Gb', checked: false, value: 0 },
    { id: 7, note: 'G', checked: false, value: 0 },
    { id: 8, note: 'G#', checked: false, value: 0 },
    { id: 8, note: 'Ab', checked: false, value: 0 },
    { id: 9, note: 'A', checked: false, value: 0 },
    { id: 10, note: 'A#', checked: false, value: 0 },
    { id: 10, note: 'Bb', checked: false, value: 0 },
    { id: 11, note: 'B', checked: false, value: 0 },
  ];
  notasOrdenadas = [];
  notasEscala = [];

  constructor(private drawService: DrawService) { }

  ngOnInit(): void {
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else { this.checkedNotes.find(value => value.note === note).value = 0; }
    this.gerarAcorde();
  }

  gerarAcorde() {
    this.notasEscala.length = 0;
    for (const item of this.checkedNotes.filter(item => item.value > 0).sort((a, b) => { return a.value - b.value })) {
      this.notasEscala.push(item.note);
    }
    this.drawChords();
  }

  onSelectInstrument(item: string): void {
    this.instrument = InstrumentsDb.find(value => value.Name === item);
    this.gerarAcorde();
  }

  drawChords() {
    // const notesTriade = this.drawService.GetNotes(this.acorde);
    this.FindAndDrawChords(this.notasEscala, this.divDrawChordsChart.nativeElement);
  }

  FindAndDrawChords(notes: string[], selector: any) {
    selector.innerHTML = '';
    const escala = this.GeraEscala(notes);
    new ChordBox(selector, {
      width: 200, // canvas width
      height: 420, // canvas height
      numStrings: this.instrument.NumStrings,
      numFrets: 11
    }).draw({
      chord: escala,
      position: 0,
      tuning: this.instrument.Notes
    });
  }

  GeraEscala(notes: string[]): string[] {
    let result = []
    let newInstruments = [];
    for (const nota of this.instrument.Notes) {
      newInstruments.push(nota);
    }
    newInstruments = newInstruments.reverse();
    for (let iCorda = 0; iCorda < newInstruments.length; iCorda++) {
      this.OrdenaNotas(newInstruments[iCorda]);
      for (const iNota of this.notasOrdenadas) {
        if (notes.findIndex(x => x === iNota.note) > -1) {
          result.push([iCorda + 1, iNota.id]);
        }
      }
    }
    return result;
  }

  OrdenaNotas(nota: string) {
    this.notasOrdenadas.length = 0;
    let Notas = [
      { id: 0, note: 'C', checked: false, value: 0 },
      { id: 1, note: 'C#', checked: false, value: 0 },
      { id: 1, note: 'Db', checked: false, value: 0 },
      { id: 2, note: 'D', checked: false, value: 0 },
      { id: 3, note: 'D#', checked: false, value: 0 },
      { id: 3, note: 'Eb', checked: false, value: 0 },
      { id: 4, note: 'E', checked: false, value: 0 },
      { id: 5, note: 'F', checked: false, value: 0 },
      { id: 6, note: 'F#', checked: false, value: 0 },
      { id: 6, note: 'Gb', checked: false, value: 0 },
      { id: 7, note: 'G', checked: false, value: 0 },
      { id: 8, note: 'G#', checked: false, value: 0 },
      { id: 8, note: 'Ab', checked: false, value: 0 },
      { id: 9, note: 'A', checked: false, value: 0 },
      { id: 10, note: 'A#', checked: false, value: 0 },
      { id: 10, note: 'Bb', checked: false, value: 0 },
      { id: 11, note: 'B', checked: false, value: 0 },
    ];;

    const lugarDaNota = Notas.find(item => item.note === nota).id;
    this.notasOrdenadas = [];
    for (const item of Notas.filter(item => item.id >= lugarDaNota)) {
      this.notasOrdenadas.push(item);
    }
    let menorQueANota = [];
    for (const item of Notas.filter(item => item.id < lugarDaNota)) {
      menorQueANota.push(item);
    }
    let valorProxima = 0;
    let count = 0;
    let valorReal = 0;
    // ordenado a Maior Que
    for (const item of this.notasOrdenadas) {
      if (item.id === valorProxima && item.id !== 0) {
        valorReal--;
        this.notasOrdenadas[count].id = valorReal;
      } else {
        valorProxima = this.notasOrdenadas[count].id;
        this.notasOrdenadas[count].id = valorReal;
      }
      valorReal++;
      count++;
    }
    // ordenando a Menor Que
    valorProxima = this.notasOrdenadas[this.notasOrdenadas.length - 1].id;
    count = 0;
    valorReal = this.notasOrdenadas[this.notasOrdenadas.length - 1].id + 1;
    for (const item of menorQueANota) {
      if (item.id === valorProxima && item.id !== 0) {
        valorReal--;
        this.notasOrdenadas.push({ id: valorReal, note: item.note, checked: item.checked, value: item.value });
      } else {
        valorProxima = menorQueANota[count].id;
        this.notasOrdenadas.push({ id: valorReal, note: item.note, checked: item.checked, value: item.value });
      }
      valorReal++;
      count++;
    }
  }

}
