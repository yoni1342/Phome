import { CreateSlice } from "@reduxjs/toolkit";

export const doorSlice = CreateSlice({
    name: "door",
    initialState: {
        status: false,
    },
    reducers: {
        openDoor: (state) => {
            state.status = true;
        },

        closeDoor: (state) => {
            state.status = false;
        }
    }
});

export const { openDoor } = doorSlice.actions;
export default doorSlice.reducer;