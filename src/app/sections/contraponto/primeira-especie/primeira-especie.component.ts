import { Component } from '@angular/core';
import { Key, Chord, Interval, Note } from '@tonaljs/tonal';
import { TonalService } from '../../../services/tonal.service';

@Component({
  selector: 'app-primeira-especie',
  templateUrl: './primeira-especie.component.html',
  styleUrls: ['./primeira-especie.component.scss']
})
export class PrimeiraEspecieComponent {
  _header: IHeader[] = [{
    Compasso: 'Compasso',
    Acorde: 'Acorde',
    Cantusfirmus: 'Cantus firmus',
    Contraponto: 'Contraponto'
  }];
  _body: IHeader[] = [];
  _cantusFirmus: ICantus[] = [];
  _contraponto: ICantus[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
    this.tonalService.currentPreferences.subscribe(value => {
      const note = value[value.length - 1].tonalidade;
      this.cantusFirmus(note);
      let i = 1;
      this._cantusFirmus.forEach(_ => {
        this._body.push({
          Compasso: i.toString(),
          Acorde: _.acorde,
          Cantusfirmus: _.nota,
          Contraponto: 'Contraponto'
        });
        i++;
      });
    });
  }

  findNote(note: string): string {
    const _chord = Chord.get(note).notes;
    const result = _chord[Math.floor(Math.random() * 3)];
    return result;
  }

  cantusFirmus(note: string) {
    const _key = Key.majorKey(note);

    for (let i = 0; i < 8; i++) {
      if (i === 0 || i === 7) {
        this._cantusFirmus.push({ acorde: _key.chords[0], nota: this.findNote(_key.chords[0]) });
      } else if (i === 6) {
        const _dominant = Math.floor(Math.random() * 2) === 0 ? 4 : 6;
        this._cantusFirmus.push({ acorde: _key.chords[_dominant], nota: this.findNote(_key.chords[_dominant]) });
      } else {
        const _value = _key.chords[Math.floor(Math.random() * 6)];
        this._cantusFirmus.push({ acorde: _value, nota: this.findNote(_value) });
      }

    }

    console.log(this._cantusFirmus);
    this.contraponto();
  }

  //["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"]
  private contraponto(): void {
    for (let i = 0; i < 8; i++) {
      if (i === 0 || i === 7) {
        // Manter uníssono
        this._contraponto.push({ acorde: this._cantusFirmus[i].acorde, nota: this._cantusFirmus[i].nota });
      } else {
        const cfNote = this._cantusFirmus[i].nota;
        const cfInterval = Interval.distance(cfNote, this._cantusFirmus[i - 1].nota);
        let cpNote: string;
        let cpInterval: string;

        if (cfInterval === "3M") {
          // Intervalo de 3ª ascendente
          cpNote = Note.transpose(cfNote, "3M");
          cpInterval = "3M";
        } else {
          // Intervalo de 6ª ascendente
          cpNote = Note.transpose(cfNote, "6M");
          cpInterval = "6M";
        }

        if (i === 1) {
          // Primeira nota, manter uníssono
          this._contraponto.push({ acorde: this._cantusFirmus[i].acorde, nota: this._cantusFirmus[i].nota });
        } else {
          let intervalDirection: number = Math.sign(Interval.semitones(cpInterval) - Interval.semitones(Interval.distance(cpNote, this._contraponto[i - 1].nota)));
          if (intervalDirection === 0) {
            // Manter o mesmo intervalo
            cpNote = Note.transpose(this._contraponto[i - 1].nota, cpInterval);
          } else if (intervalDirection === -1) {
            // Intervalo ascendente
            cpNote = Note.transpose(this._contraponto[i - 1].nota, `${cpInterval}A`);
          } else {
            // Intervalo descendente
            cpNote = Note.transpose(this._contraponto[i - 1].nota, `${cpInterval}d`);
          }

          this._contraponto.push({ acorde: this._cantusFirmus[i].acorde, nota: cpNote });
        }
      }
    }

    console.log(this._contraponto);
  }

}

export interface IHeader {
  Compasso: string;
  Acorde: string;
  Cantusfirmus: string;
  Contraponto: string;
}

export interface ICantus {
  acorde: string;
  nota: string;
}
