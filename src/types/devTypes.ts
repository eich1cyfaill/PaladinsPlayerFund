export enum devActionTypes {
    CHANGE_SESSION_ID = 'CHANGE_SESSION_ID',
    CHANGE_SIGNATURE = 'CHANGE_SIGNATURE',
    CHANGE_SPLAYER_NAME = 'CHANGE_SPLAYER_NAME'
}

export interface IChangeSignature {
    type: devActionTypes.CHANGE_SIGNATURE
    payload: string
}

export interface IChangeSessionID {
    type: devActionTypes.CHANGE_SESSION_ID
    payload: string
}

export interface IDevIniState {
    sessionID: string
    signature: string
    playerNamedev: string
}

export type DevAction = IChangeSessionID | IChangeSignature



