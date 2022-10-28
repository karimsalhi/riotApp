import { Component, OnInit, Input } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner.service';

@Component({
  selector: 'app-summoner-rank-card',
  templateUrl: './summoner-rank-card.component.html',
  styleUrls: ['./summoner-rank-card.component.scss']
})
export class SummonerRankCardComponent implements OnInit {

  constructor(private summonerService: SummonerService) {
  }

  @Input() tier: string = '';
  @Input() rank: string = '';


  ngOnInit(): void {
  }

}
