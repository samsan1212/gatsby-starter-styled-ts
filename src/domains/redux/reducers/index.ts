import { combineReducers } from "redux"
import { toReducer } from "redux-functions"

import { SET_ACTION } from "@/domains/redux/action/type/types"

const sample = toReducer(SET_ACTION, 0)

export default combineReducers<ReduxStore>({
  sample,
})
