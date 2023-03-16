import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { NbaTeam } from 'src/app/models/nba-team.model';
import { rapidApiKeys, rapidBaseUrl } from 'src/environments/environment';
import {
  µLoadNbaTeams,
  µLoadNbaTeamsFailureEvent,
  µLoadNbaTeamsSuccessEvent,
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
              return of(µLoadNbaTeamsFailureEvent({ cfgs: { error } }));
            })
          )
      )
    )
  );
}
