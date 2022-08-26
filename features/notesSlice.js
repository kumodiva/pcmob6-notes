import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { exp } from "react-native/Libraries/Animated/Easing";
import { API, API_CREATE, API_POSTS, API_STATUS } from "../constants";

const initialState = {
    post: [],
    status: API_STATUS.idle,
    error: null,
};

export const fetchPosts = createAsyncThunk("notes/fetchPosts", async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(API  + API_POSTS, {
        headers: { Authorization: 'JWT $(token)'},
    });
    return response.data;
})

export const addNewPost = createAsyncThunk(
    "notes/addNewPost",
    async (newPost) => {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.post(API + API_CREATE, newPost, {
            headers: { Authorization: 'JWT $(token)' },
        });
        return response.data;
    }
);

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