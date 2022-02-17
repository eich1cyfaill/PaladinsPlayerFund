import { DevAction, devActionTypes } from "../../types/devTypes"
import { Dispatch } from "redux"
import axios from "axios"
import { devID, AuthKey } from "../../DAL/indexAPI"
import { signatureDI, signatureMethod, signatureAPI, signature } from "../../lib/signature"
import { resDate } from '../../lib/date'
import md5 from "blueimp-md5"
import { useTypeSelector } from "../../hooks/useTypeSelector"




export const createSession = () => {
    return async (dispatch: Dispatch<DevAction>) => {
        try{
            dispatch({type: devActionTypes.CHANGE_SIGNATURE, payload: signature(signatureDI, signatureMethod, signatureAPI, resDate())})
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/createsessionJson/${devID}/${signature(signatureDI, "createsession", signatureAPI, resDate())}/${resDate()}`)

            dispatch({type: devActionTypes.CHANGE_SESSION_ID, payload: response.data.session_id})
        } catch(e) {
            console.error('Error to Creating Session')
        }
    }
}


export const DevGetPlayer = (sessionID: string) => {
    return async (dispatch: Dispatch<DevAction>) => {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getplayerjson/${devID}/${signature(signatureDI, "getplayer", signatureAPI, resDate())}/${sessionID}/${resDate()}/YaNeZnalShoEi14`)

        } catch (e) {
            console.error('Error to Get Player')
        }
    }
}

export const DevGetDataUsage = (sessionID: string) => {
    return async (dispatch: Dispatch<DevAction>) => {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getdatausedjson/${devID}/${signature(signatureDI, "getdataused", signatureAPI, resDate())}/${sessionID}/${resDate()}`)
            console.log(response)
        } catch (e) {
            console.error('ERROR DUE GET DATAUSAGE')
        }
    }
}

export const DevGetChampionRanks = (sessionID: string) => {
    return async (dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getchampionranksjson/${devID}/${signature(signatureDI, "getchampionranks", signatureAPI, resDate())}/${sessionID}/${resDate()}/Chotebe`)
        console.log(response)
    }
}

export const DevGetMatchHistory = (sessionID: string, limit = 10) => {
    return async (dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmatchhistoryjson/${devID}/${signature(signatureDI, "getmatchhistory", signatureAPI, resDate())}/${sessionID}/${resDate()}/YaNeZnalShoEi14`, {
            params: {
                _limit: limit
            }
        })
        console.log(response)
    }
}

export const DevGetMatchDetails = (sessionID: string) => {
    return async (dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmatchdetailsjson/${devID}/${signature(signatureDI, "getmatchdetails", signatureAPI, resDate())}/${sessionID}/${resDate()}/1150371463`)
        console.log(response)
    }
}

export const DevGetMatchDetailsBatch = (sessionID: string) => {
    return async (dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmatchdetailsbatchjson/${devID}/${signature(signatureDI, "getmatchdetailsbatch", signatureAPI, resDate())}/${sessionID}/${resDate()}/1151012281`)
        console.log(response)
    }
}

export const DevGetMatchPlayerDetails = (sessionID: string) => {
    return async(dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmatchdetailsbatchjson/${devID}/${signature(signatureDI, "getmatchdetailsbatch", signatureAPI, resDate())}/${sessionID}/${resDate()}/1151012281`)
        console.log('GET MATCH DETAILS PLAYER', response)
    }
}

export const DevGetMotD = (sessionID: string) => {
    return async(dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getmotdjson/${devID}/${signature(signatureDI, "getmotd", signatureAPI, resDate())}/${sessionID}/${resDate()}`)
        console.log(response)
    }
}

export const DevGetLeagueSeasons = (sessionID: string) => {
    return async(dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getleagueseasonsjson/${devID}/${signature(signatureDI, "getleagueseasons", signatureAPI, resDate())}/${sessionID}/${resDate()}/486`)
        console.log(response)
    }
}

export const DevGetLeagueLeaderboard = (sessionID: string) => {
    return async(dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/getleagueleaderboardjson/${devID}/${signature(signatureDI, "getleagueleaderboard", signatureAPI, resDate())}/${sessionID}/${resDate()}/486/26/1`)
        console.log(response)
    }
}

export const DevGetTopMatches = (sessionID: string) => {
    return async(dispatch: Dispatch<DevAction>) => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.paladins.com/paladinsapi.svc/gettopmatchesjson/${devID}/${signature(signatureDI, "gettopmatches", signatureAPI, resDate())}/${sessionID}/${resDate()}`)
        console.log(response)
    }
}