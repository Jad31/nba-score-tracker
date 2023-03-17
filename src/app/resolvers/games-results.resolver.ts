import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { $dashboardGamesResults } from '../components/dashboard/index.selectors';
import { µLoadGamesResultsConcurrentTeams } from '../components/games-results/index.actions';
import { $gamesResultsConcurrentTeams } from '../components/games-results/index.selectors';
import { NbaGamesResult } from '../models/nba-game.model';

@Injectable({ providedIn: 'root' })
export class GamesResultsResolver
  implements
    Resolve<{ gamesResult: NbaGamesResult | undefined; concurrent: string[] }>
{
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): { gamesResult: NbaGamesResult | undefined; concurrent: string[] } {
    const teamCode = route.params['teamCode'];

    let gamesResult: NbaGamesResult | undefined;
    let concurrent: string[] = [];

    this.store
      .select($dashboardGamesResults)
      .pipe(
        tap((gameResults) => {
          gamesResult = gameResults.find((gameResult) => {
            return gameResult.team_abbreviation === teamCode;
          });
          if (gamesResult !== undefined) {
            this.store.dispatch(
              µLoadGamesResultsConcurrentTeams({
                cfgs: {
                  nbaGames: gamesResult.games,
                  teamName: teamCode,
                },
              })
            );
          }
        })
      )
      .subscribe();
    this.store
      .select($gamesResultsConcurrentTeams)
      .pipe(
        tap((concurrentTeams) => {
          concurrent = concurrentTeams;
        })
      )
      .subscribe();
    return { gamesResult, concurrent };
  }
}
