import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  µConferenceDropdownSelectionChanged,
  µDivisionDropdownSelectionChanged,
  µLoadNbaTeamsSuccessEvent,
  µTeamDropdownSelectionChanged,
  µTrackTeamButtonClickedSuccessEvent,
} from './index.actions';
import { SelectTeamState, selectTeamStates } from './index.state';

export const selectTeamReducer = createReducer(
  selectTeamStates.initial,

  on(
    µLoadNbaTeamsSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.teams = cfgs.teams;
        draft.dropdownTeams = cfgs.teams;
        return draft;
      })
  ),
  on(
    µConferenceDropdownSelectionChanged,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.selectedConference = cfgs.conference;
        if (cfgs.conference === 'East') {
          draft.divisions = ['Atlantic', 'Central', 'Southeast'];
        } else if (cfgs.conference === 'West') {
          draft.divisions = ['Northwest', 'Pacific', 'Southwest'];
        } else {
          draft.divisions = [
            '',
            'Atlantic',
            'Central',
            'Southeast',
            'Northwest',
            'Pacific',
            'Southwest',
          ];
        }
        if (cfgs.conference === '') {
          draft.dropdownTeams = draft.teams;
        } else {
          draft.dropdownTeams = draft.teams.filter((team) => {
            return team.conference === cfgs.conference;
          });
        }
        return draft;
      })
  ),
  on(
    µDivisionDropdownSelectionChanged,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.selectedDivision = cfgs.division;
        draft.dropdownTeams = draft.teams.filter((team) => {
          return team.division === cfgs.division;
        });
        return draft;
      })
  ),
  on(
    µTeamDropdownSelectionChanged,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.selectedTeam = cfgs.team;
        return draft;
      })
  ),
  on(
    µTrackTeamButtonClickedSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.gamesResults = [...draft.gamesResults, cfgs.gameResult];
        return draft;
      })
  )
);
