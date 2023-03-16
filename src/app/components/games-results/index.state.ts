export interface GamesResultsState {
  concurrentTeams: string[];
}

export const gamesResultsState: Record<'initial', GamesResultsState> = {
  initial: {
    concurrentTeams: [],
  },
};
