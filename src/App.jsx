import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import style from "./App.module.css";
import SearchBare from "./Components/SearchBare/SearchBare";
import Wallpaper from "./Components/Wallpaper/Wallpaper";
import Weather from './Components/Weather/Weather';
import { Provider } from "react-redux";
import { store } from './StoreFetchers/Store';

function App() {

  return (
    <Provider store={store}>

    <SearchBare/>
      <Wallpaper/>
      <Weather/>
    </Provider>
  )
}

export default App
