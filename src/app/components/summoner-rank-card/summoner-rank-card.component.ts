import { Component, OnInit, Input } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-summoner-rank-card',
  templateUrl: './summoner-rank-card.component.html',
  styleUrls: ['./summoner-rank-card.component.scss']
})
export class SummonerRankCardComponent implements OnInit {

  constructor(
    private summonerService: SummonerService,
    private search: SearchService,
    private route: ActivatedRoute
  ) {
  }

  @Input() tier: string | null = '';
  @Input() rank: string | null = '';


  ngOnInit() {
    this.tier = this.search.summonerByName.tier;
    this.rank = this.search.summonerByName.rank;
  }

}
