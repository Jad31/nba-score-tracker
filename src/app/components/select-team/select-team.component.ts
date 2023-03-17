import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import {
  Conference,
  Division,
  NbaTeam,
  Team,
} from 'src/app/models/nba-team.model';
import { ConferencePipe } from 'src/app/pipes/conference.pipe';
import { TeamCardComponent } from '../team-card/team-card.component';
import {
  µConferenceDropdownSelectionChanged,
  µDivisionDropdownSelectionChanged,
  µTeamDropdownSelectionChanged,
  µTrackTeamButtonClicked,
} from './index.actions';
import {
  $selectTeamConferences,
  $selectTeamDivisions,
  $selectTeamDropdownTeams,
  $selectTeamSelectedConference,
  $selectTeamSelectedDivision,
  $selectTeamSelectedTeam,
} from './index.selectors';

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
export class SelectTeamComponent {
  conferences$ = this.store.select($selectTeamConferences);
  selectedConference$ = this.store.select($selectTeamSelectedConference);
  selectedDivision$ = this.store.select($selectTeamSelectedDivision);
  divisions$ = this.store.select($selectTeamDivisions);
  selectedTeam$ = this.store.select($selectTeamSelectedTeam);
  teams$ = this.store.select($selectTeamDropdownTeams);

  constructor(private store: Store) {}
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

  trackTeam(selectedTeam: '' | Team | null, teams: NbaTeam[] | null): void {
    if (selectedTeam !== '' && selectedTeam !== null && teams !== null) {
      const team = teams.find((team) => team.full_name === selectedTeam);
      if (team !== undefined) {
        this.store.dispatch(µTrackTeamButtonClicked({ cfgs: { team } }));
      }
    }
  }
}
