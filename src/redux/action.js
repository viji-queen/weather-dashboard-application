export const SET_TEMPERATURE_UNIT = 'SET_TEMPARATURE_UNIT'

export const setTemperatureUnit = unit =>({
    type: SET_TEMPERATURE_UNIT,
    payload: unit,
})
console.log("Going to action");