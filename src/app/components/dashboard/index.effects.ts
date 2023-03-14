import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { rapidApiKeys } from 'src/environments/environment';

@Injectable()
export class SelectTeamEffects {
  private httpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': rapidApiKeys.XRapidAPIKey,
    'X-RapidAPI-Host': rapidApiKeys.XRapidAPIHost,
  });
  constructor(private actions$: Actions, private http: HttpClient) {}
}
