export interface INotes {
    Grau: string;
    Acorde: string;
}

export interface INotesComplete extends INotes {
    Notas: string;
    Escalas: string;
    Extenções: string;
    NotasExtendidas: string;
    Cadência: string;
}
