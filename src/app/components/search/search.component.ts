import { Component, Injectable, OnInit } from '@angular/core';
import { SummonerService } from "../../services/summoner.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SummonerByName } from "../../models/summoner-by-name.model";
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  formNameSummoners = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(
    private summonerService: SummonerService,
    private router: Router,
    private searchService: SearchService
  ) { }

  public summonerByName: SummonerByName = this.searchService.summonerByName;


  onSubmit() {
    const name: string = this.formNameSummoners.value.name || ""
    this.summonerService.getSummonerByName(name).pipe(
      tap((res) => this.summonerByName = res),
      switchMap((res) =>
        this.summonerService.getSummonerRank(res.id))
    ).subscribe({
      next: (res: any) => {
        this.summonerByName.tier = res[0].tier;
        this.summonerByName.rank = res[0].rank;
        this.searchService.updateSummonerByName(this.summonerByName);
        this.router.navigate(
          ['/profile']
          )
      }
    })

  }
}