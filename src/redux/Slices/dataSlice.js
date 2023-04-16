import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    covidData: null,
    imageURL:null
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCovidData: (state, action) => {
      state.covidData = action.payload
    },
    setImageUrl: (state, action) => {
      state.imageURL = action.payload
    },
  },
  },

)


export const {setCovidData,setImageUrl} = dataSlice.actions

export const covidDataSelector = (state)=>state.data.covidData
export const imageSelector = (state)=>state.data.imageURL

export default dataSlice.reducer