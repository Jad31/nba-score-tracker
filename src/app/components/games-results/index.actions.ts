import { createAction, props } from '@ngrx/store';
import {
  GamesResultsComponentNgOnDestroyEnteredCfgs,
  GamesResultsComponentNgOnInitEnteredCfgs,
  GamesResultsEffectsNgOnInitEffectsEnteredCfgs,
  LoadGamesResultsConcurrentTeamsCfgs,
} from './index.actions.types';

//#region Lifecycles
export const µGamesResultsComponentNgOnInitEntered = createAction(
  '[GamesResultsComponent] ngOnInit entered',
  props<{ cfgs: GamesResultsComponentNgOnInitEnteredCfgs }>()
);

export const µGamesResultsComponentNgOnDestroyEntered = createAction(
  '[GamesResultsComponent] ngOnDestroy entered',
  props<{ cfgs: GamesResultsComponentNgOnDestroyEnteredCfgs }>()
);

export const µGamesResultsEffectsNgOnInitEffectsEntered = createAction(
  '[GamesResultsEffects] ngrxOnInitEffects entered',
  props<{ cfgs: GamesResultsEffectsNgOnInitEffectsEnteredCfgs }>()
);
//#endregion Lifecycles

//#region Concurrent Teams
export const µLoadGamesResultsConcurrentTeams = createAction(
  '[GamesResults] load concurrent teams',
  props<{ cfgs: LoadGamesResultsConcurrentTeamsCfgs }>()
);
//#endregion Concurrent Teams
