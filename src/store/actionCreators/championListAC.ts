import { ChampionListAction, ChampionListActionTypes } from "../../types/championListTypes"


export const acThrowChampionQuery = (value: string): ChampionListAction => {
    return {type: ChampionListActionTypes.CHANGE_CHAMPION_QUERY, payload: value}
}

export const acThrowChampionRole = (value: string): ChampionListAction => {
    return {type: ChampionListActionTypes.CHANGE_CHAMPION_SORT, payload: value}
}