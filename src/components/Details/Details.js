import React from 'react'
import { useSelector } from "react-redux";
import { covidDataSelector,imageSelector} from "../../redux/Slices/dataSlice";
import DetailContainer from './DetailsContainer';


function Details() {
const covidData =useSelector(covidDataSelector)
const images=useSelector(imageSelector)

console.log(covidData);

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