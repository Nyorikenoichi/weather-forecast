import * as React from 'react';
import DayWeather from '../interfaces/dayWeather';

interface cardProps {
  day: DayWeather;
  key: number;
}

export default function WeatherCard(props: cardProps): JSX.Element {
  const iconURL = 'owf owf-'+ props.day.iconId +' owf-5x card-icon';

  return (
    <div className='column'>
      <div className="card">
        <h3 className="card-title">{props.day.weekday}</h3>
        <i className={iconURL}></i>
        <h2 className="card-temperature">{Math.round(props.day.temperature)} °C</h2>
        <div className="card-body">
          <p className="card-text">{props.day.weatherDescription}</p>
        </div>
      </div>
    </div>
  );
}
