import { PlayerSearchAction, PlayerSearchActionTypes } from "../../types/playerSearchTypes";
import { Dispatch } from "redux";

export const acThrowServerData = (value: string): PlayerSearchAction => {
    return {type: PlayerSearchActionTypes.CHANGE_CURRENT_SERVER, payload: value}
}

export const acThrowPlayerSearchInputValue = (value: string): PlayerSearchAction => {
    return {type: PlayerSearchActionTypes.CHANGE_PLAYER_SEARCH_VALUE, payload: value}
}

