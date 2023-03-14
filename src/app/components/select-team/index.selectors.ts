import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectTeamState } from './index.state';

export const $selectTeam = createFeatureSelector<SelectTeamState>('selectTeam');
export const $selectTeamGamesResults = createSelector(
  $selectTeam,
  (state) => state.gamesResults
);
export const $selectTeamTeams = createSelector(
  $selectTeam,
  (state) => state.teams
);
export const $selectTeamConference = createSelector(
  $selectTeam,
  (state) => state.conference
);
export const $selectTeamDivision = createSelector(
  $selectTeam,
  (state) => state.division
);

export const $selectTeamTeam = createSelector(
  $selectTeam,
  (state) => state.team
);
