import { IInstruments } from "./instruments.interface";
import { INotes, INotesComplete } from "./notes.interface";

export interface IPreferences {
    menu: string;
    tonalidade: string;
    instrumento: IInstruments;
    acorde: INotes;
    extensao: INotesComplete;
}