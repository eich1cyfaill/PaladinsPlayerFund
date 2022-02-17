export enum MatchDetailTypes {
    FETCH_MATCH_DETAILS = "FETCH_MATCH_DETAILS",
    FETCH_MATCH_DETAILS_SUCCESS = "FETCH_MATCH_DETAILS_SUCCESS",
    FETCH_MATCH_DETAILS_ERROR = "FETCH_MATCH_DETAILS_ERROR",
    FETCH_FIRST_TEAM = "FETCH_FIRST_TEAM",
    FETCH_SECOND_TEAM = "FETCH_SECOND_TEAM"
}

export interface IMatchDetailsModalIniState {
    isLoading: boolean,
    firstTeam: any[],
    secondTeam: any[]
}

export interface IFetchFirstTeam {
    type: MatchDetailTypes.FETCH_FIRST_TEAM
    payload: []
}

export interface IFetchSecondTeam {
    type: MatchDetailTypes.FETCH_SECOND_TEAM
    payload: []
}

export interface IFetchMatchDetails {
    type: MatchDetailTypes.FETCH_MATCH_DETAILS
}
export interface IFetchMatchDetailsSuccess {
    type: MatchDetailTypes.FETCH_MATCH_DETAILS_SUCCESS
}
export interface IFetchMatchDetailsError {
    type: MatchDetailTypes.FETCH_MATCH_DETAILS_ERROR
}

export type MatchDetailsModalAction = IFetchMatchDetails | IFetchMatchDetailsSuccess | IFetchMatchDetailsError |
    IFetchFirstTeam | IFetchSecondTeam
