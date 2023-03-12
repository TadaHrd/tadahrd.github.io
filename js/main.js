async function getUserWeather() {
    const userLocation = await fetch("http://ip-api.com/json/?fields=61439");
    const data = await userLocation.json();
    return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&current_weather=true`).then(res => res.json());
}

getUserWeather().then(data => showWeather(data));

function showWeather(data) {
    switch (data.current_weather.weathercode) {
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            rain("particles");
            break;
        case 71:
        case 73:
        case 75:
        case 85:
        case 86:
            snow("particles");
            break;
    }

}
