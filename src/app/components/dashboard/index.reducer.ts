import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { µTrackTeamButtonClickedSuccessEvent } from '../select-team/index.actions';
import { µTeamCardRemoveButtonClicked } from '../team-card/index.actions';
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
  )
);
