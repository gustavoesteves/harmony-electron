import { Component, OnInit } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IPhrases } from '../../../services/interfaces/phrases.interface';
import { IRondo } from '../../../services/interfaces/rondo.interface';
import { IEsquema } from './../../../services/interfaces/esquema.interface';
import { Esquema } from './../../../services/db/esquema.db';
import { Chorinho } from './../../../services/frases/chorinho.frase';

@Component({
  selector: 'app-harmony-sequency',
  templateUrl: './harmony-sequency.component.html',
  styleUrls: ['./harmony-sequency.component.css']
})
export class HarmonySequencyComponent implements OnInit {
  header: IRondo[] = [{ Compasso: 'Compasso', Frase1: 'Parte 1', Frase2: 'Parte 2', Frase3: 'Parte 3' }];
  body: IRondo[] = [];
  frase: IPhrases[] = [];
  note = '';
  esquema: IEsquema = {
    Nome: '',
    Frase1: { Modo: '', Tonalidade: '' },
    Frase2: { Modo: '', Tonalidade: '' },
    Frase3: { Modo: '', Tonalidade: '' }
  };
  esquemas: IEsquema[] = [];

  constructor(private tonalService: TonalService, private chorinho: Chorinho) {
    this.esquemas = Esquema;
  }

  ngOnInit(): void {
    this.chorinho.currentEsquema.subscribe(value => {
      this.esquema = value[value.length - 1];
      this.chorinho.ChangeEsquema(this.esquema, this.frase, this.note);
    });
    this.chorinho.currentMotivoChords.subscribe(value => {
      this.body = value[value.length - 1];
    });
    this.chorinho.currentFrase.subscribe(value => {
      this.frase = value[value.length - 1];
    });
    this.tonalService.currentTonality.subscribe(value => {
      this.note = value[value.length - 1];
      this.chorinho.GetCompasso(this.esquema, this.frase, this.note);
    });
  }

  onClick() {
    // this.tonalService.pushMotivo();
  }

  onClickXML() {
    this.tonalService.pushModeInit(['xmlmusic']);
  }

  loadChords(chord: string) { }

  onSelect(item: Event): void {
    const esquema: IEsquema = Esquema.find(value => value.Nome === (item.target as HTMLInputElement).value);
    this.chorinho.pushEsquema(esquema);
  }

}
