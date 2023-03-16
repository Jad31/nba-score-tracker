import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeAll, mergeMap, of } from 'rxjs';
import { NbaGame, NbaGamesResult } from 'src/app/models/nba-game.model';
import { getPastDates, retrieveNbaGameResult } from 'src/app/utils/utils';
import {
  logoBaseUrl,
  rapidApiKeys,
  rapidBaseUrl,
} from 'src/environments/environment';
import {
  µTrackTeamButtonClicked,
  µTrackTeamButtonClickedFailureEvent,
  µTrackTeamButtonClickedSuccessEvent,
} from '../select-team/index.actions';
import {
  µDashboardSelectedDaysChanged,
  µDashboardSelectedDaysChangedSuccessEvent,
} from './index.actions';
import {
  $dashboardGamesResults,
  $dashboardSelectedDays,
} from './index.selectors';

@Injectable()
export class DashboardEffects {
  private httpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': rapidApiKeys.XRapidAPIKey,
    'X-RapidAPI-Host': rapidApiKeys.XRapidAPIHost,
  });
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}

  readonly trackTeamButtonClickedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(µTrackTeamButtonClicked),
      concatLatestFrom(() => this.store.select($dashboardSelectedDays)),
      mergeMap(
        ([
          {
            cfgs: { team },
          },
          selectedDays,
        ]) => {
          const httpParams = new HttpParams({
            fromObject: {
              page: '0',
              per_page: '12',
              'team_ids[]': `${team.id}`,
              'dates[]': getPastDates({ days: selectedDays }),
            },
          });
          return this.http
            .get<{ data: NbaGame[] }>(`${rapidBaseUrl}/games`, {
              headers: this.httpHeaders,
              params: httpParams,
            })
            .pipe(
              map(({ data }) => {
                const gameResult: NbaGamesResult = retrieveNbaGameResult({
                  games: data,
                  team,
                  logoBaseUrl,
                });
                return µTrackTeamButtonClickedSuccessEvent({
                  cfgs: { gameResult },
                });
              }),
              catchError((error) =>
                of(µTrackTeamButtonClickedFailureEvent({ cfgs: { error } }))
              )
            );
        }
      )
    )
  );

  readonly selectedDaysChangedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(µDashboardSelectedDaysChanged),
      concatLatestFrom(() => [this.store.select($dashboardGamesResults)]),
      mergeMap(
        ([
          {
            cfgs: { selectedDays },
          },
          gamesResults,
        ]) =>
          gamesResults.map((gameResult) => {
            const httpParams = new HttpParams({
              fromObject: {
                page: '0',
                per_page: '12',
                'team_ids[]': `${gameResult.team_id}`,
                'dates[]': getPastDates({ days: selectedDays }),
              },
            });
            return this.http
              .get<{ data: NbaGame[] }>(`${rapidBaseUrl}/games`, {
                headers: this.httpHeaders,
                params: httpParams,
              })
              .pipe(
                map(({ data }) => {
                  const newGameResult: NbaGamesResult = retrieveNbaGameResult({
                    games: data,
                    team: gameResult.team,
                    logoBaseUrl,
                  });
                  return µDashboardSelectedDaysChangedSuccessEvent({
                    cfgs: { gameResults: newGameResult },
                  });
                }),
                catchError((error) =>
                  of(µTrackTeamButtonClickedFailureEvent({ cfgs: { error } }))
                )
              );
          })
      ),
      mergeAll() // Flattens the nested observable
    )
  );
}
