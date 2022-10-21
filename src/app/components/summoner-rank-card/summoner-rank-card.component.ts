import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summoner-rank-card',
  templateUrl: './summoner-rank-card.component.html',
  styleUrls: ['./summoner-rank-card.component.scss']
})
export class SummonerRankCardComponent implements OnInit {
  @Input() rank: string = '';
  logo: string = '../../../assets/img/PlatinumLogo.png';

  constructor() { }

  ngOnInit(): void {
    console.log(this.rank);
  }

}
