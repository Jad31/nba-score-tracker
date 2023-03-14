import { Conference, Division, NbaTeam } from 'src/app/models/nba-team.model';

//#region Lifecycles
export type SelectTeamComponentNgOnInitEnteredCfgs = void;
export type SelectTeamComponentNgOnDestroyEnteredCfgs = void;
export type SelectTeamEffectsNgOnInitEffectsEnteredCfgs = void;
//#endregion Lifecycles

//#region Teams
export type LoadNbaTeamsCfgs = void;
export interface LoadNbaTeamsSuccessEventCfgs {
  teams: NbaTeam[];
}
export interface LoadNbaTeamsFailureEventCfgs {
  error: string;
}
export interface ConferenceDrowpdownSelectionChangedCfgs {
  conference: Conference | 'None';
}
export interface ConferenceDrowpdownSelectionChangedSuccessEventCfgs {
  conference: Conference | 'None';
}
export interface ConferenceDrowpdownSelectionChangedFailureEventCfgs {
  conference: Conference | 'None';
}
export interface DivisionDrowpdownSelectionChangedCfgs {
  division: Division | 'None';
}
export interface DivisionDrowpdownSelectionChangedSuccessEventCfgs {
  division: Division | 'None';
}
export interface DivisionDrowpdownSelectionChangedFailureEventCfgs {
  division: Division | 'None';
}
export interface TeamDrowpdownSelectionChangedCfgs {
  team: string;
}
export interface TeamDrowpdownSelectionChangedSuccessEventCfgs {
  team: NbaTeam;
}
export interface TeamDrowpdownSelectionChangedFailureEventCfgs {
  error: string;
}
//#endregion Teams
