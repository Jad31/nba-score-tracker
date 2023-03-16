import { createAction, props } from '@ngrx/store';
import { LoadGamesResultsConcurrentTeamsCfgs } from './index.actions.types';

export const µLoadGamesResultsConcurrentTeams = createAction(
  '[GamesResults] load concurrent teams',
  props<{ cfgs: LoadGamesResultsConcurrentTeamsCfgs }>()
);
