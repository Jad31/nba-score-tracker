import { NbaGamesResult } from '../../models/nba-game.model';
import {
  Conference,
  Division,
  NbaTeam,
  Team,
} from '../../models/nba-team.model';

export interface SelectTeamState {
  gamesResults: NbaGamesResult[];
  teams: NbaTeam[];
  dropdownTeams: NbaTeam[];
  conferences: Array<'' | Conference>;
  divisions: Array<'' | Division>;
  selectedTeam: '' | Team;
  selectedConference: string;
  selectedDivision: string;
}

export const selectTeamStates: Record<'initial', SelectTeamState> = {
  initial: {
    gamesResults: [],
    teams: [],
    dropdownTeams: [],
    conferences: ['', 'East', 'West'],
    divisions: [
      '',
      'Atlantic',
      'Central',
      'Southeast',
      'Northwest',
      'Pacific',
      'Southwest',
    ],
    selectedTeam: '',
    selectedConference: '',
    selectedDivision: '',
  },
};
