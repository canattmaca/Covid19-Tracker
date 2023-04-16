import Search from "./Search/Search";
import Details from "./Details/Details";
import { GEO_API_URL,geoApiOptions } from "../api";

import { covidApiOptions, COVID_API_URL } from "../api";
import { setCovidData,setImageUrl } from "../redux/Slices/dataSlice";
import { useDispatch } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  const handleOnSearchChange = (searchData) => {
    const [countryName, countryCode] = searchData.label.split(",");
    fetch(`${COVID_API_URL}/total?country=${countryName}`, covidApiOptions)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        dispatch(setCovidData(data));
      })
      .catch((err) => console.log(err));

    fetch(`${GEO_API_URL}/countries/${countryCode}`, geoApiOptions)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.flagImageUri;
        dispatch(setImageUrl(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Covid 19 Tracker</h1>
      <Search onSearchChange={handleOnSearchChange} /> 
      <Details />
    </>
  );
}

export default Index;
