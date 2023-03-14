import { NbaGamesResult } from '../../models/nba-game.model';
import { NbaTeam } from '../../models/nba-team.model';

export interface SelectTeamState {
  gamesResults: NbaGamesResult[];
  teams: NbaTeam[];
  conference: 'East' | 'West' | 'None';
  division:
    | 'Atlantic'
    | 'Central'
    | 'Southeast'
    | 'Northwest'
    | 'Pacific'
    | 'Southwest'
    | 'None';
  team: NbaTeam | undefined;
}

export const selectTeamStates: Record<'initial', SelectTeamState> = {
  initial: {
    gamesResults: [],
    teams: [],
    conference: 'None',
    division: 'None',
    team: undefined,
  },
};
