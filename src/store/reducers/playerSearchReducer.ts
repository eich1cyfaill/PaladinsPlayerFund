import { IPlayerSearchIniState, PlayerSearchAction, PlayerSearchActionTypes } from "../../types/playerSearchTypes";


const initialState: IPlayerSearchIniState = {
    currentServer: 'unitedstates',
    playerSearchValue: ''
}

const playerSearchReducer = (state = initialState, action: PlayerSearchAction): IPlayerSearchIniState => {
    switch (action.type) {
        case PlayerSearchActionTypes.CHANGE_CURRENT_SERVER:
            return {...state, currentServer: action.payload}
        case PlayerSearchActionTypes.CHANGE_PLAYER_SEARCH_VALUE:
            return {...state, playerSearchValue: action.payload}
        default:
            return state
    }
}

export default playerSearchReducer