import { Conference, NbaTeam } from './nba-team.model';

export type Days = 6 | 12 | 20;
export interface NbaGame {
  id: number;
  date: string;
  home_team: NbaTeam;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: NbaTeam;
  visitor_team_score: number;
}

export interface NbaGamesResult {
  uuid: string;
  team_name: string;
  team_abbreviation: string;
  team_id: number;
  team: NbaTeam;
  conference: Conference;
  games: NbaGame[];
  results: Array<'win' | 'lose'>;
  average_scored: number;
  average_conceded: number;
  logo_url: string;
}
