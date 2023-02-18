import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
        addUser:function(state:any,action){
            state.items.push(action.payload);
            axios.post('http://localhost:8000/users',action.payload)
            .then(function (response) {
              toast.success('Thêm thành công!')
            })
            .catch(function (error) {
              toast.error('thêm lỗi')
            });
        },
        deleteUser:function(state:any,action:any){
            axios.delete(`http://localhost:8000/users/${action.payload}`)
            .then(function (response) {
              toast.success('Xóa thành công!')
            })
            .catch(function (error) {
              toast.error('Xóa lỗi')
            });
        },
        getListUsers:function(state,action){
          state.items = action.payload;
        },
        getUsers:function(state,action){
          
        },
        editUsers:function(state,action){
          state.items.map((item:any)  =>{
            if(item.id == Number(action.payload.id)){
              item.name =action.payload.name;
              item.phoneNumber =action.payload.phoneNumber;
              item.email =action.payload.email;
              axios.put(`http://localhost:8000/users/${action.payload.id}`,action.payload)
            .then(function (response) {
              toast.success('Update thành công!')
            })
            .catch(function (error) {
              toast.error('Update lỗi')
            });
            }
          })
        }
  }
})
export const { addUser,deleteUser ,getListUsers,editUsers} = userSlice.actions

export default userSlice.reducer