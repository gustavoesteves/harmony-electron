import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chord, Scale, Note } from '@tonaljs/tonal';
import { Escalas } from './db/escalas.db';
import { IEscala } from './interfaces/escala.interface';
import { IPreferences } from './interfaces/preferences.interface';
import { IInstruments } from './interfaces/instruments.interface';
import { InstrumentsDb } from './db/instruments.db';

@Injectable({
  providedIn: 'root'
})
export class TonalService {

  //guarda as preferencias do sistema
  private preferences = new BehaviorSubject<IPreferences[]>([]);
  currentPreferences = this.preferences.asObservable();

  constructor() { }

  pushPreferencesInit(preferences: IPreferences) {
    this.preferences.next([preferences]);
  }

  pushPreferences(preferences: IPreferences) {
    //gravando valores das preferencias
    let newPreferences = this.preferences.value;
    newPreferences.push(preferences);
    this.preferences.next(newPreferences);
  }

  pushInstrument(instrument: string, preferences: IPreferences) {
    //buscando dados do instrumento
    let selectedInstrument: IInstruments = { Name: '', Notes: [], NumStrings: 0 };
    selectedInstrument = InstrumentsDb.find(value => value.Name === instrument);
    //gravando valores das preferencias
    let newPreferences = this.preferences.value;
    newPreferences[0].instrumento = selectedInstrument;
    newPreferences.push(preferences);
    this.preferences.next(newPreferences);
  }

  /**
   * Outras funções
   */

  returnNotes(arrayNotes: string[]) {
    let notes = '';
    for (const iterator of arrayNotes) {
      notes += iterator + ', ';
    }
    return notes.substr(0, notes.length - 2);
  }

  returnExtended(note: string) {
    let result = '';
    for (const chord of Chord.extended(note)) {
      result += chord + ' <br>';
    }
    return result;
  }

  GetSeventhChord(notes: string[]) {
    let result = '';
    for (let index = 0; index < 4; index++) {
      result += notes[index] + ', ';
    }

    return result.substr(0, result.length - 2);
  }

  GetScales(note: string, scales: string[], acordes: string[], notas: string[]) {
    let reuslt = '';
    if (scales.length > 0) {
      for (const scale of scales) {
        reuslt += scale + this.GetScale(note, scale);
      }
    } else if (acordes.length > 0) {
      for (const acorde of acordes) {
        for (const escala of Escalas) {
          if (escala.Acordes.find(_ => _ === acorde)) {
            reuslt += escala.Nome + this.GetScale(note, escala.Nome);
          }
        }
      }
    } else if (notas.length > 0) {
      let temEscala = false;
      for (const escala of Escalas) {
        for (const nota of notas) {
          if (escala.Notas.find(_ => _ === nota) === undefined) {
            temEscala = false;
            break;
          } else {
            temEscala = true;
          }
        }
        if (temEscala) {
          reuslt += escala.Nome + this.GetScale(note, escala.Nome);
        }
      }
    }
    return reuslt;
  }

  GetScale(note: string, scala: string): string {
    let selectedScale: IEscala = Escalas.find(_ => _.Nome === scala);
    let result = '<br> (';
    for (const intervalo of selectedScale.Notas) {
      result += Note.transpose(note, intervalo) + ', ';
    }
    result = result.substr(0, result.length - 2) + ')';
    result += '<br>';
    return result;
  }

  GetScalesTotal(chord: string) {
    let result = '';
    for (const scale of Chord.chordScales(chord)) {
      result += scale + ' (';
      const notes = Scale.get(Chord.get(chord).tonic + ' ' + scale).notes;
      for (const note of notes) {
        result += note + ', ';
      }
      result = result.substr(0, result.length - 2);
      result += ') <br>';
    }

    return result.substr(0, result.length - 2);
  }

  GetExtended(note: string) {
    let result = '';
    for (const chord of Chord.extended(note)) {
      result += chord + ' (';
      const notes = Chord.get(chord).notes;
      for (const iterator of notes) {
        result += iterator + ', ';
      }
      result = result.substr(0, result.length - 2);
      result += ') <br>';
    }

    return result.substr(0, result.length - 2);
  }
}
