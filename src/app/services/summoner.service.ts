import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = "RGAPI-342f2552-c0a3-4530-a592-51006049a6fd"; // Need to get API KEY


  getSummoner(summonerName: string | undefined) {
  const APICallString =
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
       summonerName +
      "?api_key=" +
      this.API_KEY;
    return this.httpClient.get(APICallString)
  }

  getSummonerRank(summonerId: string) {
  const APICallString =
      "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
       summonerId +
      "?api_key=" +
      this.API_KEY;
    return this.httpClient.get(APICallString)

  }
}
