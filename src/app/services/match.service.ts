import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SummonerByName} from "../models/summoner-by-name.model";
import {environment} from "../../environments/environment";
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient,
    private searchService: SearchService 
    ) { }

  public summonerByName: SummonerByName = this.searchService.summonerByName;

  getMatch(puuid: string) {
    const requestMatchByPuuid : string = environment.apiMatchBaseUrl + "lol/match/v5/matches/by-puuid/" + puuid + '/ids?start=0&count=20&api_key=' + environment.apiKey;
    return this.httpClient.get<SummonerByName>(requestMatchByPuuid)
  }
}