import { Component, OnInit } from '@angular/core';
import { FreeNbaApiService } from 'src/app/services/free-nba-api.service';
import { MatSelectModule } from '@angular/material/select';
import { NbaTeam } from 'src/app/models/nba-team.model';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TeamCardComponent } from '../team-card/team-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { Store } from '@ngrx/store';
import { µLoadNbaTeams } from './index.actions';
import { $selectTeamTeams } from './index.selectors';

@Component({
  selector: 'app-select-team',
  standalone: true,
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss'],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    TeamCardComponent,
    MatGridListModule,
  ],
})
export class SelectTeamComponent implements OnInit {
  selectedTeam: string = '';
  teamResults$: Observable<NbaGamesResult[]> | undefined;
  selectTeam$ = this.store.select($selectTeamTeams);

  constructor(
    private freeNbaApiService: FreeNbaApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.teamResults$ = this.freeNbaApiService.gamesResult$;
    this.store.dispatch(µLoadNbaTeams());
    this.selectTeam$.subscribe((teams) => {
      console.log({ teams });
    });
  }

  trackTeam(): void {
    if (this.selectedTeam !== '' && this.selectTeam$ !== undefined) {
      this.selectTeam$
        .pipe(
          tap((teams) => {
            const team = teams.find(
              (team) => team.full_name === this.selectedTeam
            );
            if (team !== undefined) {
              this.freeNbaApiService.getTeamResult({
                team,
              });
            }
          })
        )
        .subscribe();
    }
  }

  removeResult(uuid: string): void {
    this.freeNbaApiService.removeTeamResult({ uuid });
  }
}
