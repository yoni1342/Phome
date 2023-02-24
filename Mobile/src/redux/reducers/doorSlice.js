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
        changeFrontDoor:state=>{
            state.frontDoor = !state.frontDoor
        },
        changeBackDoor:state=>{
            state.backDoor = !state.backDoor
        },
        changeKitchenDoor:state=>{
            state.kitchenDoor = !state.kitchenDoor
        },
        changeBedDoor:state=>{
            state.BedDoor = !state.BedDoor
        }

    }
});

export const {changeFrontDoor,changeBackDoor,changeKitchenDoor,changeBedDoor} = doorSlice.actions;
export default doorSlice.reducer;