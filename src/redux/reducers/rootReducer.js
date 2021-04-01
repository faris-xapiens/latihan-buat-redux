import {combineReducers as combiner} from 'redux'
import counterReducer from './counterReducer'

export default combiner({
    counter: counterReducer
})
