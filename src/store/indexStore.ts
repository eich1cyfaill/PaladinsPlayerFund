import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk"
import playerSearchReducer from "./reducers/playerSearchReducer";
import { composeWithDevTools } from 'redux-devtools-extension'




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))