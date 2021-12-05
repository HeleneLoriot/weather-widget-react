import { useState } from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

export default function WeatherWidget({ city}) {
  // local state
  const [description, setDescscription] = useState('temps dégagé');
  const [temperature, setTemperature] = useState('13');

  return (
    <div className="weather-widget">
        <div className="weather-widget__infos">
          <p className="weather-widget__city">{city}</p>
          <p className="weather-widget__description">{description}</p>
        </div>
      <div className="weather-widget__temperature">{temperature}<sup>°</sup>C</div>
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string,
};

WeatherWidget.defaultProps = {
  city: 'Paris',
};