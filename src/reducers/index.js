import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import events from './events'
import schedule from './schedule'

const rootReducer = combineReducers({
  user, events, schedule, router: routerReducer
})

export default rootReducer
