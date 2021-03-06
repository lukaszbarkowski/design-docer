import * as actionTypes from './actions';

const initialState = {
    activeSection:null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ACTIVE_SECTION:
            if(state.activeSection!==action.id){
                return{
                    ...state,
                    activeSection:action.id
                }
            }
    }
    return state;
}

export default reducer;