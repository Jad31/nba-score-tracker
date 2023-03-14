import { Component, OnInit } from '@angular/core';
import { FreeNbaApiService } from 'src/app/services/free-nba-api.service';
import { MatSelectModule } from '@angular/material/select';
import {
  Conference,
  Division,
  NbaTeam,
  Team,
} from 'src/app/models/nba-team.model';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TeamCardComponent } from '../team-card/team-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { Store } from '@ngrx/store';
import {
  µConferenceDropdownSelectionChanged,
  µDivisionDropdownSelectionChanged,
  µLoadNbaTeams,
  µTeamDropdownSelectionChanged,
  µTrackTeamButtonClicked,
} from './index.actions';
import {
  $selectTeamGamesResults,
  $selectTeamTeams,
  $selectTeamSelectedConference,
  $selectTeamSelectedDivision,
  $selectTeamSelectedTeam,
  $selectTeamConferences,
  $selectTeamDivisions,
  $selectTeamDropdownTeams,
} from './index.selectors';
import { ConferencePipe } from 'src/app/pipes/conference.pipe';

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
    ConferencePipe,
  ],
})
export class SelectTeamComponent implements OnInit {
  selectConference$ = this.store.select($selectTeamConferences);
  selectedConference: string | undefined;
  selectDivision$ = this.store.select($selectTeamDivisions);
  selectedDivision: string | undefined;
  selectedTeam: '' | Team | undefined;
  selectTeam$ = this.store.select($selectTeamDropdownTeams);
  teamResults: NbaGamesResult[] | undefined;

  constructor(
    private freeNbaApiService: FreeNbaApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select($selectTeamSelectedTeam).subscribe((selectedTeam) => {
      this.selectedTeam = selectedTeam;
    });
    this.store
      .select($selectTeamSelectedConference)
      .subscribe((selectedConference) => {
        this.selectedConference = selectedConference;
      });
    this.store.select($selectTeamGamesResults).subscribe((teamResults) => {
      this.teamResults = teamResults;
    });
    this.store
      .select($selectTeamSelectedDivision)
      .subscribe((selectedDivision) => {
        this.selectedDivision = selectedDivision;
      });
    this.store.dispatch(µLoadNbaTeams());
  }

  TeamDropdownSelectionChanged(event: Team): void {
    this.store.dispatch(
      µTeamDropdownSelectionChanged({ cfgs: { team: event } })
    );
  }

  ConferenceDropdownSelectionChanged(event: Conference): void {
    this.store.dispatch(
      µConferenceDropdownSelectionChanged({ cfgs: { conference: event } })
    );
  }

  DivisionDropdownSelectionChanged(event: Division): void {
    this.store.dispatch(
      µDivisionDropdownSelectionChanged({ cfgs: { division: event } })
    );
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
              this.store.dispatch(µTrackTeamButtonClicked({ cfgs: { team } }));
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
