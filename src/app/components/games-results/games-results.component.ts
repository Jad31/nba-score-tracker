import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { ConferencePipe } from 'src/app/pipes/conference.pipe';
import { $dashboardGamesResults } from '../dashboard/index.selectors';
import { µLoadGamesResultsConcurrentTeams } from './index.actions';
import { $gamesResultsConcurrentTeams } from './index.selectors';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    ConferencePipe,
  ],
  templateUrl: './games-results.component.html',
  styleUrls: ['./games-results.component.scss'],
})
export class GamesResultsComponent implements OnInit {
  teamCode: string;
  gameResults: NbaGamesResult | undefined;
  concurrentTeams: string[] = [];

  constructor(private route: ActivatedRoute, private store: Store) {
    this.teamCode = this.route.snapshot.params['teamCode'];
  }

  ngOnInit(): void {
    this.store
      .select($dashboardGamesResults)
      .pipe(
        tap((gameResults) => {
          this.gameResults = gameResults.find((gameResult) => {
            return gameResult.team_abbreviation === this.teamCode;
          });
        })
      )
      .subscribe();
    console.log({ gameResults: this.gameResults });
    if (this.gameResults !== undefined) {
      this.store.dispatch(
        µLoadGamesResultsConcurrentTeams({
          cfgs: {
            nbaGames: this.gameResults.games,
            teamName: this.teamCode,
          },
        })
      );
      this.store
        .select($gamesResultsConcurrentTeams)
        .pipe(
          tap((concurrentTeams) => {
            this.concurrentTeams = concurrentTeams;
          })
        )
        .subscribe();
    }
    console.log(this.gameResults);
  }
}
