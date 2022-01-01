import * as React from 'react';
import {useEffect, useState} from 'react';
import Urls from '../constants/urls';
import WeatherCard from './weatherCard';

export default function WeekContainer(): JSX.Element {
  const [days, setDays] = useState([]);

  useEffect(() => {
      fetch(Urls.weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'));
        setDays(dailyData);
      });
  });

  const formatCards = () => {
    return days.map((day, index) => <WeatherCard day={day} key={index/*так лучше не надо*/}/>);
  };

  return (
    <div className="container">
      <h1>5-Day Forecast.</h1>
      <div className="row justify-content-center">
        {formatCards()}
      </div>
    </div>
  );
}
