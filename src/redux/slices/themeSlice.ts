import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IState {
    theme: string
}

const initialState: IState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        }
    }
})

export const themeActions = {
    ...themeSlice.actions
}