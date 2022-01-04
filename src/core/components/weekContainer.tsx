import * as React from 'react';
import {useEffect, useState} from 'react';
import Urls from '../constants/urls';
import WeatherCard from './weatherCard';
import DayWeather from '../interfaces/dayWeather';

export default function WeekContainer(): JSX.Element {
  const [days, setDays] = useState([]);
  const [weatherByHours, setWeatherByHours] = useState([]);

  useEffect(() => {
    getData(Urls.weatherURL).then(data => {
      const convertedData = convertBackendData(data);
      setDays(filterDays(convertedData));
      setWeatherByHours(groupDays(convertedData));
      console.log(filterDays(convertedData));
      console.log(groupDays(convertedData));
    });
  }, []);

  async function getData(url: string) {
    let response = await fetch(url);
    response = await response.json();
    return response;
  }

  function convertBackendData(data): DayWeather[]{
    let newData = data.list;

    newData = newData.map(day => ({
      weekday: new Date(day.dt * 1000).toLocaleString('eng', {weekday: 'long', timeZone: 'Europe/London'}),
      time: day.dt_txt,
      temperature: Math.round(day.main.temp),
      weatherDescription: day.weather[0].description,
      iconId: day.weather[0].id,
    }));
    return newData;
  }

  function filterDays(days: DayWeather[]): DayWeather[] {
    return days.filter(day => day.time.includes('18:00:00'));
  }

  function groupDays(days: DayWeather[]){
    const newDays = [[],[],[],[],[],[]];
    let i = 0, curDay = days[0].weekday;

    days.forEach(day => {
      if(day.weekday === curDay) {
        newDays[i].push(day);
      } else {
        i++;
        curDay = day.weekday;
        newDays[i].push(day);
      }
    });

    return newDays;
  }

  function formatCards() {
    return days.map((day, index) => <WeatherCard day={day} weatherByHours={weatherByHours[index]} key={index}/>);
  }

  return (
   <div className="weekContainer">
     {formatCards()}
   </div>
  );
}
