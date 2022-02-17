import { IPlayerInfoIniState, PlayerInfoTypes } from "../../types/playerInfoTypes"

const initialState: IPlayerInfoIniState = {
    isPlayerNameNotFound: false,
    isMatchHistoryLoading: false,
    isPlayerStatusLoading: false,
    isPlayerChampionsLoading: false,
    isPlayerInfoLoading: false,
    matchHistory: [],
    championRanks: [],
    championRanksBatch: [],
    isLoading: false,
    level: 0,
    PlatformName: '',
    id: 0,
    activePlayerId: 0,
    avatarId: 0,
    avatarURL: '',
    createdDatetime: '',
    hoursPlayed: 0,
    hzPlayerName: '',
    lastLoginDatetime: '',
    losses: 0,
    wins: 0,
    masteryLevel: 0,
    platform: 'Test Platform',
    region: '',
    status: 0,
    statusDesc: '',
    rankedStats: {
        Losses: 0,
        points: 0,
        prevRank: 0,
        rank: 0,
        season: 0,
        Tier: 0,
        Wins: 0
    },
    currentPickedMatchId: 0
}

const playerInfoReducer = (state = initialState, action: any): IPlayerInfoIniState => {
    switch(action.type){
        case PlayerInfoTypes.FETCH_PLAYER:
            return {...state, isLoading: true}
        case PlayerInfoTypes.FETCH_PLAYER_SUCCESS:
            return {...state, isLoading: false,
                isPlayerNameNotFound: false,
                level: action.payload.Level,
                PlatformName: action.payload.Name,
                id: action.payload.Id,
                activePlayerId: action.payload.ActivePlayerId,
                avatarId: action.payload.AvatarId,
                avatarURL: action.payload.AvatarURL,
                createdDatetime: action.payload.Created_DateTime,
                hoursPlayed: action.payload.HoursPlayed,
                hzPlayerName: action.payload.hz_player_name,
                lastLoginDatetime: action.payload.Last_Login_Datetime,
                losses: action.payload.Losses,
                wins: action.payload.Wins,
                masteryLevel: action.payload.MasteryLevel,
                platform: action.payload.Platform,
                region: action.payload.Region,
                rankedStats: action.payload.RankedKBM
            }
        case PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS:
            return {...state, isPlayerChampionsLoading: true}
        case PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS_SUCCESS:
            return {...state, championRanks: action.payload}
        case PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS_BATCH:
            return {...state, championRanksBatch: action.payload, isPlayerChampionsLoading: false}
        case PlayerInfoTypes.GET_PLAYER_STATUS:
            return {...state, status: action.payload, isPlayerStatusLoading: true}
        case PlayerInfoTypes.GET_PLAYER_STATUS_DESC:
            return {...state, statusDesc: action.payload}
        case PlayerInfoTypes.GET_PLAYER_MATCH_HISTORY:
            return {...state, isMatchHistoryLoading: true}
        case PlayerInfoTypes.GET_PLAYER_MATCH_HISTORY_SUCCESS:
            return {...state, isMatchHistoryLoading: false, matchHistory: action.payload}
        case PlayerInfoTypes.FETCH_PLAYER_ERROR:
            return {...state, isPlayerNameNotFound: true, isLoading: false}
        case PlayerInfoTypes.UNMOUNT_PLAYER_NOT_FOUND:
            return {...state, isPlayerNameNotFound: false}
        default:
            return state
    }
}

export default playerInfoReducer