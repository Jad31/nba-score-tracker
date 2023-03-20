import { Days, NbaGamesResult } from 'src/app/models/nba-game.model';

export type DashboardSelectedDaysChangedCfgs = { selectedDays: Days };
export interface DashboardSelectedDaysChangedSuccessEventCfgs {
  gameResults: NbaGamesResult;
  currentgamesResultsUuid: string;
}

export interface DashboardSelectedDaysChangedFailureEventCfgs {
  error: string;
}
