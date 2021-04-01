import {combineReducers as combiner} from 'redux'
import articleReducer from './articleReducer'
import counterReducer from './counterReducer'

export default combiner({
    counter: counterReducer,
    articles: articleReducer
})
