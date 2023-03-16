import { Days, NbaGamesResult } from '../../models/nba-game.model';

export interface DashboardState {
  gamesResults: NbaGamesResult[];
  days: Days[];
  selectedDays: Days;
}

export const dashboardState: Record<'initial', DashboardState> = {
  initial: {
    gamesResults: [],
    days: [6, 12, 20],
    selectedDays: 6,
  },
};
