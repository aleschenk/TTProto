import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import events from './events'

const rootReducer = combineReducers({
  user, events, router: routerReducer
})

export default rootReducer
