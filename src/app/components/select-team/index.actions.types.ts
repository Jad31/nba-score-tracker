import { NbaGamesResult } from 'src/app/models/nba-game.model';
import {
  Conference,
  Division,
  NbaTeam,
  Team,
} from 'src/app/models/nba-team.model';

//#region Lifecycles
export type SelectTeamComponentNgOnInitEnteredCfgs = void;
export type SelectTeamComponentNgOnDestroyEnteredCfgs = void;
export type SelectTeamEffectsNgOnInitEffectsEnteredCfgs = void;
//#endregion Lifecycles

export type LoadNbaTeamsCfgs = void;
export interface LoadNbaTeamsSuccessEventCfgs {
  teams: NbaTeam[];
}
export interface LoadNbaTeamsFailureEventCfgs {
  error: string;
}
export interface ConferenceDropdownSelectionChangedCfgs {
  conference: '' | Conference;
}
export interface ConferenceDropdownSelectionChangedSuccessEventCfgs {
  conference: Conference;
}
export interface ConferenceDropdownSelectionChangedFailureEventCfgs {
  conference: Conference;
}
export interface DivisionDropdownSelectionChangedCfgs {
  division: '' | Division;
}
export interface DivisionDropdownSelectionChangedSuccessEventCfgs {
  division: Division;
}
export interface DivisionDropdownSelectionChangedFailureEventCfgs {
  division: Division;
}
export interface TeamDropdownSelectionChangedCfgs {
  team: Team;
}
export interface TeamDropdownSelectionChangedSuccessEventCfgs {
  team: string;
}
export interface TeamDropdownSelectionChangedFailureEventCfgs {
  error: string;
}

export interface TrackTeamButtonClickedCfgs {
  team: NbaTeam;
}

export interface TrackTeamButtonClickedSuccessEventCfgs {
  gameResult: NbaGamesResult;
}

export interface TrackTeamButtonClickedFailureEventCfgs {
  error: string;
}
