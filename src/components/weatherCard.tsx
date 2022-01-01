import * as React from 'react';

interface cardProps {
  day: any;
  key: any;
}

export default function WeatherCard(props: cardProps): JSX.Element {
  const ms = props.day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

  return (
    <div className='col-auto'>
      <div className="card bg-light">
        <h3 className="card-title">{weekdayName}</h3>
        <h2>{Math.round(props.day.main.temp)} °C</h2>
        <div className="card-body">
          <p className="card-text">{props.day.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}
