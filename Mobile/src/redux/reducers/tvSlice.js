import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const MAX_VOLUME = 100;
const MAX_CHANNEL = 10;

const initialState = {
  status: true,
  volume: 0,
  channel: 0,
  isMute: false,
  volCatch: 0,
  chCatch: 0,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    changeStatus: (state) =>
      produce(state, (draftState) => {
        console.log(draftState)
        if (draftState.status) {
          draftState.status = false;
          draftState.chCatch = draftState.channel;
          draftState.volCatch = draftState.volume;
          draftState.channel = 0;
          draftState.volume = 0;
        } else {
          draftState.status = true;
          draftState.channel = draftState.chCatch;
          draftState.volume = draftState.volCatch;
        }
        return draftState
      }),
    addVolume: (state) =>
      produce(state, (draftState) => {
        const { volume } = draftState;
        if (volume !== MAX_VOLUME) {
          draftState.volume += 1;
        }
      }),
    subVolume: (state) =>
      produce(state, (draftState) => {
        const { volume } = draftState;
        if (volume !== 0) {
          draftState.volume -= 1;
        }
      }),
    addChannel: (state) =>
      produce(state, (draftState) => {
        const { channel } = draftState;
        if (channel !== MAX_CHANNEL) {
          draftState.channel += 1;
        }
      }),
    subChannel: (state) =>
      produce(state, (draftState) => {
        const { channel } = draftState;
        if (channel !== 0) {
          draftState.channel -= 1;
        }
      }),
    changeMute: (state) =>
      produce(state, (draftState) => {
        if (draftState.isMute) {
          draftState.isMute = false;
          draftState.volume = draftState.volCatch;
        } else {
          draftState.isMute = true;
          draftState.volCatch = draftState.volume;
          draftState.volume = 0;
        }
        return draftState
      }),
  },
});

export const {
  addChannel,
  addVolume,
  subChannel,
  subVolume,
  changeMute,
  changeStatus,
} = tvSlice.actions

export default tvSlice.reducer