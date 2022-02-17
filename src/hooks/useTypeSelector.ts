import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from '../store/reducers/index'


export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector