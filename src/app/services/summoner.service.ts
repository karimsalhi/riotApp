import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = "RGAPI-f63618a4-4bbc-4d50-88a8-e853e27c60c8";

  APICallString =
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bowedvenus89" +
      "?api_key=" +
      this.API_KEY;

  getSummoner() {
    return this.httpClient.get(this.APICallString).subscribe(result => {
      return result;
    });
  }
}
