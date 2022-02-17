export enum PlayerSearchActionTypes {
    CHANGE_CURRENT_SERVER = "CHANGE_CURRENT_SERVER",
    CHANGE_PLAYER_SEARCH_VALUE = "CHANGE_PLAYER_SEARCH_VALUE"
}

export interface IChangeCurrentServer {
    type: PlayerSearchActionTypes.CHANGE_CURRENT_SERVER
    payload: string
}

export interface IChangePlayerSearchValue {
    type: PlayerSearchActionTypes.CHANGE_PLAYER_SEARCH_VALUE
    payload: string
}


export type PlayerSearchAction = IChangeCurrentServer | IChangePlayerSearchValue

export interface IPlayerSearchIniState {
    currentServer: string
    playerSearchValue: string
}