import { combineReducers } from "redux";
import playerSearchReducer from './playerSearchReducer'
import championListReducer from './championListReducer'
import playerInfoReducer from './playerInfoReducer'
import matchDetailReducer from './matchDetailReducer'
import devReducer from './devReducer'
import { rankingReducer } from './rankingReducer'


export const rootReducer = combineReducers({
    playerSearchReducer,
    championListReducer,
    playerInfoReducer,
    matchDetailReducer,
    devReducer,
    rankingReducer
})

export type rootState = ReturnType<typeof rootReducer>