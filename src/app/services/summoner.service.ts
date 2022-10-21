import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class SummonerName {
  id: string = "";
  accountId: string ="";
  name:string = "";
  profileIconId: number = 0;
  puuid: string = "";
  revisionDate: number = 0;
  summonerLevel: number = 0;

}

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = "RGAPI-342f2552-c0a3-4530-a592-51006049a6fd"; // Need to get API KEY


  getSummoner(summonerName: string) {
  const APICallString =
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
       summonerName +
      "?api_key=" +
      this.API_KEY;
    return this.httpClient.get<SummonerName>(APICallString)
  }
}
