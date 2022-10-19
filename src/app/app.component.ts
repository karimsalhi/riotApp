import { Component } from '@angular/core';
import { SummonerService } from './services/summoner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private summoner: SummonerService) {}

  testApi() {
    console.log(this.summoner.getSummoner());
  }
}
