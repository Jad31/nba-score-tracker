import { createAction, props } from '@ngrx/store';
import {
  ConferenceDropdownSelectionChangedCfgs,
  ConferenceDropdownSelectionChangedFailureEventCfgs,
  ConferenceDropdownSelectionChangedSuccessEventCfgs,
  DivisionDropdownSelectionChangedCfgs,
  DivisionDropdownSelectionChangedFailureEventCfgs,
  DivisionDropdownSelectionChangedSuccessEventCfgs,
  LoadNbaTeamsFailureEventCfgs,
  LoadNbaTeamsSuccessEventCfgs,
  SelectTeamComponentNgOnDestroyEnteredCfgs,
  SelectTeamComponentNgOnInitEnteredCfgs,
  SelectTeamEffectsNgOnInitEffectsEnteredCfgs,
  TeamDropdownSelectionChangedCfgs,
  TeamDropdownSelectionChangedFailureEventCfgs,
  TeamDropdownSelectionChangedSuccessEventCfgs,
  TrackTeamButtonClickedCfgs,
  TrackTeamButtonClickedSuccessEventCfgs,
  TrackTeamButtonClickedFailureEventCfgs,
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

export const µLoadNbaTeams = createAction('[SelectTeamComponent] loadNbaTeams');

export const µLoadNbaTeamsSuccessEvent = createAction(
  '[SelectTeamComponent] loadNbaTeams success event',
  props<{ cfgs: LoadNbaTeamsSuccessEventCfgs }>()
);

export const µLoadNbaTeamsFailureEvent = createAction(
  '[SelectTeamComponent] loadNbaTeams failure event',
  props<{ cfgs: LoadNbaTeamsFailureEventCfgs }>()
);

export const µConferenceDropdownSelectionChanged = createAction(
  '[SelectTeamComponent] conferenceDropdownSelectionChanged',
  props<{ cfgs: ConferenceDropdownSelectionChangedCfgs }>()
);

export const µConferenceDropdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] conferenceDropdownSelectionChanged success event',
  props<{ cfgs: ConferenceDropdownSelectionChangedSuccessEventCfgs }>()
);

export const µConferenceDropdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] conferenceDropdownSelectionChanged failure event',
  props<{ cfgs: ConferenceDropdownSelectionChangedFailureEventCfgs }>()
);

export const µDivisionDropdownSelectionChanged = createAction(
  '[SelectTeamComponent] divisionDropdownSelectionChanged',
  props<{ cfgs: DivisionDropdownSelectionChangedCfgs }>()
);

export const µDivisionDropdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] divisionDropdownSelectionChanged success event',
  props<{ cfgs: DivisionDropdownSelectionChangedSuccessEventCfgs }>()
);

export const µDivisionDropdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] divisionDropdownSelectionChanged failure event',
  props<{ cfgs: DivisionDropdownSelectionChangedFailureEventCfgs }>()
);

export const µTeamDropdownSelectionChanged = createAction(
  '[SelectTeamComponent] teamDropdownSelectionChanged',
  props<{ cfgs: TeamDropdownSelectionChangedCfgs }>()
);

export const µTeamDropdownSelectionChangedSuccessEvent = createAction(
  '[SelectTeamComponent] teamDropdownSelectionChanged success event',
  props<{ cfgs: TeamDropdownSelectionChangedSuccessEventCfgs }>()
);

export const µTeamDropdownSelectionChangedFailureEvent = createAction(
  '[SelectTeamComponent] teamDropdownSelectionChanged failure event',
  props<{ cfgs: TeamDropdownSelectionChangedFailureEventCfgs }>()
);

export const µTrackTeamButtonClicked = createAction(
  '[SelectTeamComponent] trackTeamButtonClicked',
  props<{ cfgs: TrackTeamButtonClickedCfgs }>()
);

export const µTrackTeamButtonClickedSuccessEvent = createAction(
  '[SelectTeamComponent] trackTeamButtonClicked success event',
  props<{ cfgs: TrackTeamButtonClickedSuccessEventCfgs }>()
);

export const µTrackTeamButtonClickedFailureEvent = createAction(
  '[SelectTeamComponent] trackTeamButtonClicked failure event',
  props<{ cfgs: TrackTeamButtonClickedFailureEventCfgs }>()
);
