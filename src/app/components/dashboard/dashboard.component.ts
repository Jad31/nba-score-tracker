import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { SelectTeamComponent } from '../select-team/select-team.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { $dashboardGamesResults } from './index.selectors';

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
})
export class DashboardComponent implements OnInit {
  teamResults: NbaGamesResult[] | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select($dashboardGamesResults).subscribe((teamResults) => {
      this.teamResults = teamResults;
    });
  }
}
