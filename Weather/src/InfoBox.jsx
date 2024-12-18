import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function InfoBox({info}) {

    let cloudy = "https://static.vecteezy.com/system/resources/thumbnails/048/105/842/small_2x/steam-white-clouds-special-effect-3d-rendering-isolated-transparent-background-png.png";
    let rainy = "https://static.vecteezy.com/system/resources/thumbnails/010/989/526/small_2x/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
    let sunny = "https://static.vecteezy.com/system/resources/thumbnails/010/989/785/small_2x/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
    return (
        <div className={"InfoContainer"}>
            <div>
                <img className={"Emoji"} src={info.humidity > 80 ? rainy : info.temp > 30 ? sunny : cloudy} alt="Emoji" />
            </div>
            <div className={"MainContainer"}>
                <h1 className={"Temprature"}> {info.temp}&deg;C </h1>
                <h1 className={"City"}>{info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 30 ? <LightModeIcon/> : <AcUnitIcon />}</h1>
            </div>
            <div className={"normalInfo"}>
                <div>
                    <h3 className={"Humidity"}>
                        <box-icon name='water' color='#fdfdfd'></box-icon>
                        {info.humidity}%
                        <br/>
                        <p >humidity</p>
                    </h3>
                </div>
                <div>
                    <h3 className={"WindSpeed"}>
                    <box-icon  name='wind' color='#fdfdfd'></box-icon>
                    {info.wind}km/h
                    <br/>
                    <p>wind speed</p>
                </h3>
                </div>
            </div>
        </div>
    )
}