import { Action, ActionCreator } from "redux";

// Actions Types
const API_REQUEST_PENDING = 'API_REQUEST_PENDING';
const API_REQUEST_FINISHED = 'API_REQUEST_FINISHED';

// Actions Creators
export const apiRequestPendingAction: ActionCreator<Action> = () => ({
    type: API_REQUEST_PENDING
});

export const apiRequestFinishedAction: ActionCreator<Action> = () => ({
    type: API_REQUEST_FINISHED
});


// Reducer
export default function loadingReducer(state: boolean = false , action: Action) {
    switch(action.type) {
        case API_REQUEST_PENDING:
            return true
        case API_REQUEST_FINISHED:
            return false;
        default: 
            return state
    } 
}
