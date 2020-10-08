import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumboturn from './components/Jumboturn';
import TableData from './components/TableData';
import Maps from './components/Map';
import api from './api/api';

// import CountUp from 'react-countup';

// material ui form
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import 'leaflet/dist/leaflet.css';


// import { useScroll } from 'react-scroll-hooks';
// import GoogleMapReact from 'google-map-react';

// material ui styles
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    margin:'0px auto',
    color:'#008080',
    fontWeight:'bold',
    fontSize:'20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// AIzaSyCeNv5vBqhgZbVUdkNbNyIhPbuqXZPksfw
// import Case from './components/Case';
function App() {

  // world wide cases info
  const [info,setInfo]=useState({});
  // get data of all countries
  const [countries,setCountries]=useState([]);
  // set data for table data
  const [data,setData]=useState([]);


  // material ui
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // map zoom
  const [mapCenter, setMapCenter] = useState({lat: 28.3949,lng: 84.1240});

  const [mapZoom,setMapZoom]=useState(3);

  const [caseType,setCaseType]=useState('cases');


  // scroll event handling
  // const containerRef = React.useRef();
  // const elementRef = React.useRef();
  // const scrollSpeed = 50;
  // const { scrollToElement, scrollToY } = useScroll({ scrollSpeed, containerRef })



  const handleChange = (event) => {
    const Selected=event.target.value;
    const CountryLoad=async()=>{
      const selected_response=await api.get(`/countries/${Selected}`);
      console.log(selected_response.data);
      setInfo(selected_response.data);
      setMapCenter([selected_response.data.countryInfo.lat,selected_response.data.countryInfo.long]);
      setMapZoom(5);
    }
    CountryLoad();
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    const AppLoad=async()=>{
      const response=await api.get('/all');
      setInfo(response.data); 
    }
    AppLoad();
  },[]);
  useEffect(()=>{
    const countries=async()=>{
      const response=await api.get('/countries');
      setCountries(response.data);
      // console.log(response.data);
      setData(response.data);
    }
    countries();
  },[]);
 
  return (
    <div >
      <Navbar/>
      <div className="jumbotron" style={{ position: 'relative', overflow: 'scroll' }}>
        <Jumboturn info={info} setCaseType={setCaseType} />
        <div style={{textAlign:"center",backgroundColor:"white"}}>
        <Button className={classes.button} onClick={handleOpen}>
        Select the country
      </Button>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          onChange={handleChange}
        >
          {
            countries.map((country)=>{
              return <MenuItem value={country.country} key={country.country}>{country.country}</MenuItem>
            })
          }
        </Select>
      </FormControl>
      </div>
     <Maps center={mapCenter} zoom={mapZoom} countries={countries} casesType={caseType} />
      <br />
      <TableData datas={data} style={{overflow:"scroll",height:"200px"}}/>
      
    </div>
    </div>
  );
}

export default App;
