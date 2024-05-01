# Weather App

## Description

This is a weather application built using React with Vite, fetching data from OpenWeatherMap API and Geoapify API. It allows users to check the current weather and forecast for any location worldwide. The application provides information such as sunrise time, wind speed, humidity, maximum and minimum temperature, etc.

## Features

- View current weather conditions for any location.
- Get detailed information including sunrise time, wind speed, humidity, and temperature.
- Responsive design for seamless use on various devices.

## Technologies Used

- React
- Vite
- JSX
- CSS
- Bootstrap
- Material UI
- Framer Motion
- Axios

## APIs Used

- OpenWeatherMap API
- Geoapify API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ghilmi/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Obtain API keys from OpenWeatherMap and Geoapify.
2. Open `.env` file in the root directory.
3. Add your API keys to the `.env` file:

   ```plaintext
   VITE_API_GEO_KEY=...?
   VITE_API_GEO_URL=https://api.geoapify.com/v1/geocode
   VITE_API_WEATHER_URL=https://api.openweathermap.org/data/2.5
   VITE_API_WEATHER_KEY=...?
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data.
- [Geoapify](https://www.geoapify.com/) for providing geocoding and mapping APIs.
- [React](https://reactjs.org/) community for building a powerful frontend library
- Jamaoui Mouad (check on https://github.com/jamaoui ) 

---
