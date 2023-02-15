import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('users/getUser',async (params,thunkAPI)=>{

})

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
        addUser:function(state:any,action){
            state.items.push(action.payload)
        },
        deleteUser:function(state:any,action:any){
            state.item = state.item.filter(item => item.id != action.payload.id)
        }
  }
})
export const { addUser,deleteUser } = userSlice.actions

export default userSlice.reducer