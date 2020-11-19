import { combineReducers } from 'redux'
import modal from './modal'
import links from './links'

const rootReducer = combineReducers({
  modal, 
  links
})

export default rootReducer