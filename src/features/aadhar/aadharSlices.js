import { createSlice } from '@reduxjs/toolkit'

export const aadharSlice = createSlice({
  name: 'aadhar',
  initialState: {
   items:[
    
   ],
  },
  reducers: {
    addAadharNumber: (state,action) => {
 state.items.push({
      aadhar:action.payload,
      photo:"https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
      dateOfBirth:"03-05-2000",
      name:"suhail"
 })
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addAadharNumber } = aadharSlice.actions

export default aadharSlice.reducer