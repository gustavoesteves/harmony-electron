import { Component, OnInit } from '@angular/core';
import { Chorinho } from './../../../services/frases/chorinho.frase';

@Component({
  selector: 'app-xmlmusic-generate',
  templateUrl: './xmlmusic-generate.component.html',
  styleUrls: ['./xmlmusic-generate.component.css']
})
export class XmlmusicGenerateComponent implements OnInit {
  // Motivo A
  AI = '';
  AII = '';
  AIII = '';
  AIV = '';
  AV = '';
  AVI = '';
  AVII = '';
  AVIII = '';
  AIX = '';
  AX = '';
  AXI = '';
  AXII = '';
  AXIII = '';
  AXIV = '';
  AXV = '';
  AXVI = '';
  // Motivo A
  BI = '';
  BII = '';
  BIII = '';
  BIV = '';
  BV = '';
  BVI = '';
  BVII = '';
  BVIII = '';
  BIX = '';
  BX = '';
  BXI = '';
  BXII = '';
  BXIII = '';
  BXIV = '';
  BXV = '';
  BXVI = '';
  // Motivo A
  CI = '';
  CII = '';
  CIII = '';
  CIV = '';
  CV = '';
  CVI = '';
  CVII = '';
  CVIII = '';
  CIX = '';
  CX = '';
  CXI = '';
  CXII = '';
  CXIII = '';
  CXIV = '';
  CXV = '';
  CXVI = '';

  constructor(private chorinho: Chorinho) { }

  ngOnInit(): void {
    this.chorinho.currentMotivoChords.subscribe(value => {
      const rondo = value[value.length - 1];
      this.AI = rondo[0].Frase1.replace('<br>', '\n');
      this.AII = rondo[1].Frase1.replace('<br>', '\n');
      this.AIII = rondo[2].Frase1.replace('<br>', '\n');
      this.AIV = rondo[3].Frase1.replace('<br>', '\n');
      this.AV = rondo[4].Frase1.replace('<br>', '\n');
      this.AVI = rondo[5].Frase1.replace('<br>', '\n');
      this.AVII = rondo[6].Frase1.replace('<br>', '\n');
      this.AVIII = rondo[7].Frase1.replace('<br>', '\n');
      this.AIX = rondo[8].Frase1.replace('<br>', '\n');
      this.AX = rondo[9].Frase1.replace('<br>', '\n');
      this.AXI = rondo[10].Frase1.replace('<br>', '\n');
      this.AXII = rondo[11].Frase1.replace('<br>', '\n');
      this.AXIII = rondo[12].Frase1.replace('<br>', '\n');
      this.AXIV = rondo[13].Frase1.replace('<br>', '\n');
      this.AXV = rondo[14].Frase1.replace('<br>', '\n');
      this.AXVI = rondo[15].Frase1.replace('<br>', '\n');

      this.BI = rondo[0].Frase2.replace('<br>', '\n');
      this.BII = rondo[1].Frase2.replace('<br>', '\n');
      this.BIII = rondo[2].Frase2.replace('<br>', '\n');
      this.BIV = rondo[3].Frase2.replace('<br>', '\n');
      this.BV = rondo[4].Frase2.replace('<br>', '\n');
      this.BVI = rondo[5].Frase2.replace('<br>', '\n');
      this.BVII = rondo[6].Frase2.replace('<br>', '\n');
      this.BVIII = rondo[7].Frase2.replace('<br>', '\n');
      this.BIX = rondo[8].Frase2.replace('<br>', '\n');
      this.BX = rondo[9].Frase2.replace('<br>', '\n');
      this.BXI = rondo[10].Frase2.replace('<br>', '\n');
      this.BXII = rondo[11].Frase2.replace('<br>', '\n');
      this.BXIII = rondo[12].Frase2.replace('<br>', '\n');
      this.BXIV = rondo[13].Frase2.replace('<br>', '\n');
      this.BXV = rondo[14].Frase2.replace('<br>', '\n');
      this.BXVI = rondo[15].Frase2.replace('<br>', '\n');

      this.CI = rondo[0].Frase3.replace('<br>', '\n');
      this.CII = rondo[1].Frase3.replace('<br>', '\n');
      this.CIII = rondo[2].Frase3.replace('<br>', '\n');
      this.CIV = rondo[3].Frase3.replace('<br>', '\n');
      this.CV = rondo[4].Frase3.replace('<br>', '\n');
      this.CVI = rondo[5].Frase3.replace('<br>', '\n');
      this.CVII = rondo[6].Frase3.replace('<br>', '\n');
      this.CVIII = rondo[7].Frase3.replace('<br>', '\n');
      this.CIX = rondo[8].Frase3.replace('<br>', '\n');
      this.CX = rondo[9].Frase3.replace('<br>', '\n');
      this.CXI = rondo[10].Frase3.replace('<br>', '\n');
      this.CXII = rondo[11].Frase3.replace('<br>', '\n');
      this.CXIII = rondo[12].Frase3.replace('<br>', '\n');
      this.CXIV = rondo[13].Frase3.replace('<br>', '\n');
      this.CXV = rondo[14].Frase3.replace('<br>', '\n');
      this.CXVI = rondo[15].Frase3.replace('<br>', '\n');
    });
  }
}
