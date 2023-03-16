import { Days, NbaGamesResult } from 'src/app/models/nba-game.model';

export type DashboardSelectedDaysChangedCfgs = { selectedDays: Days };
export interface DashboardSelectedDaysChangedSuccessEventCfgs {
  gameResults: NbaGamesResult;
}

export interface DashboardSelectedDaysChangedFailureEventCfgs {
  error: string;
}
