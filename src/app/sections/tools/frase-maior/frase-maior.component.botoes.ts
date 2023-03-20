import { FraseMaiorComponent } from './frase-maior.component';

export class FraseMaiorBotoes extends FraseMaiorComponent {
    ligado = 'button primary small';
    desligado = 'button small';
    btnGrau = this.ligado;
    btnAcorde = this.desligado;
    
    changeView(ativo: string) {
        if (ativo === 'acorde') {
            this.btnGrau = 'button small';
            this.btnAcorde = 'button primary small';
            this.changeAcorde();
        }
        else if (ativo === 'grau') {
            this.btnGrau = 'button primary small';
            this.btnAcorde = 'button small';
            this.changeGrau();
        }
    }
}