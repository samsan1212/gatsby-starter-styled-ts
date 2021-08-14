import { toActionCreator } from "redux-functions"
import { SET_ACTION } from "./type/types"

export const setAction = toActionCreator<number>(SET_ACTION)
