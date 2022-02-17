import { IChampionListIniState, ChampionListAction, ChampionListActionTypes } from "../../types/championListTypes";


const initialState: IChampionListIniState = {
    championList: [
        {id: 0, name: 'buck', role: 'Flanker'},
        {id: 1, name: 'ash', role: 'Tank'},
        {id: 2, name: 'barik', role: 'Tank'},
        {id: 3, name: 'androxus', role: 'Flanker'},
        {id: 4, name: 'corvus', role: 'Healer'},
        {id: 6, name: 'io', role: 'Healer'},
        {id: 7, name: 'cassie', role: 'Damage'},
        {id: 8, name: 'sha lin', role: 'Damage'},
        {id: 9, name: 'tyra', role: 'Damage'},
        {id: 10, name: 'victor', role: 'Damage'},
        {id: 11, name: 'willo', role: 'Damage'},
        {id: 12, name: 'jenos', role: 'Healer'},
        {id: 13, name: 'seris', role: 'Healer'},
        {id: 14, name: 'furia', role: 'Healer'},
        {id: 15, name: 'rei', role: 'Healer'},
        {id: 16, name: 'Vora', role: 'Flanker'},
        {id: 17, name: 'Skye', role: 'Flanker'},
        {id: 18, name: 'moji', role: 'Flanker'},
        {id: 19, name: 'strix', role: 'Damage'},
        {id: 20, name: 'kinessa', role: 'Damage'},
        {id: 21, name: 'raum', role: 'Tank'},
        {id: 22, name: 'makoa', role: 'Tank'},
        {id: 22, name: 'khan', role: 'Tank'},
        {id: 22, name: 'terminus', role: 'Tank'},
    ],
    championSearchQuery: '',
    championSearchRole: ''
}


const championListReducer = (state =  initialState, action: ChampionListAction): IChampionListIniState => {
    switch (action.type) {
        case ChampionListActionTypes.CHANGE_CHAMPION_SORT:
            if(action.payload === state.championSearchRole){
                return {...state, championSearchRole: ""}
            }
            return {...state, championSearchRole: action.payload}
        case ChampionListActionTypes.CHANGE_CHAMPION_QUERY:
            return {...state, championSearchQuery: action.payload}
        default:
            return state
    }
}

export default championListReducer