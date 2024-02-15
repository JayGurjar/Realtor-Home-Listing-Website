import { combineReducers } from "redux";

const InitialState = {
    search: ""
};

const API_RESPONE = {

}


const dashboardState = (state = InitialState, action) => {
    if(action.type)
        return {...state,  ...{[`${action.type}`]: action.payload}}
    else
        return state
};

const APIState = (state = API_RESPONE, action) => {
    if(action.type)
        return {...state, metadata: {...state.metadata, ...{[`${action.type}`]: action.payload}}}
}

export default combineReducers({
    dashboard: dashboardState,
    metadata: APIState
})