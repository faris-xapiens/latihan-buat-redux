import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from '../actions/actionTypes'

const initialState = {
    count: 0
}

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case INCREMENT_COUNTER:
            return{
                ...state, 
                count: state.count + payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - payload
            }
        case RESET_COUNTER:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

export default rootReducer;