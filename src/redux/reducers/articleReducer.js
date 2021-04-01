import {FETCHING_ARTICLE_SUCCESS, FETCHING_ARTICLE_REQUEST, FETCHING_ARTICLE_FAILURE} from "../actions/actionTypes"

const initialState = {
    article: []
}

const articleReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case FETCHING_ARTICLE_REQUEST:
            return {
                ...state
            }
        case FETCHING_ARTICLE_SUCCESS:
            return {
                ...state,
                article: payload,
            }
        case FETCHING_ARTICLE_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default articleReducer;