import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    level: 0
}

const termoSlice = createSlice({
    name: 'termo',
    initialState,
    reducers: {
        turnOn: (state) => {
            state.status = true
        },
        turnOff: (state) => {
            state.status = false
        },
        setLevel: (state, action) => {
            state.level = action.payload
        }
    }
})

export const {turnOn, turnOff, setLevel} = termoSlice.actions

export default termoSlice.reducer