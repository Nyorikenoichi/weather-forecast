import * as React from 'react';
import WeekContainer from './weekContainer';

const App = () => {
  return (
    <>
      <div className={'header'}>
        <h1 className={'title'}>5 day weather forecast</h1>
      </div>,
      <div className={'content'}>
        <h2 className={'city-name'}>Minsk</h2>
        <WeekContainer />
      </div>
    </>
  );
};

export default App;
