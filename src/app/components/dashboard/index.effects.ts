import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { NbaGame, NbaGamesResult } from 'src/app/models/nba-game.model';
import { getPastDates, retrieveNbaGameResult } from 'src/app/utils/utils';
import {
  logoBaseUrl,
  rapidApiKeys,
  rapidBaseUrl,
} from 'src/environments/environment';
import {
  µTrackTeamButtonClicked,
  µTrackTeamButtonClickedSuccessEvent,
  µTrackTeamButtonClickedFailureEvent,
} from '../select-team/index.actions';

@Injectable()
export class DashboardEffects {
  private httpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': rapidApiKeys.XRapidAPIKey,
    'X-RapidAPI-Host': rapidApiKeys.XRapidAPIHost,
  });
  constructor(private actions$: Actions, private http: HttpClient) {}

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
