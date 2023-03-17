import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { µLoadNbaTeams } from '../components/select-team/index.actions';
import { $selectTeamDropdownTeams } from '../components/select-team/index.selectors';
import { NbaTeam } from '../models/nba-team.model';

@Injectable({ providedIn: 'root' })
export class DashboardResolver implements Resolve<NbaTeam[]> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<NbaTeam[]> | Promise<NbaTeam[]> | NbaTeam[] {
    this.store.dispatch(µLoadNbaTeams());
    return this.store.select($selectTeamDropdownTeams);
  }
}
