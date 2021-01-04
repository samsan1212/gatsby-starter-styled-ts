import rootEpic from "@/redux/epics"
import rootReducer from "@/redux/reducers"
import { applyMiddleware, compose, createStore } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { composeWithDevTools } from "redux-devtools-extension"

const getStore = () => {
  // epic setup
  const epicMiddleware = createEpicMiddleware<
    AppAction<any>,
    any,
    ReduxStore,
    any
  >()
  const composeEnhancers =
    process.env.NODE_ENV === "production"
      ? compose
      : composeWithDevTools({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })

  const enhancer = composeEnhancers(
    applyMiddleware(
      epicMiddleware
      // add any other middleware here
    )
    // other store enhancers if any
  )

  const store = createStore(rootReducer, enhancer)

  epicMiddleware.run(rootEpic)

  return store
}

export default getStore
