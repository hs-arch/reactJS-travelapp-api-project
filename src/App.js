import logo from './logo.svg';
import './App.css';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Map/>
      <PlaceDetails/>
        
    </div>
  );
}

export default App;
