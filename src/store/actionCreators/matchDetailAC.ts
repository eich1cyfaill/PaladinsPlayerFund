import { MatchDetailsModalAction, MatchDetailTypes } from "../../types/matchDetailTypes"
import { Dispatch } from "redux"
import axios from "axios"
import { signatureDI, signature, signatureAPI } from "../../lib/signature"
import { resDate } from "../../lib/date"

export const acFetchMatchDetails = (sessionID: string | undefined, matchId: string | undefined) => {
    return async(dispatch: Dispatch<MatchDetailsModalAction>) => {
        dispatch({type: MatchDetailTypes.FETCH_MATCH_DETAILS})
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmatchdetailsjson/${signatureDI}/${signature(signatureDI, "getmatchdetails", signatureAPI, resDate())}/${sessionID}/${resDate()}/${matchId}`)
        dispatch({type: MatchDetailTypes.FETCH_FIRST_TEAM, payload: response.data.slice(0, 5)})
        dispatch({type: MatchDetailTypes.FETCH_SECOND_TEAM, payload: response.data.slice(5, 10)})
        dispatch({type: MatchDetailTypes.FETCH_MATCH_DETAILS_SUCCESS})
    }
}