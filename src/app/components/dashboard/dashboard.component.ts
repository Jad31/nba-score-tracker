import { Component, OnInit } from '@angular/core';
import { FreeNbaApiService } from 'src/app/services/free-nba-api.service';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TeamCardComponent } from '../team-card/team-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { Store } from '@ngrx/store';

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
  ],
})
export class SelectTeamComponent implements OnInit {
  teamResults$: Observable<NbaGamesResult[]> | undefined;

  constructor(
    private freeNbaApiService: FreeNbaApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.teamResults$ = this.freeNbaApiService.gamesResult$;
  }

  removeResult(uuid: string): void {
    this.freeNbaApiService.removeTeamResult({ uuid });
  }
}
