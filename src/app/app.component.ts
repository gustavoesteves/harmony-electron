import { Component, OnInit } from '@angular/core';
import { InstrumentsDb } from './services/db/instruments.db';
import { IPreferences } from './services/interfaces/preferences.interface';
import { TonalService } from './services/tonal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebar = '';
  harmonia = 'opener';
  config = 'opener';

  modoMaior = 'opener';
  modoMenor = 'opener';
  modoModal = 'opener';
  menuOutrasAbordagens = 'opener';
  classico = 'opener';
  duasVozes = 'opener';
  linhaMelodica = 'opener';

  menuSelecionado: IConfigMenu[] = [
    { Name: 'maior', Status: '' },
    { Name: 'optional-chods', Status: '' },
    { Name: 'secondary-dominants', Status: '' },
    { Name: 'progressao-segunda-quinta', Status: '' },
    { Name: 'substitute-dominants', Status: '' },
    { Name: 'natural', Status: '' },
    { Name: 'hamonico', Status: '' },
    { Name: 'melodico', Status: '' },
    { Name: 'dorico', Status: '' },
    { Name: 'frigio', Status: '' },
    { Name: 'descricao-maior', Status: '' },
    { Name: 'descricao-menor', Status: '' },
    { Name: 'construtor-acordes', Status: '' },
    { Name: 'construtor-escalas', Status: '' },
    { Name: 'pesquisa-escalas', Status: '' },
    { Name: 'modulacao', Status: '' },
    { Name: 'choro', Status: '' },
    { Name: 'tabela-tonalidades', Status: '' },
    { Name: 'harmonia-aleatoria', Status: '' },
    { Name: 'harmonia-negativa', Status: '' },
    { Name: 'acorde-emprestimo', Status: '' },
    { Name: 'resumo', Status: '' },
  ];

  _preferences: IPreferences = 
    {
      menu: 'home',
      tonalidade: 'C',
      instrumento: {
        Name: InstrumentsDb[0].Name,
        Notes: InstrumentsDb[0].Notes,
        NumStrings: InstrumentsDb[0].NumStrings
      },
      acorde: {
        Acorde: '',
        Grau: ''
      },
      extensao: {
        Acorde: '',
        Cadência: '',
        Escalas: '',
        Extenções: '',
        Grau: '',
        Notas: '',
        NotasExtendidas: ''
      }
    };

  constructor(private tonalService: TonalService) {
    this.tonalService.pushPreferencesInit(this._preferences);
  }

  ngOnInit() {
    this.tonalService.currentPreferences.subscribe(value => {
      this._preferences =value[value.length - 1];
    });
  }

  onClickDraw() { }

  changeMenu(menu: string) {
    for (const menu of this.menuSelecionado) {
      menu.Status = '';
    }
    this.menuSelecionado.find(_ => _.Name === menu).Status = 'ActiveMenu';

    this._preferences.menu = menu;
    this.tonalService.pushPreferences(this._preferences);
  }

  openMenu(menu: string) {
    if (menu === 'modoMaior') {
      this.modoMaior = this.modoMaior === 'opener' ? 'opener active' : 'opener';
      menu = 'descricao-maior';
    }
    if (menu === 'modoMenor') {
      this.modoMenor = this.modoMenor === 'opener' ? 'opener active' : 'opener';
      menu = 'descricao-menor';
    }
    if (menu === 'menuOutrasAbordagens') {
      this.menuOutrasAbordagens = this.menuOutrasAbordagens === 'opener' ? 'opener active' : 'opener';
    }
    if (menu === 'duasVozes') {
      this.duasVozes = this.duasVozes === 'opener' ? 'opener active' : 'opener';
    }
    if (menu === 'linhaMelodica') {
      this.linhaMelodica = this.linhaMelodica === 'opener' ? 'opener active' : 'opener';
    }

    if (menu === 'harmonia') {
      this.harmonia = this.harmonia === "opener" ? 'opener active' : 'opener';
    }
    if (menu === 'config') {
      this.config = this.config === "opener" ? 'opener active' : 'opener';
    }

    this._preferences.menu = menu;
    this.tonalService.pushPreferences(this._preferences);
  }

  changeSideBar() {
    if (this.sidebar === "") { this.sidebar = "inactive" }
    else { this.sidebar = "" }
  }

  onSelect(item: Event): void {
    this._preferences[0].tonalidade = (item.target as HTMLInputElement).value;
    this.tonalService.pushPreferences(this._preferences);
  }

}

interface IConfigMenu {
  Name: string;
  Status: string;
}

