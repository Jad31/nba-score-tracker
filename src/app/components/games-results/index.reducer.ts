import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { µLoadGamesResultsConcurrentTeams } from './index.actions';
import { GamesResultsState, gamesResultsState } from './index.state';

export const gamesResultsReducer = createReducer(
  gamesResultsState.initial,
  on(
    µLoadGamesResultsConcurrentTeams,
    (state, { cfgs }): GamesResultsState =>
      produce(state, (draft) => {
        const concurrentTeams: string[] = [];
        cfgs.nbaGames.forEach((nbaGame) => {
          if (nbaGame.home_team.abbreviation !== cfgs.teamName) {
            concurrentTeams.push(nbaGame.home_team.abbreviation);
          } else if (nbaGame.visitor_team.abbreviation !== cfgs.teamName) {
            concurrentTeams.push(nbaGame.visitor_team.abbreviation);
          }
        });
        draft.concurrentTeams = concurrentTeams;
        return draft;
      })
  )
);
