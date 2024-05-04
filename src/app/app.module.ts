import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniteComponent } from './components/unite/unite.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PageUExComponent } from './components/page-uex/page-uex.component';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { ListeDesUniteComponent } from './components/liste-des-unite/liste-des-unite.component';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exercice1Component } from './components/exercices/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercices/exercice2/exercice2.component';
import { Exercice3Component } from './components/exercices/exercice3/exercice3.component';
import { MotsComponent } from './components/unite/mots/mots.component';
import { SyllabesComponent } from './components/unite/syllabes/syllabes.component';
@NgModule({
  declarations: [
    AppComponent,
    UniteComponent,
    AcceuilComponent,
    PageUExComponent,
    BienvenueComponent,
    ListeDesUniteComponent,
    ExercicesComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    MotsComponent,
    SyllabesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

