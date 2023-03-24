import { IInstruments } from "./instruments.interface";

export interface IPreferences {
    tonalidade: string;
    instrumento: IInstruments[];
}