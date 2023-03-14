import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap } from 'rxjs';
import { NbaGame, NbaGamesResult } from 'src/app/models/nba-game.model';
import { NbaTeam } from 'src/app/models/nba-team.model';
import { getPastDates, retrieveNbaGameResult } from 'src/app/utils/utils';
import {
  logoBaseUrl,
  rapidApiKeys,
  rapidBaseUrl,
} from 'src/environments/environment';
import {
  µLoadNbaTeams,
  µLoadNbaTeamsSuccessEvent,
  µLoadNbaTeamsFailureEvent,
  µTrackTeamButtonClicked,
  µTrackTeamButtonClickedSuccessEvent,
  µTrackTeamButtonClickedFailureEvent,
} from './index.actions';

@Injectable()
export class SelectTeamEffects {
  private httpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': rapidApiKeys.XRapidAPIKey,
    'X-RapidAPI-Host': rapidApiKeys.XRapidAPIHost,
  });
  constructor(private actions$: Actions, private http: HttpClient) {}

  readonly loadNbaTeamsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(µLoadNbaTeams),
      mergeMap(() =>
        this.http
          .get<{ data: NbaTeam[] }>(`${rapidBaseUrl}/teams`, {
            headers: this.httpHeaders,
          })
          .pipe(
            map(({ data }) => {
              return µLoadNbaTeamsSuccessEvent({ cfgs: { teams: data } });
            }),
            catchError((error) => {
              console.log({ error });
              return of(µLoadNbaTeamsFailureEvent({ cfgs: { error } }));
            })
          )
      )
    )
  );

  readonly trackTeamButtonClickedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(µTrackTeamButtonClicked),
      mergeMap(({ cfgs: { team } }) => {
        const httpParams = new HttpParams({
          fromObject: {
            page: '0',
            per_page: '12',
            'team_ids[]': `${team.id}`,
            'dates[]': getPastDates(),
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
      })
    )
  );
}
