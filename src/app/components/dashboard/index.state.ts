import { NbaGamesResult } from '../../models/nba-game.model';
import { NbaTeam } from '../../models/nba-team.model';

export interface DashboardState {
  gamesResults: NbaGamesResult[];
}

export const dashboardState: Record<'initial', DashboardState> = {
  initial: {
    gamesResults: [],
  },
};
