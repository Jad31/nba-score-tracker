import { createAction, props } from '@ngrx/store';
import {
  DashboardSelectedDaysChangedCfgs,
  DashboardSelectedDaysChangedFailureEventCfgs,
  DashboardSelectedDaysChangedSuccessEventCfgs,
} from './index.actions.types';

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
