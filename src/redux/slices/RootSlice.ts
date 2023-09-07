import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        park_name: "Park name",
        state: "State",
        founded: "Founded",
        popularity: "Popularity / 10",
        beauty: "Beauty / 10"
    },
    reducers: {
        choosePark_name: (state, action) => { state.park_name = action.payload},
        chooseState: (state, action) => { state.state = action.payload},
        chooseFounded: (state, action) => { state.founded = action.payload},
        choosePopularity: (state, action) => { state.popularity = action.payload},
        chooseBeauty: (state, action) => { state.beauty = action.payload},

    }
})

export const reducer = rootSlice.reducer;
export const { choosePark_name, chooseState, chooseFounded, choosePopularity, chooseBeauty} = rootSlice.actions