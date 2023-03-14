import { createAction, props } from '@ngrx/store';
import {
  DashboardComponentNgOnDestroyEnteredCfgs,
  DashboardComponentNgOnInitEnteredCfgs,
  DashboardEffectsNgOnInitEffectsEnteredCfgs,
} from './index.actions.types';

//#region Lifecycles
export const µDashboardComponentNgOnInitEntered = createAction(
  '[DashboardComponent] ngOnInit entered',
  props<{ cfgs: DashboardComponentNgOnInitEnteredCfgs }>()
);

export const µDashboardComponentNgOnDestroyEntered = createAction(
  '[DashboardComponent] ngOnDestroy entered',
  props<{ cfgs: DashboardComponentNgOnDestroyEnteredCfgs }>()
);

export const µDashboardEffectsNgOnInitEffectsEntered = createAction(
  '[DashboardEffects] ngrxOnInitEffects entered',
  props<{ cfgs: DashboardEffectsNgOnInitEffectsEnteredCfgs }>()
);
//#endregion Lifecycles
