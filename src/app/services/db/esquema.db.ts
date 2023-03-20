import { IEsquema } from '../interfaces/esquema.interface';

export const Esquema: IEsquema[] = [
    {
        Nome: 'Maior',
        Frase1: { Modo: '+', Tonalidade: '1M' }, Frase2: { Modo: '+', Tonalidade: '5M' }, Frase3: { Modo: '+', Tonalidade: '4M' }
    },
    {
        Nome: 'Menor A',
        Frase1: { Modo: '-', Tonalidade: '1M' }, Frase2: { Modo: '+', Tonalidade: '3m' }, Frase3: { Modo: '+', Tonalidade: '1M' }
    },
    {
        Nome: 'Menor B',
        Frase1: { Modo: '+', Tonalidade: '1M' }, Frase2: { Modo: '-', Tonalidade: '6M' }, Frase3: { Modo: '+', Tonalidade: '4M' }
    },
];
