import { createSlice } from "@reduxjs/toolkit";
import { exp } from "react-native/Libraries/Animated/Easing";

const initialState = [
    { id: "1", title: "First Post!", content: "Hello!"},
    { id: "2", title: "Second Post!", content: "Mote Text"},
];

const notesSlice = createSlice ({
    name: "notes",
    initialState,
    reducers: {
        noteAdded(state, action){
            state.push(action.payload);
        },
    },
});

export const { noteAdded } = notesSlice.actions;

export default notesSlice.reducer;