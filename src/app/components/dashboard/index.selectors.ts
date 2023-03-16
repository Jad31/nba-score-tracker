import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './index.state';

export const $dashboard = createFeatureSelector<DashboardState>('dashboard');
export const $dashboardGamesResults = createSelector(
  $dashboard,
  (state) => state.gamesResults
);
export const $dashboardDays = createSelector($dashboard, (state) => state.days);
export const $dashboardSelectedDays = createSelector(
  $dashboard,
  (state) => state.selectedDays
);
