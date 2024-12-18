import InfoBox from './InfoBox.jsx';
import  "./WeatherApp.css";
import SearchBox from "./SeachBox.jsx";
import {useState} from "react";
export default function WeatherApp() {

    let [weatherData, setWeatherData] = useState( {
            temp: 14.05,
            wind:1.54,
            humidity: 77,
            city:"Delhi",
        })

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    }


    return (
        <div className="App">
        <div className="Card" >

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherData} />
        </div>
        </div>
    )
};