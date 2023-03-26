import { IInstruments } from '../interfaces/instruments.interface';

export const InstrumentsDb: IInstruments[] = [
    { Name: 'Piano', Notes: [''], NumStrings: 0 },
    { Name: 'Baixo 4 cordas', Notes: ['E', 'A', 'D', 'G'], NumStrings: 4 },
    { Name: 'Baixo 5 cordas', Notes: ['B', 'E', 'A', 'D', 'G'], NumStrings: 5 },
    { Name: 'Baixo 6 cordas', Notes: ['B', 'E', 'A', 'D', 'G', 'C'], NumStrings: 6 },
    { Name: 'Bandolim 8 cordas', Notes: ['G', 'D', 'A', 'E'], NumStrings: 4 },
    { Name: 'Bandolim 10 cordas', Notes: ['C', 'G', 'D', 'A', 'E'], NumStrings: 5 },
    { Name: 'Cavaquinho', Notes: ['D', 'G', 'B', 'D'], NumStrings: 4 },
    { Name: 'Violão', Notes: ['E', 'A', 'D', 'G', 'B', 'E'], NumStrings: 6 },
    { Name: 'Violão 6a em D', Notes: ['D', 'A', 'D', 'G', 'B', 'E'], NumStrings: 6 },
    { Name: 'Violão 7a em B', Notes: ['B', 'E', 'A', 'D', 'G', 'B', 'E'], NumStrings: 7 },
    { Name: 'Violão 7a em C', Notes: ['C', 'E', 'A', 'D', 'G', 'B', 'E'], NumStrings: 7 },
    { Name: 'Violão D aberto', Notes: ['D', 'G', 'C', 'F', 'A', 'D'], NumStrings: 6 },
];
