import { Component } from '@angular/core';
import { SummonerService } from './services/summoner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private summoner: SummonerService) {}

  searchText: string | undefined;
  posts: any;

  handleChange(event: any) {
    this.searchText = event.target.value;
  }

  testApi() {
    this.summoner.getSummoner(this.searchText).subscribe({
        next: (res) => {
          this.posts = res
          console.log(res);
        },
        error: (e) => {
          this.posts = e
          console.error(e)
        },
        complete: () => console.log('DONE!')
      });
  }
}
