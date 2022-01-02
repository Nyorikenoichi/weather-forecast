import * as React from 'react';
import {useEffect, useState} from 'react';
import Urls from '../constants/urls';
import WeatherCard from './weatherCard';
import DayWeather from '../interfaces/dayWeather';

export default function WeekContainer(): JSX.Element {
  const [days, setDays] = useState([]);

  useEffect(() => {
      fetch(Urls.weatherURL)
      .then(response => response.json())
      .then(data => {
        setDays(convertBackendData(data));
      });
  }, []);

  const convertBackendData = (data): DayWeather[] => {
    let newData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'));

    newData = newData.map(day => ({
      weekday: new Date(day.dt * 1000).toLocaleString('eng', {weekday: 'long'}),
      temperature: day.main.temp,
      weatherDescription: day.weather[0].description,
      iconId: day.weather[0].id,
    }));
    return newData;
  };

  const formatCards = () => {
    return days.map((day, index) => <WeatherCard day={day} key={index}/>);
  };

  return (
    <div className="container">
      <h1 className="title">5-Day Forecast.</h1>
      <div className="row">
        {formatCards()}
      </div>
    </div>
  );
}
