import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SummonerByName} from "../models/summoner-by-name.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private httpClient: HttpClient) { }

  getSummonerByName(summonerName: string) {
    //TODO Replace param api key by header api key
    const requestSummonerByName : string = environment.apiBaseUrl + "lol/summoner/v4/summoners/by-name/" + summonerName + '?api_key=' + environment.apiKey;
    return this.httpClient.get<SummonerByName>(requestSummonerByName)
  }

  getSummonerRank(summonerId: string) {
    const APICallString = environment.apiBaseUrl + "lol/league/v4/entries/by-summoner/" + summonerId + "?api_key=" + environment.apiKey;
    return this.httpClient.get(APICallString)
  }
}
