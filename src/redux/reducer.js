import * as actions from './action'
export default function reducer(state='Celsius', action){
    switch(action.type){
        case actions.SET_TEMPERATURE_UNIT:
            console.log(action.payload);
            return action.payload;
        default:
            console.log(state);
            return state
    }
} 
console.log("Coming from reducer.js");