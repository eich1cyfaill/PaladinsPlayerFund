import { ChampionObject } from "./championListTypes";

export enum PlayerInfoTypes {
    FETCH_PLAYER = "FETCH_PLAYER",
    FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS",
    FETCH_PLAYER_ERROR = "FETCH_PLAYER_ERROR",
    FETCH_PLAYER_CHAMPION_RANKS = "FETCH_PLAYER_CHAMPION_RANKS",
    FETCH_PLAYER_CHAMPION_RANKS_SUCCESS = "FETCH_PLAYER_CHAMPION_RANKS_SUCCESS",
    FETCH_PLAYER_CHAMPION_RANKS_ERROR = "FETCH_PLAYER_CHAMPION_RANKS_ERROR",
    FETCH_PLAYER_CHAMPION_RANKS_BATCH = "FETCH_PLAYER_CHAMPION_RANKS_BATCH",
    GET_PLAYER_STATUS = "GET_PLAYER_STATUS",
    GET_PLAYER_STATUS_DESC = "GET_PLAYER_STATUS_DESC",
    GET_PLAYER_STATUS_SUCCESS = "GET_PLAYER_STATUS_SUCCESS",
    GET_PLAYER_MATCH_HISTORY = "GET_PLAYER_MATCH_HISTORY",
    GET_PLAYER_MATCH_HISTORY_SUCCESS = "GET_PLAYER_MATCH_HISTORY_SUCCESS",
    GET_PLAYER_MATCH_HISTORY_ERROR = "GET_PLAYER_MATCH_HISTORY_ERROR",
    FETCH_CURRENT_PICKED_MATCH_ID = "FETCH_CURRENT_PICKED_MATCH_ID",
    UNMOUNT_PLAYER_NOT_FOUND = "UNMOUNT_PLAYER_NOT_FOUND"
}


export interface IPlayerInfoIniState {
    isPlayerNameNotFound: boolean
    matchHistory: any[],
    isMatchHistoryLoading: boolean,
    isPlayerStatusLoading: boolean,
    isPlayerChampionsLoading: boolean,
    isPlayerInfoLoading: boolean
    championRanks: any[]
    championRanksBatch: any[]
    isLoading: boolean
    activePlayerId: number
    avatarId: number
    avatarURL: string
    createdDatetime: string
    hoursPlayed: number
    id: number
    lastLoginDatetime: string
    level: number
    losses: number
    masteryLevel: number
    PlatformName: string
    platform: string
    region: string
    wins: number
    hzPlayerName: string
    status: number | any | bigint
    statusDesc: string
    rankedStats: ranked,
    currentPickedMatchId: number
}

interface ranked {
    Tier: number
    Losses: number
    points: number
    prevRank: number
    rank: number
    season: number
    Wins: number
}



export interface IFetchPlayer {
    type: PlayerInfoTypes.FETCH_PLAYER
}

export interface IFetchPlayerSuccess {
    type: PlayerInfoTypes.FETCH_PLAYER_SUCCESS
    payload: any[]
}

export interface IFetchPlayerError {
    type: PlayerInfoTypes.FETCH_PLAYER_ERROR
}

export interface IFetchPlayerChampionRanks {
    type: PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS
}

export interface IFetchPlayerChampionRanksSuccess {
    type: PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS_SUCCESS
    payload: []
}

export interface IFetchPlayerChampionRanksError {
    type: PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS_ERROR
    payload: string
}

export interface IFetchPlayerChampionRanksBatch {
    type: PlayerInfoTypes.FETCH_PLAYER_CHAMPION_RANKS_BATCH,
    payload: any[]
}

export interface IGetPlayerStatus {
    type: PlayerInfoTypes.GET_PLAYER_STATUS,
    payload: number
}

export interface IGetPLayerStatusDescription {
    type: PlayerInfoTypes.GET_PLAYER_STATUS_DESC,
    payload: string
}

export interface IGetPlayerStatusSuccess {
    type: PlayerInfoTypes.GET_PLAYER_STATUS_SUCCESS,
}

export interface IGetPlayerMatchHistory {
    type: PlayerInfoTypes.GET_PLAYER_MATCH_HISTORY
}

export interface IGetPlayerMatchHistorySuccess {
    type: PlayerInfoTypes.GET_PLAYER_MATCH_HISTORY_SUCCESS
    payload: any[]
}

export interface IGetPlayerMatchHistoryError {
    type: PlayerInfoTypes.GET_PLAYER_MATCH_HISTORY_ERROR
    payload: string
}

export interface IFetchCurrentPickedMatchId {
    type: PlayerInfoTypes.FETCH_CURRENT_PICKED_MATCH_ID
    payload: number
}

export interface IUnmountPlayerNotFound {
    type: PlayerInfoTypes.UNMOUNT_PLAYER_NOT_FOUND
}

export type PlayerInfoAction = IFetchPlayer | IFetchPlayerSuccess | IFetchPlayerError |
    IFetchPlayerChampionRanks | IFetchPlayerChampionRanksSuccess | IFetchPlayerChampionRanksError |
    IFetchPlayerChampionRanksBatch | IGetPlayerStatus | IGetPLayerStatusDescription | IGetPlayerStatusSuccess | IGetPlayerMatchHistory |
    IGetPlayerMatchHistorySuccess | IGetPlayerMatchHistoryError | IFetchCurrentPickedMatchId | IUnmountPlayerNotFound
