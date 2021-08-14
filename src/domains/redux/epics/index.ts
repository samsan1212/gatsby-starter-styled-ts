/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineEpics } from "redux-observable"
import { BehaviorSubject } from "rxjs"
import { mergeMap } from "rxjs/operators"

import type { AppAction } from "redux-functions"

export const epic$ = new BehaviorSubject(
  combineEpics<AppAction<any>, any, ReduxStore, any>()
  // insert epics here
)

const rootEpic: AppEpic = (action$, state$) =>
  epic$.pipe(mergeMap((epic) => epic(action$, state$, undefined)))

/**
 * To insert asynchronous epics, please use epics$.next(asyncEpics)
 *
 * For more information, please visit https://redux-observable.js.org/docs/recipes/AddingNewEpicsAsynchronously.html
 */

export default rootEpic
