import { CreateSlice } from "@reduxjs/toolkit";

export const doorSlice = CreateSlice({
    name: "door",
    initialState: {
        frontDoor: true,
        backDoor: true,
        kitchenDoor: true,
        BedDoor: true,
    },
    reducers: {
        openFrontDoor: (state) => {
            state.frontDoor = true;
        },
        openBackDoor: (state) => {
            state.backDoor = true;
        },
        openKitchenDoor: (state) => {
            state.kitchenDoor = true
        },
        openBedDoor: (state) => {
            state.BedDoor = true
        },
        closeFrontDoor: state=>{
            state.frontDoor = false
        },
        closeBackDoor: state=>{
            state.backDoor = false
        },
        closeKitchenDoor: state=>{
            state.kitchenDoor = false
        },
        closeBedDoor: state=>{
            state.BedDoor = false
        }

    }
});

export const { openFrontDoor, openBackDoor, openKitchenDoor, openBedDoor, closeFrontDoor, closeBackDoor, closeKitchenDoor, closeBedDoor } = doorSlice.actions;
export default doorSlice.reducer;
