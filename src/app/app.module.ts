import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';

// Modo Maior
import { MajorModeComponent } from './sections/maior/major-mode/major-mode.component';
import { OptionalChordsComponent } from './sections/maior/optional-chords/optional-chords.component';
import { SecondaryDominantsComponent } from './sections/maior/secondary-dominants/secondary-dominants.component';
import { SubstituteDominantsComponent } from './sections/maior/substitute-dominants/substitute-dominants.component';
import { FraseMaiorComponent } from './sections/tools/frase-maior/frase-maior.component';
import { ProgressaoSegundaQuintaComponent } from './sections/maior/progressao-segunda-quinta/progressao-segunda-quinta.component';
import { DescricaoComponent } from './sections/maior/descricao/descricao.component';
import { ResumoComponent } from './sections/maior/resumo/resumo.component';

// Modo Menor
import { MinorModeComponent } from './sections/menor/minor-mode/minor-mode.component';
import { HarmonicoComponent } from './sections/menor/modos/harmonico/harmonico.component';
import { MelodicoComponent } from './sections/menor/modos/melodico/melodico.component';
import { DoricoComponent } from './sections/menor/modos/dorico/dorico.component';
import { FrigioComponent } from './sections/menor/modos/frigio/frigio.component';
import { DescricaoMenorComponent } from './sections/menor/descricao/descricao.component';
import { NaturalComponent } from './sections/menor/modos/natural/natural.component';
import { MenorJazzComponent } from './sections/menor/modos/menor-jazz/menor-jazz.component';
import { LidioSustenidoComponent } from './sections/menor/modos/lidio-sustenido/lidio-sustenido.component';
import { LidioBemolComponent } from './sections/menor/modos/lidio-bemol/lidio-bemol.component';
import { LocrioBequadroComponent } from './sections/menor/modos/locrio-bequadro/locrio-bequadro.component';

// Harmonia Modal

// outras abordagens
import { TabelaTonalidadesComponent } from './sections/outras-abordagens/tabela-tonalidades/tabela-tonalidades.component';
import { HarmoniaNegativaComponent } from './sections/outras-abordagens/harmonia-negativa/harmonia-negativa.component';
import { NeotonalismoComponent } from './sections/outras-abordagens/neotonalismo/neotonalismo.component';
import { HarmoniaAleatoriaComponent } from './sections/outras-abordagens/harmonia-aleatoria/harmonia-aleatoria.component';
import { ModulacaoComponent } from './sections/outras-abordagens/modulacao/modulacao.component';

// Modo Tools
import { DrawChordsComponent } from './sections/tools/draw-chords/draw-chords.component';
import { XmlmusicGenerateComponent } from './sections/tools/xmlmusic-generate/xmlmusic-generate.component';
import { ConstrutorAcordesComponent } from './sections/tools/construtor-acordes/construtor-acordes.component';
import { ConstrutorEscalasComponent } from './sections/tools/construtor-escalas/construtor-escalas.component';
import { FraseMenorComponent } from './sections/tools/frase-menor/frase-menor.component';
import { EscalasAcordeComponent } from './sections/tools/escalas-acorde/escalas-acorde.component';

// harmonia aplicada
import { HarmonySequencyComponent } from './sections/harmonia-aplicada/harmony-sequency/harmony-sequency.component';
import { SambaComponent } from './sections/harmonia-aplicada/samba/samba.component';
import { BaiaoComponent } from './sections/harmonia-aplicada/baiao/baiao.component';
import { FrevoComponent } from './sections/harmonia-aplicada/frevo/frevo.component';
import { ValsaMineiraComponent } from './sections/harmonia-aplicada/valsa-mineira/valsa-mineira.component';
import { AcordeEmprestimoComponent } from './sections/outras-abordagens/acorde-emprestimo/acorde-emprestimo.component';
import { PrimeiraEspecieComponent } from './sections/contraponto/primeira-especie/primeira-especie.component';
import { SegundaEspecieComponent } from './sections/contraponto/segunda-especie/segunda-especie.component';
import { TerceiraEspecieComponent } from './sections/contraponto/terceira-especie/terceira-especie.component';
import { QuartaEspecieComponent } from './sections/contraponto/quarta-especie/quarta-especie.component';

@NgModule({
  declarations: [
    AppComponent,
    MajorModeComponent,
    OptionalChordsComponent,
    SecondaryDominantsComponent,
    SubstituteDominantsComponent,
    MinorModeComponent,
    DrawChordsComponent,
    HarmonySequencyComponent,
    XmlmusicGenerateComponent,
    HomeComponent,
    FraseMaiorComponent,
    HarmonicoComponent,
    MelodicoComponent,
    DoricoComponent,
    FrigioComponent,
    FraseMenorComponent,
    ConstrutorAcordesComponent,
    ConstrutorEscalasComponent,
    SambaComponent,
    BaiaoComponent,
    FrevoComponent,
    ValsaMineiraComponent,
    ProgressaoSegundaQuintaComponent,
    DescricaoComponent,
    DescricaoMenorComponent,
    EscalasAcordeComponent,
    ModulacaoComponent,
    NaturalComponent,
    MenorJazzComponent,
    LidioSustenidoComponent,
    LidioBemolComponent,
    LocrioBequadroComponent,
    TabelaTonalidadesComponent,
    HarmoniaNegativaComponent,
    NeotonalismoComponent,
    HarmoniaAleatoriaComponent,
    AcordeEmprestimoComponent,
    ResumoComponent,
    PrimeiraEspecieComponent,
    SegundaEspecieComponent,
    TerceiraEspecieComponent,
    QuartaEspecieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
