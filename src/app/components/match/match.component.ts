import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { SummonerByName } from 'src/app/models/summoner-by-name.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(
    private matchService: MatchService,
    private searchService: SearchService
    ) { }

  public summonerByName: SummonerByName = this.searchService.summonerByName;

  arr: string[] | undefined;

  ngOnInit() {
    const puuid = this.summonerByName.puuid || '';
    this.matchService.getMatch(puuid)
    .subscribe({
      next: (res: any) => {
        this.arr = res;
        console.log(this.arr);
      }
    })
  }

}
