import { createSlice } from '@reduxjs/toolkit';
import { UserState } from "@/models/store/user/user-state";

const initialState: UserState = {
  information: {
    name: '',
    email: '',
    username: '',
  }
}

export const userSlice = createSlice<UserState>({
  name: 'userStore',
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    setUserName(state, action) {
      state.userDetails.name = action.payload;
    },
    setEmail(state, action) {
      state.userDetails.email = action.payload;
    },
    setUsername(state, action) {
      state.userDetails.username = action.payload;
    }
  }
});