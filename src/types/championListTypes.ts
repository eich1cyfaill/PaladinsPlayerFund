export enum ChampionListActionTypes {
    CHANGE_CHAMPION_QUERY = "CHANGE_CHAMPION_QUERY",
    CHANGE_CHAMPION_SORT = "CHANGE_CHAMPION_SORT"
}

export interface IChangeChampionQueryAction {
    type: ChampionListActionTypes.CHANGE_CHAMPION_QUERY
    payload: string
}

export interface IChangeChampionSortAction {
    type: ChampionListActionTypes.CHANGE_CHAMPION_SORT
    payload: string
}

export type ChampionListAction = IChangeChampionQueryAction | IChangeChampionSortAction

export interface ChampionObject {
    id: number
    name: string
    role: string
    image?: string
}

export interface IChampionListIniState {
    championList: ChampionObject[],
    championSearchRole: string
    championSearchQuery: string
}