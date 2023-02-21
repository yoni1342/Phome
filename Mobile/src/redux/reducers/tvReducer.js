import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
};

export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        turnOn: state => {
            state.status = true;
        },
        turnOff: state => {
            state.status = false;
        }
    }
});

export const { turnOn } = tvSlice.actions;
export default tvSlice.reducer;
