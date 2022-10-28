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
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) {}

  onSubmit() {
    this.searchService.getInfos();
  }

  formNameSummoners = this.searchService.formNameSummoners;
  summonerByName = this.searchService.summonerByName;

  ngOnInit(): void {
  }

}
