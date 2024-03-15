import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "./types.ts";

interface state {
	user: User | null
}

const initialState: state = {
	user: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, payload: PayloadAction<User>) {
			state.user = payload.payload
		},
		deleteUser(state) {
			state.user = null
		}
	},
})

export const {  addUser, deleteUser } = userSlice.actions
export default userSlice.reducer