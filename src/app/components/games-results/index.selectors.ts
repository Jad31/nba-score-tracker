import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesResultsState } from './index.state';

export const $gamesResults =
  createFeatureSelector<GamesResultsState>('gamesResults');
export const $gamesResultsConcurrentTeams = createSelector(
  $gamesResults,
  (state) => state.concurrentTeams
);
