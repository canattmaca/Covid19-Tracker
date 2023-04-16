import React from 'react'
import { useSelector } from "react-redux";
import { covidDataSelector} from "../../redux/Slices/dataSlice";
import DetailContainer from './DetailsContainer';


function Details() {
const covidData =useSelector(covidDataSelector)


  return (
    <div className='mt-5'  >
        {
            covidData && 
            <DetailContainer/>
        }
    </div>
  )
}

export default Details