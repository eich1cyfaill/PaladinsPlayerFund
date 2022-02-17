import { IMatchDetailsModalIniState, MatchDetailTypes } from "../../types/matchDetailTypes"

const initialState: IMatchDetailsModalIniState = {
    isLoading: true,
    firstTeam: [],
    secondTeam: []
}

const matchDetailReducer = (state = initialState, action: any): IMatchDetailsModalIniState => {
    switch(action.type){
        case MatchDetailTypes.FETCH_MATCH_DETAILS:
            return {...state, isLoading: true}
        case MatchDetailTypes.FETCH_MATCH_DETAILS_SUCCESS:
            return {...state, isLoading: false}
        case MatchDetailTypes.FETCH_FIRST_TEAM:
            return {...state, firstTeam: action.payload}
        case MatchDetailTypes.FETCH_SECOND_TEAM:
            return {...state, secondTeam: action.payload}
        default:
            return state
    }
}

export default matchDetailReducer