import { NbaGamesResult } from '../../models/nba-game.model';

export interface DashboardState {
  gamesResults: NbaGamesResult[];
}

export const dashboardState: Record<'initial', DashboardState> = {
  initial: {
    gamesResults: [],
  },
};
