import * as React from 'react';
import WeekContainer from './weekContainer';

export default function App(): JSX.Element[] {
  return ([
    <div key={'A'} className={'header'}>
      <h1 className={'title'}>5 day weather forecast</h1>
    </div>,
    <div key={'B'} className={'content'}>
      <h2 className={'city-name'}>Minsk</h2>
      <WeekContainer />
    </div>
  ]);
}
