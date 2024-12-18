import "./SearchBox.css"
import {useState} from "react";
export default function SearchBox({updateInfo}) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5ed6aace501a7d3f92cdf424e184d8da";



    let [city, setCity] = useState("Delhi");
    let [error, setError] = useState("");

    const getWeather = async()=>{

        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if(!response || response.status === 400 || response.status === 404){
            setError("No City Found")
            console.log("No City Found");
        }
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let results = {
            temp : jsonResponse.main.temp,
            city: jsonResponse.name,
            weather: jsonResponse.weather[0].description,
            wind: jsonResponse.wind.speed,
            humidity: jsonResponse.main.humidity,
        }
        console.log(results);
        setError("")
        return results
    }

    let handleChange = (evt)=>{
         setCity(evt.target.value)
    }

    let handleSubmit = async (e) => {
            e.preventDefault();
            console.log(city);
            let newinfo = await getWeather();
            updateInfo(newinfo);
        }

    return (
        <div className={"SearchContainer"}>

            <div className="Search">
                <input placeholder={"Enter City"}  onChange={handleChange}/>
                <button onClick={handleSubmit}>
                    <box-icon  name='search'></box-icon>
                </button>
            </div>
            <div className={"error"}>
                {error && <p >No City Found</p>}
            </div>
        </div>
    )
}
