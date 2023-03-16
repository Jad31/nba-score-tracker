import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { DashboardEffects } from './app/components/dashboard/index.effects';
import { dashboardReducer } from './app/components/dashboard/index.reducer';
import { GamesResultsEffects } from './app/components/games-results/index.effects';
import { gamesResultsReducer } from './app/components/games-results/index.reducer';
import { SelectTeamEffects } from './app/components/select-team/index.effects';
import { selectTeamReducer } from './app/components/select-team/index.reducer';
import { TeamCardEffects } from './app/components/team-card/index.effects';
import { teamCardReducer } from './app/components/team-card/index.reducer';
import { provideRouterStore } from './app/standalone-ngrx';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'results/:teamCode',
    loadComponent: () =>
      import('./app/components/games-results/games-results.component').then(
        (c) => c.GamesResultsComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideStore({
      selectTeam: selectTeamReducer,
      dashboard: dashboardReducer,
      teamCard: teamCardReducer,
      gamesResults: gamesResultsReducer,
    }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([
      SelectTeamEffects,
      DashboardEffects,
      TeamCardEffects,
      GamesResultsEffects,
    ]),
    provideHttpClient(),
  ],
});
