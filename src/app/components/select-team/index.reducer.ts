import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  µConferenceDropdownSelectionChanged,
  µDivisionDropdownSelectionChanged,
  µLoadNbaTeamsSuccessEvent,
  µTeamDropdownSelectionChanged,
} from './index.actions';
import { SelectTeamState, selectTeamStates } from './index.state';

export const selectTeamReducer = createReducer(
  selectTeamStates.initial,

  on(
    µLoadNbaTeamsSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.teams = cfgs.teams;
        if (draft.dropdownTeams.length === 0) {
          draft.dropdownTeams = cfgs.teams;
        }
        return draft;
      })
  ),
  on(
    µConferenceDropdownSelectionChanged,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.selectedConference = cfgs.conference;
        if (cfgs.conference === 'East') {
          draft.divisions = ['', 'Atlantic', 'Central', 'Southeast'];
          draft.selectedTeam = '';
        } else if (cfgs.conference === 'West') {
          draft.selectedTeam = '';
          draft.divisions = ['', 'Northwest', 'Pacific', 'Southwest'];
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
          draft.selectedDivision = '';
          draft.selectedTeam = '';
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
        if (cfgs.division === '') {
          draft.dropdownTeams = draft.teams;
        }
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
  )
);
