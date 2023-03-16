import { NbaGame } from 'src/app/models/nba-game.model';

export interface LoadGamesResultsConcurrentTeamsCfgs {
  nbaGames: NbaGame[];
  teamName: string;
}
