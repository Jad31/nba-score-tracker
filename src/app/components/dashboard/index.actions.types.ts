import { Days, NbaGamesResult } from 'src/app/models/nba-game.model';

//#region Lifecycles
export type DashboardComponentNgOnInitEnteredCfgs = void;
export type DashboardComponentNgOnDestroyEnteredCfgs = void;
export type DashboardEffectsNgOnInitEffectsEnteredCfgs = void;
//#endregion Lifecycles

//#region Days
export type DashboardSelectedDaysChangedCfgs = { selectedDays: Days };
export interface DashboardSelectedDaysChangedSuccessEventCfgs {
  gameResults: NbaGamesResult;
}

export interface DashboardSelectedDaysChangedFailureEventCfgs {
  error: string;
}
//#endregion Days
