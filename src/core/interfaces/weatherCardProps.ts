import DayWeather from '../interfaces/dayWeather';

interface weatherCardProps {
  day: DayWeather;
  weatherByHours: DayWeather[];
  key: number;
}

export default weatherCardProps;
