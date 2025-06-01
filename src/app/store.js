import { configureStore } from '@reduxjs/toolkit'
import aadharReducer  from '../features/aadhar/aadharSlices'

export default configureStore({
  reducer: {
    aadhar : aadharReducer},
})