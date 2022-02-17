import { IRankingIniState, RankingActionTypes, RankingAction } from "../../types/rankingTypes"

const initialState: IRankingIniState = {
    bestPlayers: [],
    isLoading: false
}

export const rankingReducer = (state = initialState, action: RankingAction): IRankingIniState => {
    switch (action.type) {
        case RankingActionTypes.FETCH_BEST_PLAYERS:
            return {...state, isLoading: true}
        case RankingActionTypes.FETCH_BEST_PLAYERS_SUCCESS:
            return {...state, bestPlayers: action.payload, isLoading: false}
        default:
            return state
    }
}