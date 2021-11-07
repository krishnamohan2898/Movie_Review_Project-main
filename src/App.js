/* eslint-disable react/jsx-pascal-case */

import './App.css';
import Movie_Add from './components/Movie_Add';
import Movie_Display from './components/Movie_Display';
import Movie_Search from './components/Movie_Search';


function App() {
  return (
    <div className="App">
      
         <Movie_Display />
         <Movie_Add />
         <Movie_Search />
         
      
    </div>
  );
}

export default App;
