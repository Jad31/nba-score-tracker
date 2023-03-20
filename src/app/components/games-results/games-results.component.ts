import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { ConferencePipe } from 'src/app/pipes/conference.pipe';
import { $dashboardSelectedDays } from '../dashboard/index.selectors';

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
export class GamesResultsComponent {
  teamCode: string;
  gameResults: NbaGamesResult | undefined;
  concurrentTeams: string[] = [];
  selectedDays$ = this.store.select($dashboardSelectedDays);

  constructor(private route: ActivatedRoute, private store: Store) {
    this.teamCode = this.route.snapshot.params['teamCode'];
    this.route.data
      .pipe(
        tap(({ teams: { gamesResult, concurrent, teamCode } }) => {
          this.gameResults = gamesResult;
          this.concurrentTeams = concurrent;
        })
      )
      .subscribe();
  }
}
