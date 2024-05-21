import "../index.css"
import { useState } from "react"
import axios from "axios"

function App()
{
const [city,setcity]= useState("")
const [weather,setweather]=useState("")
const [temperature,settemperature]=useState("")
const [description,setdescription]=useState("")

function handlecity(evt)
{
    setcity(evt.target.value)
}

function getweather(){
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbe5d5151a2bd74936cfdd3dd7323354`)
    weatherdata.then(function(success){
        console.log(success.data)
        setweather (success.data.weather[0].main)
        setdescription (success.data.weather[0].description)
        settemperature(success.data.main.temp)
    })
}

    return(
        <div className="bg-black p-20 "> 
        <div className="bg-green-600 p-20 border rounded-md">
        <h1 className="font-medium text-2xl">Weather Report </h1>
        <p>I can give you a weather report about your city !</p>
        <input onChange={handlecity}className="mt-2 border rounded-md " placeholder=" Enter City Name"></input> <br/>
        <button onClick={getweather}className="mt-2 bg-black text-white p-1 rounded-md">Get Report</button>
        <h1 className="font-medium" >Current Weather in : {city}</h1>
        <h1 className="font-medium" >Weather : {weather}</h1>
        <h1 className="font-medium" >Temperature : {temperature}</h1>
        <h1 className="font-medium" >Description : {description}</h1>
        </div>
        </div>
    )
}
export default App