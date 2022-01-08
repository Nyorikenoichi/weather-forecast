import * as React from 'react';
import weatherCardProps from '../interfaces/weatherCardProps';
import DayWeather from '../interfaces/dayWeather';
import {useState} from 'react';

export default function WeatherCard(props: weatherCardProps): JSX.Element {
  const [dropdownActive, setDropdown] = useState(false);

  const iconURL = 'owf owf-'+ props.day.iconId +' owf-5x card-icon';

  function printWeatherByHours(){
    if(!props.weatherByHours)
      return <p>data isn&apos;t loaded yet</p>;
    return props.weatherByHours.map((day, index) => {
      return <li key={index} className={'card-temp-list'}>{getHours(day)}:  {day.temperature}°C</li>;
    });
  }

  function getHours(day: DayWeather): string {
    return day.time.split(' ')[1].slice(0, 5);
  }

  function switchDropdown() {
    setDropdown((dropdownActive) => !dropdownActive);
  }

  return (
    <div className='card'>
      <h3 className='card-title'>{props.day.weekday}</h3>
      <i className={iconURL}/>
      <h2 className='card-temperature'>{props.day.temperature} °C</h2>
      <button className={'card-description' + (dropdownActive?' card-description-dropdown':'')} onClick={switchDropdown}>
        <p className={'card-description-text'}>{props.day.weatherDescription}</p>
        <ul className={'dropdown' + (dropdownActive?' dropdown-active':'')}>
          {printWeatherByHours()}
        </ul>
      </button>
    </div>
  );
}
