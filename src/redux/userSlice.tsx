import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import reducerUser from './ReducerUsers.tsx';

// export const getUser = createAsyncThunk('users/getUser', async (params, thunkAPI) => {

// })

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
    addUser: function (state: any, action) {
      console.log('add', action)
      state.items.push(action.payload);
      axios.post(' http://localhost:8000/users', action.payload)
        .then(function (response) {
          console.log('pass');
        })
        .catch(function (error) {
          console.log('err');
        });

    },
    deleteUser: function (state: any, action: any) {
      state.item = state.item.filter(item => item.id != action.payload.id)
    },

    listUsers: function (state: any, action: any) {
      reducerUser(state,action.type)
      // state.item = state;
      console.log("State", state);
      console.log("Get list", action.type);
    }
  }
})
export const { addUser, deleteUser, listUsers } = userSlice.actions

export default userSlice.reducer