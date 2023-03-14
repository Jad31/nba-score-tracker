import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { SelectTeamEffects } from './app/components/select-team/index.effects';
import { selectTeamReducer } from './app/components/select-team/index.reducer';
import { SelectTeamComponent } from './app/components/select-team/select-team.component';
import {
  provideFeatureEffects,
  provideRouterStore,
  provideStoreFeature,
} from './app/standalone-ngrx';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Route[] = [
  {
    path: '',
    component: SelectTeamComponent,
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
    provideStore({ router: routerReducer, selectTeam: selectTeamReducer }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([SelectTeamEffects]),
    provideHttpClient(),
  ],
});
