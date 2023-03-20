import { Injectable } from '@angular/core';
import { IEsquema } from '../interfaces/esquema.interface';
import { IPhrases } from '../interfaces/phrases.interface';
import { IRondo } from '../interfaces/rondo.interface';
import { Note } from '@tonaljs/tonal';
import { TonalService } from '../tonal.service';
import { MajorPhrase1 } from '../db/major.phrase1.db';
import { MajorPhrase2 } from '../db/major.phrase2.db';
import { MajorPhrase3 } from '../db/major.phrase3.db';
import { MajorPhrase4 } from '../db/major.phrase4.db';
import { MainorPhrase1 } from '../db/mainor.phrase1.db';
import { MainorPhrase2 } from '../db/mainor.phrase2.db';
import { MainorPhrase3 } from '../db/mainor.phrase3.db';
import { MainorPhrase4 } from '../db/mainor.phrase4.db';
import { BehaviorSubject } from 'rxjs';
import { Esquema } from '../db/esquema.db';

@Injectable({
    providedIn: 'root'
})
export class Chorinho {

    // guarda o esquema
    private esquema = new BehaviorSubject<IEsquema[]>([]);
    currentEsquema = this.esquema.asObservable();

    // guarda o frase Romana
    private frase = new BehaviorSubject<IPhrases[][]>([]);
    currentFrase = this.frase.asObservable();

    // guarda o motivo e acordes
    private motivoChords = new BehaviorSubject<IRondo[][]>([]);
    currentMotivoChords = this.motivoChords.asObservable();

    constructor(private tonalService: TonalService) { }

    BuildChordProgressionInit() {
        const esquema = Esquema[0];
        this.esquema.next([esquema]);
        this.GetCompasso(esquema, this.GetMotivoInit(esquema), 'C');
    }

    GetMotivoInit(esquema: IEsquema): IPhrases[] {
        const newMotivo: IPhrases[] = [];
        newMotivo.push(this.BuildPhrase(esquema.Frase1.Modo));
        newMotivo.push(this.BuildPhrase(esquema.Frase2.Modo));
        newMotivo.push(this.BuildPhrase(esquema.Frase3.Modo));
        this.frase.next([newMotivo]);
        return newMotivo;
    }

    pushEsquema(esquema: IEsquema) {
        this.esquema.next([esquema]);
    }

    PushMotivoChords(esquema: IRondo[]) {
        this.motivoChords.next([esquema]);
    }

    pushFrase(esquema: IPhrases[]) {
        this.frase.next([esquema]);
    }

    public BuildPhrase(modo: string): IPhrases {
        const result: IPhrases = { Comp: [] };
        if (modo === '+') {
            let f = MajorPhrase1[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MajorPhrase2[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MajorPhrase3[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MajorPhrase4[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
        } else {
            let f = MainorPhrase1[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MainorPhrase2[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MainorPhrase3[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
            f = MainorPhrase4[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
            for (const iterator of f.Comp) {
                result.Comp.push(iterator);
            }
        }
        return result;
    }

    ChangeEsquema(esquema: IEsquema, frase: IPhrases[], note: string) {
        const newFrase: IPhrases[] = [];
        newFrase.push(this.BuildPhrase(esquema.Frase1.Modo));
        newFrase.push(this.BuildPhrase(esquema.Frase2.Modo));
        newFrase.push(this.BuildPhrase(esquema.Frase3.Modo));
        this.pushFrase(newFrase);
        this.GetCompasso(esquema, newFrase, note);
    }

    GetCompasso(esquema: IEsquema, frase: IPhrases[], note: string) {
        const result: IRondo[] = [
            { Compasso: '1', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '2', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '3', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '4', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '5', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '6', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '7', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '8', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '9', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '10', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '11', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '12', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '13', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '14', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '15', Frase1: '', Frase2: '', Frase3: '' },
            { Compasso: '16', Frase1: '', Frase2: '', Frase3: '' }
        ];
        for (let iMotivo = 0; iMotivo < frase.length; iMotivo++) {
            if (iMotivo === 0) {
                for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
                    result[iCompasso - 1].Frase1 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
                        this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), note);
                }
            } else if (iMotivo === 1) {
                for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
                    result[iCompasso - 1].Frase2 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
                        this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(note, esquema.Frase2.Tonalidade));
                }
            } else {
                for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
                    result[iCompasso - 1].Frase3 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
                        this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(note, esquema.Frase3.Tonalidade));
                }
            }
        }
        this.PushMotivoChords(result);
    }

    GetAllChords(chord: string, note: string): string {
        if (chord.indexOf(',') !== -1) {
            let result = '';
            result = this.GetChordName(chord.substr(0, chord.indexOf(',')), note);
            return result + ', ' + this.GetChordName(chord.substr(chord.indexOf(',') + 1, chord.length), note);
        } else {
            return this.GetChordName(chord, note);
        }
    }

    GetChordName(chord: string, note: string): string {
        switch (chord) {
            case 'I': {
                return note + 'maj7';
            }
            case 'II': {
                return Note.transpose(note, '2M') + 'm7';
            }
            case 'III': {
                return Note.transpose(note, '3M') + 'm7';
            }
            case 'IV': {
                return Note.transpose(note, '4M') + 'maj7';
            }
            case 'V': {
                return Note.transpose(note, '5M') + '7';
            }
            case 'VI': {
                return Note.transpose(note, '6M') + 'm7';
            }
            case 'VII': {
                return Note.transpose(note, '7M') + 'm7b5';
            }
            case 'V/II': {
                return Note.transpose(note, '6M') + '7';
            }
            case 'V/III': {
                return Note.transpose(note, '7M') + '7';
            }
            case 'V/IV': {
                return note + '7';
            }
            case 'V/V': {
                return Note.transpose(note, '2M') + '7';
            }
            case 'V/VI': {
                return Note.transpose(note, '3M') + '7';
            }
            case 'I6': {
                return Note.transpose(note, '3M') + '/' + note;
            }
            case 'I4': {
                return Note.transpose(note, '5M') + '/' + note;
            }
            case 'bIIIo': {
                return Note.transpose(note, '3m') + 'dim7';
            }
            case 'Vo/II': {
                return Note.transpose(note, '2m') + 'dim7';
            }
            case 'Vo/III': {
                return Note.transpose(note, '3m') + 'dim7';
            }
            case 'Vo/V': {
                return Note.transpose(note, '5m') + 'dim7';
            }
            case 'IVm': {
                return Note.transpose(note, '4M') + 'm7';
            }
            case 'Im': {
                return note + 'm7';
            }
            case 'IIm': {
                return Note.transpose(note, '2M') + 'm7b5';
            }
            case 'IIIM': {
                return Note.transpose(note, '3M') + 'maj7';
            }
            case 'Vm': {
                return Note.transpose(note, '5M') + 'm7';
            }
            case 'VIM': {
                return Note.transpose(note, '6M') + 'maj7';
            }
            case 'bII': {
                return Note.transpose(note, '2m') + '+5';
            }
            default: {
                break;
            }
        }
    }
}