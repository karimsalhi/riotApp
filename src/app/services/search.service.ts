import { Injectable } from '@angular/core';
import { SummonerByName } from "../models/summoner-by-name.model";

@Injectable({
    providedIn: 'root'
  })

export class SearchService {

  public summonerByName: SummonerByName = new SummonerByName();

  updateSummonerByName(summonerByName: SummonerByName) {
    this.summonerByName = summonerByName;
  }

}
