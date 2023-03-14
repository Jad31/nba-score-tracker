import { createAction, props } from '@ngrx/store';
import {
  ConferenceDrowpdownSelectionChangedCfgs,
  ConferenceDrowpdownSelectionChangedFailureEventCfgs,
  ConferenceDrowpdownSelectionChangedSuccessEventCfgs,
  DivisionDrowpdownSelectionChangedCfgs,
  DivisionDrowpdownSelectionChangedFailureEventCfgs,
  DivisionDrowpdownSelectionChangedSuccessEventCfgs,
  LoadNbaTeamsFailureEventCfgs,
  LoadNbaTeamsSuccessEventCfgs,
  SelectTeamComponentNgOnDestroyEnteredCfgs,
  SelectTeamComponentNgOnInitEnteredCfgs,
  SelectTeamEffectsNgOnInitEffectsEnteredCfgs,
  TeamDrowpdownSelectionChangedCfgs,
  TeamDrowpdownSelectionChangedFailureEventCfgs,
  TeamDrowpdownSelectionChangedSuccessEventCfgs,
} from './index.actions.types';

//#region Lifecycles
export const µSelectTeamComponentNgOnInitEntered = createAction(
  '[SelectTeamComponent] ngOnInit entered',
  props<{ cfgs: SelectTeamComponentNgOnInitEnteredCfgs }>()
);

export const µSelectTeamComponentNgOnDestroyEntered = createAction(
  '[SelectTeamComponent] ngOnDestroy entered',
  props<{ cfgs: SelectTeamComponentNgOnDestroyEnteredCfgs }>()
);

export const µSelectTeamEffectsNgOnInitEffectsEntered = createAction(
  '[SelectTeamEffects] ngrxOnInitEffects entered',
  props<{ cfgs: SelectTeamEffectsNgOnInitEffectsEnteredCfgs }>()
);
//#endregion Lifecycles

//#region Teams
export const µLoadNbaTeams = createAction('[SelectTeamComponent] loadNbaTeams');

export const µLoadNbaTeamsSuccessEvent = createAction(
  '[SelectTeamComponent] loadNbaTeams success event',
  props<{ cfgs: LoadNbaTeamsSuccessEventCfgs }>()
);

export const µLoadNbaTeamsFailureEvent = createAction(
  '[SelectTeamComponent] loadNbaTeams failure event',
  props<{ cfgs: LoadNbaTeamsFailureEventCfgs }>()
);

export const µConferenceDrowpdownSelectionChanged = createAction(
  '[SelectTeamComponent] conferenceDrowpdownSelectionChanged',
  props<{ cfgs: ConferenceDrowpdownSelectionChangedCfgs }>()
);

export const µConferenceDrowpdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] conferenceDrowpdownSelectionChanged success event',
  props<{ cfgs: ConferenceDrowpdownSelectionChangedSuccessEventCfgs }>()
);

export const µConferenceDrowpdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] conferenceDrowpdownSelectionChanged failure event',
  props<{ cfgs: ConferenceDrowpdownSelectionChangedFailureEventCfgs }>()
);

export const µDivisionDrowpdownSelectionChanged = createAction(
  '[SelectTeamComponent] divisionDrowpdownSelectionChanged',
  props<{ cfgs: DivisionDrowpdownSelectionChangedCfgs }>()
);

export const µDivisionDrowpdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] divisionDrowpdownSelectionChanged success event',
  props<{ cfgs: DivisionDrowpdownSelectionChangedSuccessEventCfgs }>()
);

export const µDivisionDrowpdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] divisionDrowpdownSelectionChanged failure event',
  props<{ cfgs: DivisionDrowpdownSelectionChangedFailureEventCfgs }>()
);

export const µTeamDrowpdownSelectionChanged = createAction(
  '[SelectTeamComponent] teamDrowpdownSelectionChanged',
  props<{ cfgs: TeamDrowpdownSelectionChangedCfgs }>()
);

export const µTeamDrowpdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] teamDrowpdownSelectionChanged success event',
  props<{ cfgs: TeamDrowpdownSelectionChangedSuccessEventCfgs }>()
);

export const µTeamDrowpdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] teamDrowpdownSelectionChanged failure event',
  props<{ cfgs: TeamDrowpdownSelectionChangedFailureEventCfgs }>()
);
//#endregion Teams
