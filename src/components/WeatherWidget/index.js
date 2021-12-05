// style
import './style.scss';

export default function WeatherWidget() {
  return (
    <div className="weather-widget">
        <div className="weather-widget__infos">
          <p className="weather-widget__city">ville</p>
          <p className="weather-widget__description">description</p>
        </div>
      <div className="weather-widget__temperature">température<sup>°</sup>C</div>
    </div>
  );
}
