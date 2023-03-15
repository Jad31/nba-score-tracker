import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamCardState } from './index.state';

export const $teamCard = createFeatureSelector<TeamCardState>('teamCard');
export const $teamCardGamesResults = createSelector(
  $teamCard,
  (state) => state.gamesResults
);
