import { NbaGame } from 'src/app/models/nba-game.model';

//#region Lifecycles
export type GamesResultsComponentNgOnInitEnteredCfgs = void;
export type GamesResultsComponentNgOnDestroyEnteredCfgs = void;
export type GamesResultsEffectsNgOnInitEffectsEnteredCfgs = void;
//#endregion Lifecycles

//#region Days
export interface LoadGamesResultsConcurrentTeamsCfgs {
  nbaGames: NbaGame[];
  teamName: string;
}
//#endregion Days
