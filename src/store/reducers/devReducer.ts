import { IDevIniState, DevAction, devActionTypes } from "../../types/devTypes"

const initialState: IDevIniState = {
    sessionID: '',
    signature: '',
    playerNamedev: ''
}


const devReducer = (state = initialState, action: DevAction): IDevIniState => {
    switch(action.type){
        case devActionTypes.CHANGE_SIGNATURE:
            return {...state, signature: action.payload}
        case devActionTypes.CHANGE_SESSION_ID:
            return {...state, sessionID: action.payload}
        default:
            return state
    }
}


export default devReducer