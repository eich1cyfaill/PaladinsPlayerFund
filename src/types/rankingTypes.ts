export enum RankingActionTypes {
    FETCH_BEST_PLAYERS = "FETCH_BEST_PLAYERS",
    FETCH_BEST_PLAYERS_SUCCESS = "FETCH_BEST_PLAYERS_SUCCESS",
    FETCH_BEST_PLAYERS_ERROR = "FETCH_BEST_PLAYERS_ERROR"
}

export interface IRankingIniState {
    bestPlayers: any[]
    isLoading: boolean
}

export interface IFetchBestPlayers {
    type: RankingActionTypes.FETCH_BEST_PLAYERS
}

export interface IFetchBestPlayersSuccess {
    type: RankingActionTypes.FETCH_BEST_PLAYERS_SUCCESS
    payload: any[]
}

export interface IFetchBestPlayerError {
    type: RankingActionTypes.FETCH_BEST_PLAYERS_ERROR
}



export type RankingAction = IFetchBestPlayers | IFetchBestPlayersSuccess | IFetchBestPlayerError