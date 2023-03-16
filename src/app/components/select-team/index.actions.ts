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
  TeamDropdownSelectionChangedCfgs,
  TeamDropdownSelectionChangedFailureEventCfgs,
  TeamDropdownSelectionChangedSuccessEventCfgs,
  TrackTeamButtonClickedCfgs,
  TrackTeamButtonClickedFailureEventCfgs,
  TrackTeamButtonClickedSuccessEventCfgs,
} from './index.actions.types';

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
