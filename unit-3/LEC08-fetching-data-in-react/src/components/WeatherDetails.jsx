// src/components/WeatherDetails.jsx
const WeatherDetails = (props) => {
    console.log('WeatherDetails props:', props);
    const { weather } = props
// src/components/WeatherDetails.jsx
return (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {weather?.location}</p>
      <p>Temperature: {weather?.temperature}</p>
      <p>Condition: {weather?.condition}</p>
    </section>
  );
  
}  
  export default WeatherDetails;
  