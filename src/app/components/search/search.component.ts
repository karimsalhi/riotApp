import { Component, OnInit } from '@angular/core';
import {SummonerService} from "../../services/summoner.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

class SummonerName {
  id: string = "";
  accountId: string ="";
  name:string = "";
  profileIconId: number = 0;
  puuid: string = "";
  revisionDate: number = 0;
  summonerLevel: number = 0;

}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summonerName: SummonerName = new SummonerName();
  formNameSummoners = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private summoner: SummonerService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const name : string = this.formNameSummoners.value.name || ""
    this.summoner.getSummoner(name).subscribe({
        next: (res: SummonerName) => {
          this.summonerName = res
          console.log(this.summonerName);
        },
        error: (e) => {
          this.summonerName = new SummonerName();
          console.error(e)
        },
        complete: () => console.log('DONE!')
    })
  }
}
