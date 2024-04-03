import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfFirstComponent } from './ng-if-first/ng-if-first.component';
import { NgForFirstComponent } from './ng-for-first/ng-for-first.component';
import { NgContentFirstComponent } from './ng-content-first/ng-content-first.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from "./cursos/cursos.module";


@NgModule({
  declarations: [
    AppComponent,
    NgIfFirstComponent,
    NgForFirstComponent,
    NgContentFirstComponent,
    HighlightMouseDirective,
    DiretivasCustomizadasComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule,
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
