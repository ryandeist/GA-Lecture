import { useState } from "react";

const WeatherSearch = (props) => {
    const { fetchData } = props
    const [city, setCity] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(city)
        setCity('');
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter City</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default WeatherSearch