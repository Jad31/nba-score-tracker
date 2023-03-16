import { createAction, props } from '@ngrx/store';
import {
  DashboardComponentNgOnDestroyEnteredCfgs,
  DashboardComponentNgOnInitEnteredCfgs,
  DashboardEffectsNgOnInitEffectsEnteredCfgs,
  DashboardSelectedDaysChangedCfgs,
  DashboardSelectedDaysChangedFailureEventCfgs,
  DashboardSelectedDaysChangedSuccessEventCfgs,
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

//#region Days
export const µDashboardSelectedDaysChanged = createAction(
  '[DashboardComponent] days changed',
  props<{ cfgs: DashboardSelectedDaysChangedCfgs }>()
);
export const µDashboardSelectedDaysChangedSuccessEvent = createAction(
  '[DashboardComponent] days changed success event',
  props<{ cfgs: DashboardSelectedDaysChangedSuccessEventCfgs }>()
);
export const µDashboardSelectedDaysChangedFailureEvent = createAction(
  '[DashboardComponent] days changed failure event',
  props<{ cfgs: DashboardSelectedDaysChangedFailureEventCfgs }>()
);
//#endregion Days
