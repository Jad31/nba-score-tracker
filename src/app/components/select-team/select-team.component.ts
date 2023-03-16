import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  µLoadNbaTeams,
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
export class SelectTeamComponent implements OnInit {
  selectConference$: Observable<('' | Conference)[]> | undefined;
  selectedConference$: Observable<string> | undefined;
  selectDivision$: Observable<('' | Division)[]> | undefined;
  selectedDivision$: Observable<string> | undefined;
  selectedTeam$: Observable<'' | Team> | undefined;
  selectTeam$: Observable<NbaTeam[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(µLoadNbaTeams());

    this.selectConference$ = this.store.select($selectTeamConferences);
    this.selectedConference$ = this.store.select($selectTeamSelectedConference);
    this.selectedDivision$ = this.store.select($selectTeamSelectedDivision);
    this.selectDivision$ = this.store.select($selectTeamDivisions);
    this.selectedTeam$ = this.store.select($selectTeamSelectedTeam);
    this.selectTeam$ = this.store.select($selectTeamDropdownTeams);
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

  trackTeam(
    selectedTeam: '' | Team | null,
    selectTeam: NbaTeam[] | null
  ): void {
    if (selectedTeam !== '' && selectedTeam !== null && selectTeam !== null) {
      const team = selectTeam.find((team) => team.full_name === selectedTeam);
      if (team !== undefined) {
        console.log({ team });
        this.store.dispatch(µTrackTeamButtonClicked({ cfgs: { team } }));
      }
    }
  }
}
