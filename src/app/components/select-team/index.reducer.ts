import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  µConferenceDrowpdownSelectionChangedSuccessEvent,
  µDivisionDrowpdownSelectionChangedSuccessEvent,
  µLoadNbaTeamsSuccessEvent,
  µTeamDrowpdownSelectionChangedSuccessEvent,
} from './index.actions';
import { SelectTeamState, selectTeamStates } from './index.state';

export const selectTeamReducer = createReducer(
  selectTeamStates.initial,

  on(
    µLoadNbaTeamsSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.teams = cfgs.teams;
        return draft;
      })
  ),
  on(
    µConferenceDrowpdownSelectionChangedSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.conference = cfgs.conference;
        return draft;
      })
  ),
  on(
    µDivisionDrowpdownSelectionChangedSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.division = cfgs.division;
        return draft;
      })
  ),
  on(
    µTeamDrowpdownSelectionChangedSuccessEvent,
    (state, { cfgs }): SelectTeamState =>
      produce(state, (draft) => {
        draft.team = cfgs.team;
        return draft;
      })
  )
);
