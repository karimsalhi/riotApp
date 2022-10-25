import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SummonerService } from './services/summoner.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {SummonerRankCardComponent} from "./components/summoner-rank-card/summoner-rank-card.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    SummonerRankCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [SummonerService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
