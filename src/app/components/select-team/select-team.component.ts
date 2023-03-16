import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { Conference, Division, Team } from 'src/app/models/nba-team.model';
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
  selectConference$ = this.store.select($selectTeamConferences);
  selectedConference: string | undefined;
  selectDivision$ = this.store.select($selectTeamDivisions);
  selectedDivision: string | undefined;
  selectedTeam: '' | Team | undefined;
  selectTeam$ = this.store.select($selectTeamDropdownTeams);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select($selectTeamSelectedTeam).subscribe((selectedTeam) => {
      this.selectedTeam = selectedTeam;
    });
    this.store
      .select($selectTeamSelectedConference)
      .subscribe((selectedConference) => {
        this.selectedConference = selectedConference;
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
    if (this.selectedTeam !== '' && this.selectedTeam !== undefined) {
      this.selectTeam$
        .pipe(
          tap((teams) => {
            const team = teams.find(
              (team) => team.full_name === this.selectedTeam
            );
            if (team !== undefined) {
              console.log({ team });
              this.store.dispatch(µTrackTeamButtonClicked({ cfgs: { team } }));
            }
          })
        )
        .subscribe();
    }
  }
}
