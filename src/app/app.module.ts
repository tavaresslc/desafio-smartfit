import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LegendComponent } from './components/legend/legend.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    CardComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
