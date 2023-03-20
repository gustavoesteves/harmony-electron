import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';
import { Instruments } from './services/db/instruments.db';
import { Chorinho } from './services/frases/chorinho.frase';

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

  menu = '';
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

  constructor(private tonalService: TonalService, private chorinho: Chorinho) {
    this.tonalService.pushModeInit(['sequence']);
    this.tonalService.pushTonalityInit(['C']);
    this.tonalService.pushInstrumentIni([Instruments[0]]);
    this.chorinho.BuildChordProgressionInit();
    this.tonalService.pushMode('home');
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.menu = value[value.length - 1];
    });
  }

  onClickDraw() { }

  changeMenu(menu: string) {
    for (const menu of this.menuSelecionado) {
      menu.Status = '';
    }
    this.menuSelecionado.find(_ => _.Name === menu).Status = 'ActiveMenu';
    this.tonalService.pushMode(menu);
  }

  openMenu(menu: string) {
    if (menu === 'modoMaior') {
      this.modoMaior = this.modoMaior === 'opener' ? 'opener active' : 'opener';
      this.tonalService.pushMode('descricao-maior');
    }
    if (menu === 'modoMenor') {
      this.modoMenor = this.modoMenor === 'opener' ? 'opener active' : 'opener';
      this.tonalService.pushMode('descricao-menor');
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
  }

  changeSideBar() {
    if (this.sidebar === "") { this.sidebar = "inactive" }
    else { this.sidebar = "" }
  }

  onSelect(item: Event): void {
    this.tonalService.pushTonality((item.target as HTMLInputElement).value);
  }

}

interface IConfigMenu {
  Name: string;
  Status: string;
}

