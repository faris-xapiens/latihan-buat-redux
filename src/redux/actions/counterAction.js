import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "./actionTypes"

export const incCounter = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: 1
    }
}

export const decCounter = () => {
    return {
        type: DECREMENT_COUNTER,
        payload: 1
    }
}

export const resetCounter = () => {
    return {
        type: RESET_COUNTER,
    }
}