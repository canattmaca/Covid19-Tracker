
import { useSelector } from "react-redux";
import { covidDataSelector ,imageSelector} from "../../redux/Slices/dataSlice";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function CardDetails() {
  const covidData = useSelector(covidDataSelector);
  const images=useSelector(imageSelector)

  const focusInput=()=>{}

  return (
    <>
      <Card >
      <Card.Img variant="top" src={images? images : ''} />
        
      <Card.Title className="p-2"> {covidData.location}</Card.Title>
         
      <ListGroup variant="flush">
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Confirmed</span>
            <span>{covidData.confirmed}</span>
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Deaths</span>
            <span>{covidData.deaths}</span>
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Last Checked</span>
            <span>{covidData.lastChecked}</span>
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Last Reported</span>
            <span>{covidData.lastReported}</span>
          </ListGroup.Item>
          </ListGroup>
        
      </Card>
    </>
  );
}

export default CardDetails;
