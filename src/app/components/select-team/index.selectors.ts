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
export const $selectTeamDropdownTeams = createSelector(
  $selectTeam,
  (state) => state.dropdownTeams
);
export const $selectTeamConferences = createSelector(
  $selectTeam,
  (state) => state.conferences
);
export const $selectTeamDivisions = createSelector(
  $selectTeam,
  (state) => state.divisions
);
export const $selectTeamSelectedConference = createSelector(
  $selectTeam,
  (state) => state.selectedConference
);
export const $selectTeamSelectedDivision = createSelector(
  $selectTeam,
  (state) => state.selectedDivision
);

export const $selectTeamSelectedTeam = createSelector(
  $selectTeam,
  (state) => state.selectedTeam
);
