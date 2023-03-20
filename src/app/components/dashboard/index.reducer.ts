import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { µTrackTeamButtonClickedSuccessEvent } from '../select-team/index.actions';
import { µTeamCardRemoveButtonClicked } from '../team-card/index.actions';
import {
  µDashboardSelectedDaysChanged,
  µDashboardSelectedDaysChangedSuccessEvent,
} from './index.actions';
import { DashboardState, dashboardState } from './index.state';

export const dashboardReducer = createReducer(
  dashboardState.initial,
  on(
    µTrackTeamButtonClickedSuccessEvent,
    (state, { cfgs }): DashboardState =>
      produce(state, (draft) => {
        draft.gamesResults = [...draft.gamesResults, cfgs.gameResult];
        return draft;
      })
  ),
  on(
    µTeamCardRemoveButtonClicked,
    (state, { cfgs }): DashboardState =>
      produce(state, (draft) => {
        draft.gamesResults = draft.gamesResults.filter(
          (gameResult) => gameResult.uuid !== cfgs.uuid
        );
        return draft;
      })
  ),
  on(
    µDashboardSelectedDaysChanged,
    (state, { cfgs }): DashboardState =>
      produce(state, (draft) => {
        draft.selectedDays = cfgs.selectedDays;
        return draft;
      })
  ),
  on(
    µDashboardSelectedDaysChangedSuccessEvent,
    (state, { cfgs }): DashboardState =>
      produce(state, (draft) => {
        // update the gamesResults games that match the team_id
        // draft.gamesResults = draft.gamesResults.map((gameResult) => {
        //   if (gameResult.team_name === cfgs.gameResults.team_name) {
        //     return cfgs.gameResults;
        //   }
        //   return gameResult;
        // });
        draft.gamesResults = draft.gamesResults.map((gameResult) => {
          if (gameResult.uuid === cfgs.currentgamesResultsUuid) {
            return cfgs.gameResults;
          }
          return gameResult;
        });
        return draft;
      })
  )
);
