import { Component, OnInit } from '@angular/core';
import {SummonerService} from "../../services/summoner.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SummonerByName} from "../../models/summoner-by-name.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  summonerByName: SummonerByName = new SummonerByName();

  formNameSummoners = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private summonerService: SummonerService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const name : string = this.formNameSummoners.value.name || ""
    this.summonerService.getSummonerByName(name).subscribe({
        next: (res: SummonerByName) => {
          this.summonerByName = res
          console.log(this.summonerByName);
        },
        error: (e) => {
          this.summonerByName = new SummonerByName();
          console.error(e)
        },
        complete: () => console.log('DONE!')
    })
  }
}
