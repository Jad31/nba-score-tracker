import { createAction, props } from '@ngrx/store';
import {
  TeamCardComponentNgOnDestroyEnteredCfgs,
  TeamCardComponentNgOnInitEnteredCfgs,
  TeamCardEffectsNgOnInitEffectsEnteredCfgs,
  TeamCardRemoveButtonClickedCfgs,
} from './index.actions.types';

//#region Lifecycles
export const µTeamCardComponentNgOnInitEntered = createAction(
  '[TeamCardComponent] ngOnInit entered',
  props<{ cfgs: TeamCardComponentNgOnInitEnteredCfgs }>()
);

export const µTeamCardComponentNgOnDestroyEntered = createAction(
  '[TeamCardComponent] ngOnDestroy entered',
  props<{ cfgs: TeamCardComponentNgOnDestroyEnteredCfgs }>()
);

export const µTeamCardEffectsNgOnInitEffectsEntered = createAction(
  '[TeamCardEffects] ngrxOnInitEffects entered',
  props<{ cfgs: TeamCardEffectsNgOnInitEffectsEnteredCfgs }>()
);
//#endregion Lifecycles

//#region TeamCard
export const µTeamCardRemoveButtonClicked = createAction(
  '[TeamCardComponent] remove button clicked',
  props<{ cfgs: TeamCardRemoveButtonClickedCfgs }>()
);
