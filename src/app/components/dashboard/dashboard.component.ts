import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Days, NbaGamesResult } from 'src/app/models/nba-game.model';
import { SelectTeamComponent } from '../select-team/select-team.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { µDashboardSelectedDaysChanged } from './index.actions';
import {
  $dashboardDays,
  $dashboardGamesResults,
  $dashboardSelectedDays,
} from './index.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    TeamCardComponent,
    MatGridListModule,
    SelectTeamComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  teamResults$: Observable<NbaGamesResult[]> | undefined;
  days$: Observable<Days[]> | undefined;
  selectedDays$: Observable<Days> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.teamResults$ = this.store.select($dashboardGamesResults);
    this.days$ = this.store.select($dashboardDays);
    this.selectedDays$ = this.store.select($dashboardSelectedDays);
  }

  dashboardSelectedDaysChanged(selectedDays: Days) {
    this.store.dispatch(
      µDashboardSelectedDaysChanged({
        cfgs: { selectedDays },
      })
    );
  }
}
