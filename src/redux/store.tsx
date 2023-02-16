import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice.tsx';


export const store  = configureStore({
    reducer:{
        users: userSlice
    }
})

