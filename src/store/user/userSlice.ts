import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "./types.ts";

interface State {
	user: User | null
}

const initialState: State = {
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
	selectors: {
		getUser: state => state.user
	}
})

export const {  addUser, deleteUser } = userSlice.actions
export const {getUser} = userSlice.selectors
export default userSlice.reducer