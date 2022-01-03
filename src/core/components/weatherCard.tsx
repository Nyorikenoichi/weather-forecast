import * as React from 'react';
import weatherCardProps from '../interfaces/weatherCardProps';

export default function WeatherCard(props: weatherCardProps): JSX.Element {
  const iconURL = 'owf owf-'+ props.day.iconId +' owf-5x card-icon';

  return (
    <div className="card">
      <h3 className="card-title">{props.day.weekday}</h3>
      <i className={iconURL}/>
      <h2 className="card-temperature">{Math.round(props.day.temperature)} °C</h2>
      <button className="card-description">{props.day.weatherDescription}</button>
    </div>
  );
}
