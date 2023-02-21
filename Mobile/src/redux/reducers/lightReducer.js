import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    brightness: 0,
    color: {
        r: 0,
        g: 0,
        b: 0
    }
};

export const lightSlice = createSlice({
    name: 'light',
    initialState,
    reducers: {
        turnOn: state => {
            state.status = true;
        },
        turnOff: state => {
            state.status = false;
        },
        setBrightness: (state, action) => {
            state.brightness = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
    }
});

export const { turnOn,turnOff,setBrightness,setColor } = lightSlice.actions;
export default lightSlice.reducer;


