import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// style
import './style.scss';

export default function WeatherWidget({ city}) {
  // local state
  const [description, setDescscription] = useState('temps dégagé');
  const [temperature, setTemperature] = useState('13');
  const [iconId, setIconId] = useState('10d');

  useEffect(() => {
      // secret key for https://openweathermap.org/ API
      const apiKey = process.env.REACT_APP_API_KEY;

      //call api open weather
      const loadData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appId=${apiKey}`);
          const { main: { temp }, weather } = response.data;
          console.log(response)
          console.log(response.data)
          setTemperature(temp);
          setIconId(weather[0].icon)
          setDescscription(weather[0].description)
        }
        catch (error) {
          console.log(error);
        }
      };

    loadData();
  },[city])

  let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`

  return (
    <div className="weather-widget">
        <div className="weather-widget__iconContainer">
          <img className="weather-widget__icon"src={icon} alt="weather icon" />
        </div>
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