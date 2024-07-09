import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weather,setWeather] = useState(null);
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const lat = position.coords.latitude
                const lon = position.coords.longitude

                fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=1643803200&appid=4c67171e33758c8fece2fc85f34f22c5`)
                .then(res=>res.json())
                .then(data => console.log(data));
            })
        }

    },[])
  return (
    <div>
        {weather ? (
            <div>
                <h1>current weather</h1>
                <p>temparture : {weather.main.temp}</p>
                <p>conditions: {weather.weather[0].description}</p>

            </div>
        ):(
            <p>loading..</p>
        )}
    </div>
  )
}

export default Weather