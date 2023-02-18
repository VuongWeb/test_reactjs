import { createSlice } from '@reduxjs/toolkit';


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
            state.items = state.items.filter(item => item.id != action.payload.id)
        },
        getListUsers:function(state,action){
          // state.items.push(action.payload);
        }

  }
})
export const { addUser,deleteUser ,getListUsers} = userSlice.actions

export default userSlice.reducer